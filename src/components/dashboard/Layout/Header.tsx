import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="hidden md:flex justify-between p-[24px] text-[20px]">
        <div></div>
      <div className="flex justify-center gap-[100px] text-[#01100B]">
        <nav onClick={() => navigate("/")} className="cursor-pointer hover::text-[#text-[#46494F]">
          Home
        </nav>
        <nav onClick={() => navigate("/about")} className="cursor-pointer">
          About Us
        </nav>
        <nav onClick={() => navigate("/contact")} className="cursor-pointer">
          Contact Us
        </nav>
       
      </div>
      <div className="flex justify-center gap-[20px]">
      <button onClick={() => navigate("/login")} className="cursor-pointer border border-[#01100B] rounded-[24px] py-[10px] px-[25px] text-[#01100B]">
          Login
        </button>
        <button onClick={() => navigate("/signup")} className="text-white bg-[#01100B] rounded-[24px] py-[10px] px-[25px]">Signup</button>
      </div>
    </div>
  );
};

export default Header;
