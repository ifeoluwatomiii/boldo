import React, { useState } from "react";
import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import { RiMenu4Line } from "react-icons/ri";
import { VscClose } from "react-icons/vsc";
import black from "../assets/blackboldo.png"

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex justify-between items-center xl:px-[100px] px-[20px] py-[30px] xl:py-[54px] bg-[#0A2640] w-full">
			<div >
				<img className="w-[60%] xl:w-full" src={logo} alt="boldo logo" />
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
					? "z-20 flex gap-8 list-none cursor-pointer xl:hidden flex-col transition-all ease-in duration-500 top-0 left-0 pl-5 bg-white fixed h-[100vh] w-[70%] shadow-lg pt-4"
					: "flex gap-8 list-none cursor-pointer flex-col  top-0 left-[-100%] pl-5 bg-white fixed h-[100vh] w-[70%] shadow-lg pt-4 transition-all ease-out duration-500"
				}>
					<img className="w-[40%]" src={black} alt="" />
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
