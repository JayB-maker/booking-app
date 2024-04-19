import GeneralLayout from "../Layout/Generallayout";
import cute from "../../../assets/cutiiee.jpg";
import CustomInputField from "../../ui/customHTMLElements/CustomInputField";
import CustomTextArea from "../../ui/customHTMLElements/CustomTextArea";

const Contact = () => {
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
            Contact the PetStore
          </h1>
          <p className="text-center">Let's make your pet's experience with us paws-itively perfect! </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 md:py-[100px] md:px-[200px] px-[30px] py-[50px] gap-[40px] md:gap-[60px]">
        <div className="md:col-span-1 flex flex-col gap-[30px] md:gap-[40px] md:w-[500px] w-full">
          <div>
            <h2 className="font-bold md:text-[32px] text-[24px] ">Pet Store</h2>
            <p className="text-justify">
              Get in touch with us at Pet Haven! Whether you have questions
              about our products, need advice on pet care, or simply want to
              share cute pet stories, we're all ears! Drop us a line, give us a
              call, or visit us in-store. We can't wait to hear from you!
            </p>
          </div>
          <div>
            <h2 className="font-bold text-[18px] md:text-[20px]">Email</h2>
            <a
              href="mailto:chisomisiekwene57@gmail.com"
              className="hover:text-[blue] hover:underline"
            >
              chisomisiekwene57@gmail.com
            </a>
          </div>
          <div className="">
            <h2 className="font-bold md:text-[20px] text-[18px] md:text-[20px]">Socials</h2>
            <div className="flex flex-row md:flex-col gap-[16px]">
              <a
                href="http://www.instagram.com/"
                className="hover:text-[blue] hover:underline"
              >
                Instagram
              </a>
              <a
                href="http://www.twitter.com"
                className="hover:text-[blue] hover:underline"
              >
                Twitter
              </a>
              <a
                href="http://www.facebook.com"
                className="hover:text-[blue] hover:underline"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="md:col-span-1 flex flex-col gap-[15px]">
          <div className="flex flex-col gap-[32px] md:gap-[48px]">
            <CustomInputField type="text" extraLabel="Name" required />
            <CustomInputField type="email" extraLabel="Email" required />
            <CustomTextArea label="Message" />
          </div>
          <button className="bg-[#01100B] text-white w-full py-3 rounded-lg">Submit</button>
        </div>
      </div>
    </GeneralLayout>
  );
};

export default Contact;
