import { useNavigate } from "react-router-dom";
import menu from "../../../assets/view-details-icon copy.svg";
import { useState } from "react";
import MobileNavbar from "./mobileNavbar";

const Header = () => {
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className=" p-[24px] text-[20px]">
      <div className="grid grid-cols-5">
        <img src={menu} className="w-6 flex md:hidden col-span-1" onClick={() => setShowNavbar(true)}/>
        <div className="col-span-4">PET BOOKING SITE</div>
      </div>

      {showNavbar && <MobileNavbar/>}
      <div className="hidden md:flex justify-between">
        <div>PET BOOKING SITE</div>
        <div className="flex justify-center gap-[100px] text-[#01100B]">
          <nav
            onClick={() => navigate("/")}
            className="cursor-pointer hover::text-[#text-[#46494F]"
          >
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
          <button
            onClick={() => navigate("/login")}
            className="cursor-pointer border border-[#01100B] rounded-[24px] py-[10px] px-[25px] text-[#01100B]"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="text-white bg-[#01100B] rounded-[24px] py-[10px] px-[25px]"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
