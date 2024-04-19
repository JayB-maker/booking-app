import GeneralLayout from "../Layout/Generallayout";
import cute from "../../../assets/cutiiee.jpg";

const About = () => {
  return (
    <GeneralLayout>
      <div
        className="relative bg-cover bg-center no-repeat h-[260px] md:h-[350px] bg-[#E6E6E6]"
        style={{ backgroundImage: `url(${cute})` }}
      >
        {/* Background color overlay with opacity */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex flex-col justify-center items-center p-5 text-white relative z-10 h-full">
          <h1 className="font-bold text-[32px] md:text-[60px] text-center">
            About the PetStore
          </h1>
          <p className="text-[14px] md:text-[20px] text-center">
            Founded in 2019, ThePetFam, is the India’s largest network of 5-star
            pet care service providers.
          </p>
        </div>
      </div>
      <div className="p-5">
        <p className="leading-[3rem] text-[20px] text-justify">
          Whether you need in-home pet grooming, pet training, or vet on call,
          ThePetStore connects pet parents with pet care heroes who’ll treat
          their pet like family. We understand your pet is family. <br />
          And you can trust us to keep your pet happy, healthy, and sweet as
          ever. But it’s not just about pet love. ThePetFam is also committed to
          making pet care safe, easy, and affordable so that everyone can
          experience the unconditional love of a pet. <br />
          Whatever you and your furr babies are into, we’re into it too. And
          we’ve got your back. Anytime. Anywhere. ThePetFam donates a portion of
          every service to Pet NGO’s & Rescue shelters through this program. We
          also provide meals to shelter dogs in India.
        </p>
      </div>
    </GeneralLayout>
  );
};

export default About;
