import { ModalContainer } from "../../modal/ModalContainer";
import close from "../../../assets/close-icon.svg";
import CustomInputField from "../../ui/customHTMLElements/CustomInputField";
import { Formik } from "formik";
import { FormProps } from "../Contact";

interface PetModalProps {
  closeModal?: any;
  openModal: boolean;
  pets: any;
  selectedItem: any;
}
const PetModal = (props: PetModalProps) => {
  const { closeModal, openModal, pets, selectedItem } = props;
  console.log(selectedItem);
  return (
    <ModalContainer
      closeModal={closeModal}
      showModal={openModal}
      data={pets}
      selectedItem={selectedItem}
    >
      <div className="flex flex-col bg-[#05422C] w-[100%] md:w-[1000px] p-[50px] md:p-[70px] gap-4 transition-transform duration-500 ease-in-out">
        <div
          className="w-[30px] absolute right-2 top-2 cursor-pointer"
          onClick={() => closeModal(!openModal)}
        >
          <img src={close} alt="" className="w-full relative" />
        </div>

        <Formik
          initialValues={{
            name: selectedItem?.name || "", // Set initial values from selectedItem prop
            category: selectedItem?.category || "",
            price: selectedItem?.price || "",
            quantity: selectedItem?.Quantity || "",
            gender: selectedItem?.Gender || "",
          }}
          onSubmit={(values: any) => console.log(values)}
        >
          {(props: FormProps) => {
            const { values, handleChange, handleSubmit } = props;
            return (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 text-black"
              >
                <CustomInputField
                  onChange={handleChange}
                  type="text"
                  extraLabel="Name"
                  name="name"
                  defaultValue={values.name}
                />
                <CustomInputField
                  onChange={handleChange}
                  type="text"
                  name="category"
                  extraLabel="Category"
                  defaultValue={values.category}
                />
                <CustomInputField
                  onChange={handleChange}
                  type="text"
                  name="price"
                  extraLabel="Price"
                  defaultValue={values.price}
                />
                <CustomInputField
                  onChange={handleChange}
                  type="text"
                  name="quantity"
                  extraLabel="Quantity"
                  defaultValue={values.quantity}
                />
                <CustomInputField
                  onChange={handleChange}
                  type="text"
                  name="gender"
                  extraLabel="Gender"
                  defaultValue={values.gender}
                />
                <button type="submit" className="text-[#05422c] bg-[#93c47d] py-3 rounded-lg text-[20px] font-semibold ">submit</button>
              </form>
            );
          }}
        </Formik>
      </div>
    </ModalContainer>
  );
};

export default PetModal;
