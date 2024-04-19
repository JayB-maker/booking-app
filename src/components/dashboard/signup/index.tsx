import { useNavigate } from "react-router-dom";
import CustomInputField from "../../ui/customHTMLElements/CustomInputField";
import cute from "../../../assets/cutiiee.jpg";


const SignupPage = () => {
  const navigate = useNavigate();
  return (
    <div className="grid flex flex-col md:grid-cols-2 items-center h-screen ">
      <div className="w-[100%] h-full m-auto object-fit bg-white hidden md:flex items-end ">
        <img
          src={cute}
          alt=""
          className="col-span-1 w-full object-fit"
        />
      </div>
      <div className="flex flex-col justify-center bg-[#05422c] text-white h-full p-[20px] md:p-[100px] gap-[32px]">
        <h1 className="text-center font-bold text-[24px]">Register</h1>
        <div className="flex gap-3">
          <CustomInputField type="text" label="First Name" />
          <CustomInputField type="text" label="Last Name" />
        </div>
        <CustomInputField type="email" label="Email"/>
        <CustomInputField type="password" label="Password"/>
        <button className="text-[#05422c] bg-[#93c47d] py-3 rounded-lg text-[20px] font-semibold">Create Account</button>
        <p>Already have an account? <span  className="text-[#93c47d] hover:text-white hover:underline cursor-pointer" onClick={() => navigate("/login")}>Click here to Login</span></p>

      </div>
    </div>
  );
};

export default SignupPage;
