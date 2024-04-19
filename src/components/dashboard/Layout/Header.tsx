import { useLocation, useNavigate } from "react-router-dom";
import menu from "../../../assets/hamburger.svg"
import { useState } from "react";
import MobileNavbar from "./mobileNavbar";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [showNavbar, setShowNavbar] = useState(false);

  const handleNavigation = (path:any) => {
    setActiveLink(path);
    navigate(path)
    // Perform navigation logic
  };
  

  return (
    <div className="p-[24px] md:px-[120px] md:py-[24px] text-[20px]">
      <div className="grid grid-cols-3 items-center ">
        <img src={menu} className="w-6 flex md:hidden col-span-1" onClick={() => setShowNavbar(true)}/>
        <div className="flex md:hidden col-span-1 dancing font-bold text-[40px] justify-content text-[#01100B]">PetStore</div>
        <div className="flex md:hidden col-span-1"></div>
      </div>

      {showNavbar && <MobileNavbar showNavbar={showNavbar} setShowNavbar={setShowNavbar}/>}
      <div className="hidden md:flex justify-between items-center">
        <div className="dancing font-bold md:text-[40px]">PETStore</div>
        <div className="flex justify-center gap-[100px] text-[#01100B]">
          <nav
            onClick={() =>handleNavigation("/")}
            className={`cursor-pointer  ${activeLink === "/" ? "text-[#F2BC1B]" : ""}`}

          >
            Home
          </nav>
          <nav onClick={() =>handleNavigation("/about")}  className={`cursor-pointer ${activeLink === "/about" ? "text-[#F2BC1B]" : ""}`}>
            About Us
          </nav>
          <nav onClick={() =>handleNavigation("/contact")}  className={`cursor-pointer ${activeLink === "/contact" ? "text-[#F2BC1B]" : ""}`}>
            Contact Us
          </nav>
        </div>
        <div className="flex justify-center gap-[20px]">
          <button
            onClick={() =>handleNavigation("/login")}
            className="cursor-pointer border border-[#01100B] rounded-[24px] py-[10px] px-[25px] text-[#01100B] hover:bg-[#01100B] hover:text-white"
          >
            Login
          </button>
          <button
            onClick={() =>handleNavigation("/signup")}
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
