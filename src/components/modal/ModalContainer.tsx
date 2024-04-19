export const ModalContainer = ({
  children,
  showModal,
  closeModal
}: {
  children: any;
  showModal: boolean;
  closeModal: any;
  data:any;
  selectedItem:any
}): JSX.Element => {
  return (
    <div
      className={`fixed top-0 left-0 z-[100] w-full h-screen flex justify-center items-center animation w-[100%] ${
        showModal ? "opacity-100 visible" : "hidden opacity-0 invisible"
      }`}
    >
      <div className="overflow-hidden rounded-[8px] relative z-[100] ">{children}</div>
      <div
        className="absolute top-0 left-0 w-full h-full overflow-y-auto bg-[#00000066] z-[90]"
        onClick={() => closeModal(!showModal)}
      />
    </div>
  );
};
