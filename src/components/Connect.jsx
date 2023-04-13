import React from "react";
import phone from "../assets/phonecall.png";
import icon from "../assets/icon.svg";

const Connect = () => {
	return (
		<div className="mt-[206px] flex justify-center items-center gap-[150px]">
			<div>
				<img src={phone} alt="man on phone and a graph" />
			</div>
			<div> 
				<h3 className="text-[36px] leading-[56px] ">
					We connect our customers <br /> with the best, and help them <br />{" "}
					keep up-and stay open.
				</h3>
				<div className="mt-[40px]">
					<div>
						<img className="absolute" src={icon} alt="" />
						<p className="relative left-[60px] text-[20px] leading-[32px]">
							We connect our customers with the best.
						</p>
					</div>
					<div className="mt-[24px]">
						<img className="absolute" src={icon} alt="" />
						<p className="relative left-[60px] text-[20px] leading-[32px]">
                            Advisor success customer launch party.
						</p>
					</div>
					<div className="mt-[24px]">
						<img className="absolute" src={icon} alt="" />
						<p className="relative left-[60px] text-[20px] leading-[32px]">
                            Business-to-consumer long tail.
						</p>
					</div>
				</div>
                <button className="bg-[#0A2640] text-white text-[20px] leading-[28px] rounded-full py-4 px-12 mt-[56px]">Start Now</button>
			</div>
		</div>
	);
};

export default Connect;
