import { useState } from "react";
import { pet } from "../../../helpers/data/pets";
import DashboardGeneralLayout from "../Layout/Dashboardlayout/Dashboardgenerallayout";
import Modal from "../overview/modal";

const Viewpets = () => {
  const [selectedItem, setSelectedItem] = useState({});
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <DashboardGeneralLayout>
        <div className="flex lg:flex-row flex-col gap-[70px] flex-wrap p-[32px] py-[80px] justify-center">
          {pet.map((item, index: number) => {
            return (
              <div
                key={index}
                className="w-[100%] lg:w-[20%] bg-[#01100B] rounded-[32px] overflow-hidden pb-5"
              >
                <div
                  className="bg-[#F4F4F4] w-full flex flex-col justify-center h-[300px] w-full object-cover"
                  onClick={() => {
                    setOpenModal(true);
                    setSelectedItem(item);
                  }}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  {item.Quantity === 0 && (
                    <div className="absolute h-[30px] rounded-[32px] p-5 mx-[70px] flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold uppercase">
                      Out of stock
                    </div>
                  )}
                </div>

                <div className="flex flex-col items-center gap-[20px] py-[32px]">
                  <p className="text-[#9D9EA2] text-[24px] md:text-[14px] uppercase">
                    {item.category}
                  </p>
                  <p className="text-[20px] md:text-[30px] text-center text-white font-medium">
                    {item.name}
                  </p>
                  <p className="font-semibold text-[20px] text-[#F2BC1B]">
                    {item.price}
                  </p>
        
                </div>
              </div>
            );
          })}
        </div>
        {openModal && (
          <Modal
            showModal={openModal}
            closeModal={setOpenModal}
            data={pet}
            selectedItem={selectedItem}
          />
        )}
      </DashboardGeneralLayout>
    </div>
  );
};

export default Viewpets;
