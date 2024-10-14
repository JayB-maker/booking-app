import { Formik } from "formik";
import DashboardGeneralLayout from "../Layout/Dashboardlayout/Dashboardgenerallayout";
import { FormProps } from "../Contact";
import CustomInputField from "../../ui/customHTMLElements/CustomInputField";
import cute from "../../../assets/cutiiee.jpg";

const CreatePets = () => {
  return (
    <div>
      <DashboardGeneralLayout>
        <div className="flex justify-center">
          <Formik
            initialValues={{
              name: "",
              category: "",
              price: "",
              quantity: "",
              gender: "",
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
                    value={values.name}
                  />
                  <CustomInputField
                    onChange={handleChange}
                    type="text"
                    name="category"
                    extraLabel="Category"
                    value={values.category}
                  />
                  <CustomInputField
                    onChange={handleChange}
                    type="text"
                    name="price"
                    extraLabel="Price"
                    value={values.price}
                  />
                  <CustomInputField
                    onChange={handleChange}
                    type="text"
                    name="quantity"
                    extraLabel="Quantity"
                    value={values.quantity}
                  />
                  <CustomInputField
                    onChange={handleChange}
                    type="text"
                    name="gender"
                    extraLabel="Gender"
                    value={values.gender}
                  />
                  <button
                    type="submit"
                    className="text-[#05422c] bg-[#93c47d] py-3 rounded-lg text-[20px] font-semibold "
                  >
                    submit
                  </button>
                </form>
              );
            }}
          </Formik>
         
        </div>
      </DashboardGeneralLayout>
    </div>
  );
};

export default CreatePets;
