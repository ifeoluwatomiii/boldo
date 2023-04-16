import React, { useState } from "react";
import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import { RiMenu4Line } from "react-icons/ri";
import { VscClose } from "react-icons/vsc";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex justify-between items-center xl:px-[100px] px-[20px] py-[54px] bg-[#0A2640] w-full">
			<div className="">
				<img src={logo} alt="boldo logo" />
			</div>

			{/*desktop navbar*/}

			<div className="flex gap-[40px] items-center text-white hidden xl:flex grow xl:justify-end">
				<Link to="/">Product</Link>
				<Link to="services">Services</Link>
				<Link to="about">About</Link>
				<button className="border-2 rounded-3xl py-2 px-8 text-[#0A2640] bg-white font-bold">
					Log in
				</button>
			</div>

			{/*mobile navbar*/}

			<div
				className={
					isOpen
						? "bg-black/70  flex flex-col gap-4 w-[50%] xl:hidden px-4 py-8 text-white mt-8 cursor-pointer  transition-all ease-in duration-500 shadow-lg fixed top-9 left-[43%] items-center"
						: " text-white transition-all ease-out duration-500 hidden"
				}>
				<Link to="/" className="hover:bg-white hover:text-black w-full text-center">Product</Link>
				<Link to="services" className="hover:bg-white hover:text-black w-full text-center">Services</Link>
				<Link to="about" className="hover:bg-white hover:text-black w-full text-center">About</Link>
				
			</div>

			<div>
				{isOpen ? (
					<VscClose
						className="w-[30px] h-[40px] text-white relative cursor-pointer"
						title="Close"
						onClick={() => setIsOpen(!isOpen)}
					/>
				) : (
					<RiMenu4Line
						className="text-white w-6 h-6 xl:hidden cursor-pointer"
						title="Menu"
						onClick={() => setIsOpen(!isOpen)}
					/>
				)}
			</div>
		</div>
	);
};

export default Navbar;
