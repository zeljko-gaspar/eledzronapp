import { Outlet } from "react-router-dom";

// components
import HeaderComponent from "./components/HeaderComponent";
import NavbarComponent from "./components/NavbarComponent";

function AppLayout() {

  return (
  
    <div className="">
      <HeaderComponent />
      <NavbarComponent />
      <Outlet />
    </div>
   
  )
}

export default AppLayout;
