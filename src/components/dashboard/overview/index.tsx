import GeneralLayout from "../Layout/Generallayout";
import petImage from "../../../assets/dog.png";
import delivery from "../../../assets/delivery.png";
import security from "../../../assets/security.png";
import price from "../../../assets/coin.png";
import pet1 from "../../../assets/pet.png";
import pet2 from "../../../assets/pett.jpg";
import pet3 from "../../../assets/petty.jpg";
import pay from "../../../assets/pay.svg";
import reg from "../../../assets/register.svg";
import relax from "../../../assets/relax.svg";
import shop from "../../../assets/shop.svg";
import { useNavigate } from "react-router-dom";
import Modal from "./modal";
import { useEffect, useState } from "react";

const OverviewPage = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const section2 = [
    {
      image: delivery,
      title: "Reliable Shipping",
      description:
        "Green Society provides Canada Post Xpress Shipping right to your doorstep! You can also opt in for shipping insurance. For orders over $149, shipping is free!",
    },
    {
      image: security,
      title: "You are Safe With Us",
      description:
        "Our secure payment system accepts the most common forms of payments making the checkout process quicker! The payments we accept are debit, all major credit cards, and cryptocurrency.",
    },
    {
      image: price,
      title: "Best Quality and Price",
      description:
        "Here at Green Society, we take pride in the quality of our products and service. Our prices are set to ensure you receive your medication at a reasonable price and safely",
    },
  ];

  const latest = [
    {
      id: 1,
      image: pet1,
      category: "DOG",
      name: "Abiodun Emmanuel Ajiboye",
      price: "#5000",
      description:
        "Lorem ipsuim dolor Lorem ipsuim dolor Lorem ipsuim dolor Lorem ipsuim dolor Lorem dolor Lorem ipsuim dolor Lorem ipsuim dolor Lorem ipsuim dolor Lorem ipsuim d",
    },
    {
      id: 2,
      image: pet2,
      category: "DOG",
      name: "Abiodun Emmanuel Ajiboye",
      price: "#5000",
      description:
        "Lorem ipsuim dolor Lorem ipsuim dolor Lorem ipsuim dolor Lorem ipsuim dolor Lorem dolor Lorem ipsuim dolor Lorem ipsuim dolor Lorem ipsuim dolor Lorem ipsuim d",
    },
    {
      id: 3,
      image: pet3,
      category: "DOG",
      name: "Abiodun Emmanuel Ajiboye",
      price: "#5000",
      description:
        "Lorem ipsuim dolor Lorem ipsuim dolor Lorem ipsuim dolor Lorem ipsuim dolor Lorem dolor Lorem ipsuim dolor Lorem ipsuim dolor Lorem ipsuim dolor Lorem ipsuim d",
    },
    {
      id: 4,
      image: pet1,
      category: "DOG",
      name: "Abiodun Emmanuel Ajiboye",
      price: "#5000",
      description:
        "Lorem ipsuim dolor Lorem ipsuim dolor Lorem ipsuim dolor Lorem ipsuim dolor Lorem dolor Lorem ipsuim dolor Lorem ipsuim dolor Lorem ipsuim dolor Lorem ipsuim d",
    },
  ];

  const guide = [
    {
      id: "1",
      image: reg,
      title: "REGISTER",
      desc: "Sign up for an account with us. This is quick and simple. We don’t require any more details from you than the bare minimum needed for you to place an order and get your product delivered.",
    },
    {
      id: "2",
      image: shop,
      title: "SHOP",
      desc: "Decide on what you want to purchase. We stock a wide range of edibles,flowers , concentrates and mushrooms there is bound to be something for everyone.",
    },
    {
      id: "3",
      image: pay,
      title: "MAKE PAYMENT",
      desc: "Pay securely. Our site boasts sturdy protection certificates to keep your card details and related data safe.",
    },
    {
      id: "4",
      image: relax,
      title: "RELAX",
      desc: "Your product will be packaged discretely and shipped by Canada Post Xpresspost. We will provide you with a tracking number so then you can follow your mail order marijuana every step of the way.",
    },
  ];

  // console.log(selectedItem);

  return (
    <>
      <GeneralLayout>
        <div className="bg-[#01100B] flex md:flex-row flex-col justify-between items-center md:h-[720px]">
          <div className="md:pl-[145px] p-[28px] md:w-[50%] text-white flex flex-col gap-[20px]">
            <h1 className="text-[32px] md:text-[64px] font-bold">
              BEST DISPENSARY TO BUY WEED ONLINE{" "}
            </h1>
            <p>
              Shop the best products for your pets from top brands in the
              industry
            </p>
            <button
              onClick={() => navigate("/signup")}
              className="bg-white text-black rounded-[24px] py-[10px] px-[25px] w-[185px] font-medium"
            >
              SHOP NOW
            </button>
          </div>
          <div className="h-full md:w-[40%]">
            <img src={petImage} className="w-full h-full" />
          </div>
        </div>
        <div className="bg-[#F2F6F4] flex flex-col md:grid md:grid-cols-3 p-[24px] gap-[32px] md:p-[80px]">
          {section2.map((section, index) => {
            return (
              <div key={index} className="flex gap-[20px] col-span-1">
                <div className="bg-white w-[64px] h-[50px] md:w-[80px] md:h-[80px]  rounded-[100px] flex justify-center">
                  <img
                    src={section.image}
                    alt=""
                    className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] m-auto"
                  />
                </div>
                <div className="flex flex-col gap-[16px] w-full md:w-[292px]">
                  <h3 className="font-medium text-[20px] md:text-[24px]">
                    {section.title}
                  </h3>
                  <p className="text-[14px] md:text-[16px] text-justify">
                    {section.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-[#01100B] text-white p-[120px] flex flex-col items-center">
          <div className="flex flex-col items-center justify-center md:w-[948px] text-center">
            <h1 className="text-[32px] md:text-[60px] font-semibold">
              HOW TO ORDER PETS ONLINE FROM THIS BOOKING APP - MAIL ORDER PETS
            </h1>
            <p className="text-[14px] md:text-[16px] text-[#9D9EA2]">
              Ordering weed online from Top Shelf BC is easy. We are proud to
              have made the process accessible across multiple platforms and
              simple to understand, meaning that more people can come to us to
              buy their cannabis products online.
            </p>
          </div>
          <div className=" flex flex-col md:grid md:grid-cols-2 p-[24px] gap-x-[32px] gap-y-[64px] md:p-[80px] ">
            {guide.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center w-[548px] gap-[24px]"
                >
                  <div className="flex gap-[34px]">
                    <div className="bg-[#F2BC1B] w-[40px] h-[40px] rounded-[100px] flex items-center">
                      <p className="text-[#05422C] font-semibold m-auto">
                        {item.id}
                      </p>
                    </div>
                    <div>
                      <img src={item.image} className="w-[60%]" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-[24px]">
                    <h3 className="font-semibold text-[24px]">{item.title}</h3>
                    <p className="text-center text-[#9D9EA2]">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center py-5">
          <h1 className="text-[32px] font-bold">RECENTLY ADDED</h1>

          <div className="bg-white flex flex-col md:flex-row flex-wrap p-[24px] gap-[64px] md:p-[40px] justify-center items-center">
            {latest.map((product) => {
              return (
                <div
                  key={product.id}
                  className="flex flex-col col-span-1 gap-[24px] rounded-t-[32px] w-[20%] cursor-pointer"
                >
                  <div
                    className="bg-[#F4F4F4] rounded-[32px] flex justify-center h-[300px] w-full bg-red-500 overflow-hidden object-cover"
                    onClick={() => {
                      setOpenModal(true);
                      setSelectedItem(product);
                    }}
                  >
                    <img
                      src={product.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-[16px]">
                    <p className="text-[#9D9EA2] text-[14px]">
                      {product.category}
                    </p>
                    <p className="md:text-[20px]">{product.name}</p>
                    <p className="font-semibold text-[20px] text-[#01100B]">
                      {product.price}
                    </p>
                    <button className="bg-[#05422C] text-white rounded-[24px] py-[10px] px-[25px] w-[185px] font-medium">
                      Buy Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </GeneralLayout>
      {openModal && (
        <Modal
          showModal={openModal}
          closeModal={setOpenModal}
          data={latest}
          selectedItem={selectedItem}
        />
      )}
    </>
  );
};

export default OverviewPage;
