import Sidebar from "./sidebar";
import DashboardHeader from "./Dashboardheader";


interface ILayoutProps {
  children: any;
}
const DashboardGeneralLayout = (props: ILayoutProps) => {
  const { children } = props;

  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="fixed hidden md:block text-white w-[12%] h-screen p-5 bg-[#01100B]">
        <Sidebar />
      </div>
      <div className="relative lg:left-[12%] overflow-y-hidden w-[100%]">
        <div className="fixed p-5 w-full  bg-white">
          <DashboardHeader />
        </div>
        <div className=" bg-[#F2F6F4] h-[90%] mt-[70px] md:w-[88%] w-[100%]">

        {children}
        </div>
      </div>
    </div>
   
  );
};

export default DashboardGeneralLayout;
