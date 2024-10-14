import logo from "../../../../assets/logo-removebg-preview.png";
import view from "../../../../assets/view-details-icon copy.svg";
import create from "../../../../assets/upload-image.svg"
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState(location.pathname);


    const handleNavigation = (path:any) => {
        setActiveLink(path);
        navigate(path)
        // Perform navigation logic
      };
      
  return (
    <div className="flex flex-col gap-[40px]">
      <div className="w-[70px]">
        <img src={logo} className="w-full" />
      </div>
      <div className="flex flex-col gap-[40px]">
      <nav className={`flex gap-3 cursor-pointer ${activeLink === "/dashboard" ? "text-[#93c47d]" : "text-white"}`} onClick={() =>handleNavigation("/dashboard")}>
            <img src={view} className="w-[20px]"/>
            <span>Overview</span>
        </nav>
        <nav className={`flex gap-3 cursor-pointer ${activeLink === "/dashboard/view-pets" ? "text-[#93c47d]" : "text-white"}`} onClick={() =>handleNavigation("/dashboard/view-pets")}>
            <img src={view} className="w-[20px]"/>
            <span> View Pets</span>
        </nav>
        <nav className={`flex gap-3 cursor-pointer ${activeLink === "/dashboard/create-pets" ? "text-[#93c47d]" : "text-white"}`} onClick={() =>handleNavigation("/dashboard/create-pets")}>
            <img src={create}/>
            <span> Create Pets</span>
            </nav>
      </div>
    </div>
  );
};

export default Sidebar;
