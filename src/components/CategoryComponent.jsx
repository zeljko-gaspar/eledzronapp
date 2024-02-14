import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ProductsService from "../services/productsService";

function CategoryComponent() {
	const [category, setCategory] = useState([]);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		ProductsService.getAllCategory()
			.then((res) => setCategory(res.data))
			.catch((err) => toast.warning("Nesto nije uredu sa podacima"));
	}, []);

	return (
		<div className="bg-[#f4f4f4] py-[20px]">
			<div className="container mx-auto flex items-center flex-col lg:flex-row h-full gap-8">
				<button
					className="bg-mainBlue text-textWhite px-[12px] p-[6px] rounded-md cursor-pointer hover:bg-mainOrange text-[14px]"
					onClickCapture={() => setIsActive(!isActive)}
				>
					{!isActive ? "Show Category" : "Hide Category"}
				</button>
				<ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 xl:grid-cols-5 text-center place-items-center w=[100%]">
					{isActive
						? category.map((cat, index) => {
								return (
									<li
										key={index}
										className="bg-mainBlue text-textWhite px-[16px] p-[8px] w=[250px] rounded-md cursor-pointer hover:bg-mainOrange transition-all"
									>
										{cat}
									</li>
								);
						  })
						: null}
				</ul>
			</div>
		</div>
	);
}

export default CategoryComponent;
