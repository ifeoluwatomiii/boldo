import React from "react";
import star from "../assets/star.svg";
import starr from "../assets/starr.svg";
import sun from "../assets/sun.svg";
import woman from "../assets/woman.png";

const Customers = () => {
	return (
		<div className="xl:mt-[206px] mt-[100px] flex justify-center items-center gap-[150px] flex-col xl:flex-row px-[20px] ">
			<>
				<img className="xl:hidden" src={woman} alt="" />
			</>
			<div className="flex flex-col xl:gap-[24px] px-[20px] xl:w-1/2">
				<div className="px-[20px] xl:px-0">
					{/*desktop text*/}
					<h3 className="leading-[56px] text-[36px] hidden xl:flex grow">
						We connect our customers <br /> with the best, and help them <br />{" "}
						keep up-and stay open.
					</h3>
					{/*mobile text*/}
					<h3 className="text-[24px] leading-[46px] xl:hidden mt-[-130px]">
						We connect our customers with the best, and help them keep up-and
						stay open.
					</h3>
				</div>

				<div className=" xl:px-0">
					<div className="bg-[#0A2640] rounded py-4 xl:px-4 transition transform hover:hover:scale-110 duration-500 ease-in-out mt-2 px-2 flex items-center gap-3">
						<img className="" src={star} alt="feather logo" />
						<p className="text-white leading-[28px] text-[16px]">
							We connect our customers with the best.
						</p>
					</div>
					<div className="shadow-md shadow-slate-200 rounded py-4 xl:px-4 transition transform hover:hover:scale-110 duration-500 ease-in-out mt-2 px-2 flex items-center gap-3">
						<img className="" src={starr} alt="feather logo" />
						<p className="leading-[28px] text-[16px]">
							Advisor success customer launch party.
						</p>
					</div>
					<div className="shadow-md shadow-slate-200 rounded py-4 xl:px-4 transition transform hover:hover:scale-110 duration-500 ease-in-out mt-2 px-2 flex items-center gap-3">
						<img className="" src={sun} alt="feather logo" />
						<p className="leading-[28px] text-[16px]">
							Business-to-consumer long tail.
						</p>
					</div>
				</div>
			</div>
			<div className="xl:w-1/2">
				<img
					className="hidden xl:flex grow items-center justify-center "
					src={woman}
					alt="woman on the telephone"
				/>
			</div>
		</div>
	);
};

export default Customers;
