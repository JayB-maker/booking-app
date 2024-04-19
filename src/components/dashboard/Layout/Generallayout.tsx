import Footer from "./Footer";
import Header from "./Header";

interface ILayoutProps{
    children:any
}
const GeneralLayout = (props:ILayoutProps) => {
    const {children} = props
 
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default GeneralLayout;
