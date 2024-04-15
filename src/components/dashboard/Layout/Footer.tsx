const Footer = () => {
  return (
    <div className="flex justify-center bg-[#01100B] text-white p-[32px]">
      <div className="w-[30%] justify-center col-span-1 flex flex-col gap-[14px]">
        <h1>ABOUT</h1>
        <p className="w-[70%] text-justify">
          Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce
          dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam
          volutpat, sed ullamcorper erat commodo. Vestibulum sit amet ipsum
          vitae mauris mattis vulputate lacinia nec neque. Aenean{" "}
        </p>
      </div>
      <div className="w-[30%] justify-center col-span-1 flex flex-col gap-[14px]">
        <h1>LOCATE US</h1>
        <p className="w-[70%] text-justify"> Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce
          dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam
          volutpat, sed ullamcorper erat commodo. Vestibulum sit amet ipsum
          vitae mauris mattis vulputate lacinia nec neque. Aenean</p>
      </div>
      <div className="w-[30%] justify-center col-span-1 flex flex-col gap-[14px]">
        <h1>QUICK LINKS</h1>
        <ul className="flex flex-col gap-[20px]">
          <a href="/">Home</a>
          <a href="/">Home</a>
          <a href="/">Home</a>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
