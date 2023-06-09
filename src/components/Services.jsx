import React from "react";
import ServicesCard from "./ServicesCard";
import boldo from "../assets/b.svg"

const Services = () => {
	return (
		<>
			<div className="flex flex-col justify-center items-center py-[82px] px-[20px]">
				<div className="flex justify-center items-center gap-3">
				<img src={boldo} alt="boldo logo symbol" />
				<p className="text-[#777777]">Our Services</p>
				</div>
				
				<h2 className="leading-[72px] text-[48px] text-center hidden xl:flex grow">
					Handshake infographic mass market <br /> crowdfunding iteration.
				</h2>
				<h2 className="leading-[47px] mt-4 text-[33px] text-center xl:hidden">
					Handshake infographic mass market crowdfunding iteration.
				</h2>
			</div>
			<div className="px-[20px]">
				<ServicesCard />
			</div>
		</>
	);
};

export default Services;
