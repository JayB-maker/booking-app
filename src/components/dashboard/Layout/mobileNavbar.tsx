import { useLocation, useNavigate } from "react-router-dom";
import close from "../../../assets/close-icon.svg";
import { useState } from "react";

interface navProps{
    showNavbar: boolean;
    setShowNavbar: any
}

const MobileNavbar = (props:navProps) => {
    const {showNavbar, setShowNavbar} = props
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleNavigation = (path: any) => {
    setActiveLink(path);
    navigate(path);
    // Perform navigation logic
  };
  return (
    <div className="fixed top-0 left-0 z-[100] w-full h-screen bg-white p-5 flex flex-col gap-3">
      <div className="w-[40px]"  onClick={()=> setShowNavbar(false)}>
        <img src={close} className="w-full"/>
      </div>
      <div className="md:hidden flex flex-col justify-between items-center text-center h-full p-5 mb-2">
        <div className="flex flex-col gap-[50px] text-[#01100B]">
          <nav
            onClick={() => handleNavigation("/")}
            className={`cursor-pointer  ${
              activeLink === "/" ? "text-[#F2BC1B]" : ""
            }`}
          >
            Home
          </nav>
          <nav
            onClick={() => handleNavigation("/about")}
            className={`cursor-pointer ${
              activeLink === "/about" ? "text-[#F2BC1B]" : ""
            }`}
          >
            About Us
          </nav>
          <nav
            onClick={() => handleNavigation("/contact")}
            className={`cursor-pointer ${
              activeLink === "/contact" ? "text-[#F2BC1B]" : ""
            }`}
          >
            Contact Us
          </nav>
        </div>
        <div className="flex flex-col justify-center gap-[20px]">
          <button
            onClick={() => handleNavigation("/login")}
            className="cursor-pointer border border-[#01100B] rounded-lg py-[10px] px-[25px] text-[#01100B] hover:bg-[#01100B] hover:text-white"
          >
            Login
          </button>
          <button
            onClick={() => handleNavigation("/signup")}
            className="text-white bg-[#01100B] rounded-lg py-[10px] px-[25px]"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
