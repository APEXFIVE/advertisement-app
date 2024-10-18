import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";


const DashbordLayout = () => {
  return (
    <div>
     
      <Sidebar />
      <Outlet/>
      <div></div>
    </div>
  );
};

export default DashbordLayout;