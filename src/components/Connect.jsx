import React from "react";
import phone from "../assets/phonecall.png";
import icon from "../assets/icon.svg";

const Connect = () => {
	return (
		<div className="mt-[206px] flex justify-center items-center xl:gap-[150px] px-[20px] flex-col xl:flex-row">
			<div className="mt-[-50px] xl:mt-0">
				<img src={phone} alt="man on phone and a graph" />
			</div>
			<div className="w-[450px] px-[20px] xl:px-0">
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
				<div className="mt-[40px] px-[14px]">
					<div className="xl:w-[500px] xl:h-[58px] shadow-md shadow-slate-200 rounded py-4 px-4 transition transform hover:hover:scale-110 duration-500 ease-in-out">
						<img className="absolute" src={icon} alt="" />
						<p className="relative left-[60px] xl:text-[20px] leading-[32px] text-[16px]">
							We connect our customers with the best.
						</p>
					</div>
					<div className="mt-[24px] xl:w-[500px] xl:h-[58px] shadow-md shadow-slate-200 rounded py-4 px-4 transition transform hover:hover:scale-110 duration-500 ease-in-out">
						<img className="absolute" src={icon} alt="" />
						<p className="relative left-[60px] xl:text-[20px] leading-[32px] text-[16px]">
							Advisor success customer launch party.
						</p>
					</div>
					<div className="mt-[24px] xl:w-[500px] xl:h-[58px] shadow-md shadow-slate-200 rounded py-4 px-4 transition transform hover:hover:scale-110 duration-500 ease-in-out">
						<img className="absolute" src={icon} alt="" />
						<p className="relative left-[60px] xl:text-[20px] leading-[32px] text-[16px]">
							Business-to-consumer long tail.
						</p>
					</div>
				</div>
				<div className="px-[20px]">
					<button className="bg-[#0A2640]  text-white text-[20px] leading-[28px] rounded-full py-4 px-12 mt-[56px] hover:animate-bounce">
						Start Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default Connect;
