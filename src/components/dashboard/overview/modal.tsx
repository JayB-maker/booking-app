import { ModalContainer } from "../../modal/ModalContainer";
import close from "../../../assets/close-icon.svg";

interface ModalProps {
  closeModal: any;
  showModal: boolean;
  data: any;
  selectedItem: any;
}
const Modal = (props: ModalProps) => {
  const { closeModal, showModal, data, selectedItem } = props;
  console.log(selectedItem);
  return (
    <ModalContainer
      closeModal={closeModal}
      showModal={showModal}
      data={data}
      selectedItem={selectedItem}
    >
      <div className="flex flex-col bg-[#05422C] w-[1000px] p-[70px] gap-4">
        <div className="w-[30px] absolute right-2 top-2 cursor-pointer" onClick={()=>closeModal(!showModal)}>
          <img src={close} alt="" className="w-full relative" />
        </div>

        <div className="text-white flex gap-[40px]">
          <div className="w-[40%] h-[300px] rounded-lg overflow-hidden">
            <img
              src={selectedItem.image}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-[70%] flex flex-col gap-[24px]">
            <div>
              <h2 className="md:text-[20px]">{selectedItem.name}</h2>
              <p className="text-[#9D9EA2] text-[14px]">
                {selectedItem.category}
              </p>
            </div>

            <p>{selectedItem.description}</p>
            <p className="font-semibold text-[20px] text-[#F2BC1B]">
              {selectedItem.price}
            </p>

            <button className="bg-white text-[#05422C] rounded-[24px] py-[10px] px-[25px] w-[185px] font-semibold">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default Modal;
