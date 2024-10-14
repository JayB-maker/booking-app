import view from "../../../../assets/view-details-icon copy.svg";
import create from "../../../../assets/upload-image.svg";
import close from "../../../../assets/close-icon.svg";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface sidebarProps {
  setShow: any;
}

const MobileSidebar = (props: sidebarProps) => {
  const { setShow } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleNavigation = (path: any) => {
    setActiveLink(path);
    navigate(path);
    // Perform navigation logic
  };

  return (
    <div className="fixed h-screen top-0 left-0 flex flex-col gap-[100px] p-7 w-[60%] bg-[#01100B] z-[100]">
      <img
        src={close}
        className="w-[32px] absolute top-3 right-3 cursor-pointer"
        onClick={() => setShow(false)}
      />
      <div className="flex flex-col relative mt-[40px] gap-[40px]">
        <nav
          className={`flex gap-3 cursor-pointer ${
            activeLink === "/dashboard" ? "text-[#93c47d]" : "text-white"
          }`}
          onClick={() => handleNavigation("/dashboard")}
        >
          <img src={view} className="w-[20px]" />
          <span>Overview</span>
        </nav>
        <nav
          className={`flex gap-3 cursor-pointer ${
            activeLink === "/dashboard/view-pets"
              ? "text-[#93c47d]"
              : "text-white"
          }`}
          onClick={() => handleNavigation("/dashboard/view-pets")}
        >
          <img src={view} className="w-[20px]" />
          <span> View Pets</span>
        </nav>
        <nav
          className={`flex gap-3 cursor-pointer ${
            activeLink === "/dashboard/create-pets"
              ? "text-[#93c47d]"
              : "text-white"
          }`}
          onClick={() => handleNavigation("/dashboard/create-pets")}
        >
          <img src={create} />
          <span> Create Pets</span>
        </nav>
      </div>
    </div>
  );
};

export default MobileSidebar;
