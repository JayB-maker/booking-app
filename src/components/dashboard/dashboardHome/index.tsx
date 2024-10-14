import DashboardGeneralLayout from "../Layout/Dashboardlayout/Dashboardgenerallayout";
import { pet } from "../../../helpers/data/pets";
import edit from "../../../assets/edit (1) 2.png";
import deleteIcon from "../../../assets/delete-icon.svg"
import { useState } from "react";
import Modal from "../overview/modal";
import PetModal from "./petModal";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  return (
    <div>
      <DashboardGeneralLayout>
        <div className="grid md:grid-cols-3 gap-[48px] p-5 overflow-hidden ">
          <div className="bg-white p-5 flex flex-col items-center justify-center gap-3 w-[100%] lg:col-span-1  rounded-lg">
            <h2 className="font-bold text-[32px]">Available Pets</h2>
            <h2 className="font-bold text-[28px] text-gray-400">300</h2>
          </div>
          <div className="bg-white p-5 flex flex-col items-center justify-center gap-3 col-span-1 rounded-lg">
            <h2 className="font-bold text-[32px]">Sold Pets</h2>
            <h2 className="font-bold text-[28px] text-gray-400">300</h2>
          </div>
          <div className="bg-white p-5 flex flex-col items-center justify-center gap-3 col-span-1 rounded-lg">
            <h2 className="font-bold text-[32px]">Available Pets</h2>
            <h2 className="font-bold text-[28px] text-gray-400">300</h2>
          </div>
        </div>
        <div className="flex flex-col py-5 m-auto overflow-scroll p-5">
          <div className="flex gap-5 whitespace-nowrap py-5 w-[250%] lg:w-[100%] text-white pl-3 bg-gray-600">
            <h2 className="font-bold w-[20%]">Name</h2>
            <h2 className="font-bold w-[20%]">Category</h2>
            <h2 className="font-bold w-[20%]"> Unit Price</h2>
            <h2 className="font-bold w-[20%]">Quantity Available</h2>
            <h2 className="font-bold w-[20%]">Gender</h2>
            <h2 className="font-bold w-[20%]">Action</h2>
          </div>
          {pet.map((pets:any, index:number) => {
            const rowClass = index % 2 === 0 ? 'bg-white' : 'bg-gray-200';
            return (
              <div className={`w-[250%] lg:w-[100%] p-4 flex ${rowClass}`} key={index}>
                <p className="w-[20%]">{pets.name}</p>
                <p className="w-[20%]">{pets.category}</p>
                <p className="w-[20%]">{pets.price}</p>
                <p className="w-[20%]">{pets.Quantity}</p>
                <p className="w-[20%]">{pets.Gender}</p>
                <p className="w-[20%] flex gap-3">
                  <img src={edit} className="w-[20px] h-[20px]" onClick={()=>{setOpenModal(true); setSelectedItem(pets)}}/>
                  <img src={deleteIcon} className="w-[20px] h-[20px]"/>

                </p>


              </div>
            );
          })}
        </div>
        {openModal && (
        <PetModal pets={selectedItem} openModal={openModal} selectedItem={selectedItem} closeModal={setOpenModal}/>
      )}
      </DashboardGeneralLayout>
    </div>
  );
};

export default Home;
