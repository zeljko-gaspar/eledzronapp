// images
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

// icons
import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";

function NavbarComponent() {
	return (
		<div className="bg-mainBlue py-[10px] xl:py-[0px] lg:h-[100px] flex items-center">
			<div className="container mx-auto flex justify-between items-center flex-col lg:flex-row gap-[15px]">
				<img src={logo} alt="Logo" />

				<div className="bg-textWhite rounded-[20px] flex">
					<input
						className="px-[25px] py-[17px] rounded-[20px] outline-none placeholder:text-black text-[14px]"
						type="text"
						placeholder="Search product"
					/>
					<button className="rounded-[20px] bg-mainOrange text-textWhite px-[41px] text-[14px]">
						Search
					</button>
				</div>
				{/* general info */}
				<div className="flex items-center gap-[10px] text-textWhite">
					<div className="flex items-center gap-[5px]">
						<CiUser size={30} />
						<span>Sign In</span>
					</div>
					<div className="flex items-center gap-[5px]">
						<div className="flex items-center">
							<CiHeart size={30} />
							<span className="bg-mainOrange rounded-[50%] w-[30px] h-[30px] flex justify-center">
								0
							</span>
						</div>
						<Link to="/">Favorite</Link>
					</div>
					<div className="flex items-center gap-[5px]">
						<div className="flex items-center">
							<CiShoppingCart size={30} />
							<span className="bg-mainOrange rounded-[50%] w-[30px] h-[30px] flex justify-center">
								0
							</span>
						</div>
						<Link to="/">Cart</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavbarComponent;
