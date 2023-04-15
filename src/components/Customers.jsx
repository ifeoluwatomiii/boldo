import React from "react";
import star from "../assets/star.svg";
import starr from "../assets/starr.svg";
import sun from "../assets/sun.svg";
import woman from "../assets/woman.png";

const Customers = () => {
	return (
		<div className="mt-[206px] flex justify-center items-center gap-[150px]">
			<div className="flex flex-col gap-[24px]">
				<h3 className="leading-[56px] text-[36px]">
					We connect our customers <br /> with the best, and help them <br /> keep up-and stay
					open.
				</h3>
				<div className="bg-[#0A2640] w-[500px] h-[58px] rounded py-4 px-4 transition transform hover:hover:scale-110 duration-500 ease-in-out">
					<img className="absolute" src={star} alt="feather logo" />
					<p className="text-white relative left-[50px] leading-[28px] text-[16px]">
						We connect our customers with the best.
					</p>
				</div>
				<div className="w-[500px] h-[58px] shadow-md shadow-slate-200 rounded py-4 px-4 transition transform hover:hover:scale-110 duration-500 ease-in-out">
					<img className="absolute" src={starr} alt="feather logo" />
					<p className=" relative left-[50px] leading-[28px] text-[16px]">
						Advisor success customer launch party.
					</p>
				</div>
				<div className="w-[500px] h-[58px] shadow-md shadow-slate-200 rounded py-4 px-4 transition transform hover:hover:scale-110 duration-500 ease-in-out">
					<img className="absolute" src={sun} alt="feather logo" />
					<p className=" relative left-[50px] leading-[28px] text-[16px]">
						Business-to-consumer long tail.
					</p>
				</div>
			</div>
			<div>
				<img src={woman} alt="woman on the telephone" />
			</div>
		</div>
	);
};

export default Customers;
