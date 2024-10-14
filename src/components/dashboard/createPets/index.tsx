import { Formik } from "formik";
import DashboardGeneralLayout from "../Layout/Dashboardlayout/Dashboardgenerallayout";
import { FormProps } from "../Contact";
import CustomInputField from "../../ui/customHTMLElements/CustomInputField";
// import cute from "../../../assets/cutiiee.jpg";

const CreatePets = () => {
  return (
    <div>
      <DashboardGeneralLayout>
        <div className="flex justify-center p-5 md:p-20 ">
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
                  className="flex flex-col gap-8 text-white w-full md:w-[80%] bg-[#0a2c20] p-14 rounded-lg"
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
                    className="md:m-auto bg-[#24684f] text-white py-4 rounded-lg text-[20px] md:w-[30%] font-bold "
                  >
                    Submit
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
