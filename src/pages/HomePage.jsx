import { useEffect } from "react";
import ProductsService from "../services/productsService";
import { useDispatch } from "react-redux";
import { getProductHandler } from "../store/productSlice";

function HomePage() {
	const dispatch = useDispatch();

	useEffect(() => {
		ProductsService.getAllProducts()
			.then((res) => dispatch(getProductHandler(res.data.products)))
			.catch((err) => console.log(err));
	}, []);

	return <div>HomePage</div>;
}

export default HomePage;
