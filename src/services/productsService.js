import axios from "axios";

class ProductsService {
	static getAllProducts = () => axios.get("/products");
	static getAllCategory = () => axios.get("/products/categories");
}
export default ProductsService;
