import { Outlet } from "react-router-dom";

// components
import HeaderComponent from "./components/HeaderComponent";
import NavbarComponent from "./components/NavbarComponent";
import CategoryComponent from "./components/CategoryComponent";

import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";

function AppLayout() {
	return (
		<div className="">
			<HeaderComponent />
			<NavbarComponent />
			<CategoryComponent />
			<Outlet />
		</div>
	);
}

export default AppLayout;
