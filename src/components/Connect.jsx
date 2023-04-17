import React from "react";
import phone from "../assets/phonecall.png";
import icon from "../assets/icon.svg";

const Connect = () => {
	return (
		<div className="mt-[206px] flex justify-center items-center xl:gap-[150px] px-[20px] flex-col xl:flex-row xl:container max-w-[1400px] mx-auto w-full">
			<div className="mt-[-50px] xl:mt- xl:w-1/2">
				<img src={phone} alt="man on phone and a graph" />
			</div>
			<div className=" px-[20px] xl:px-0 xl:w-1/2">
				{/*desktop text*/}
				<h3 className="text-[36px] leading-[56px] hidden xl:flex grow">
					We connect our customers <br /> with the best, and help them <br />
					keep up-and stay open.
				</h3>
				{/*mobile text*/}
				<h3 className="text-[26px] leading-[46px] px-[25px] xl:hidden">
					We connect our customers with the best, and help them keep up-and stay
					open.
				</h3>
				<div className="mt-[40px]  xl:px-0 w-full">
					<div className=" shadow-md shadow-slate-200 rounded py-4 px-4 transition transform hover:hover:scale-110 duration-500 ease-in-out flex items-center gap-3">
						<img className="" src={icon} alt="" />
						<p className=" xl:text-[20px] leading-[32px] text-[16px]">
							We connect our customers with the best.
						</p>
					</div>
					<div className="mt-[24px] shadow-md shadow-slate-200 rounded py-4 px-4 transition transform hover:hover:scale-110 duration-500 ease-in-out flex items-center gap-3">
						<img className="" src={icon} alt="" />
						<p className=" xl:text-[20px] leading-[32px] text-[16px]">
							Advisor success customer launch party.
						</p>
					</div>
					<div className="mt-[24px] shadow-md shadow-slate-200 rounded py-4 px-4 transition transform hover:hover:scale-110 duration-500 ease-in-out flex items-center gap-3">
						<img className="" src={icon} alt="" />
						<p className=" xl:text-[20px] leading-[32px] text-[16px]">
							Business-to-consumer long tail.
						</p>
					</div>
				</div>
				<div className="">
					<button className="bg-[#0A2640]  text-white text-[20px] leading-[28px] rounded-full py-4 px-12 mt-[56px] hover:animate-bounce">
						Start Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default Connect;
