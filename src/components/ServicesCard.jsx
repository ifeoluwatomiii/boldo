import React from "react";
import man from "../assets/mangreen.svg";
import handshake from "../assets/handshake.svg";
import sitting from "../assets/sitting.svg";
import { BsArrowRight } from "react-icons/bs";

const ServicesCard = () => {
	return (
		<div className="container max-w-[1280px] mx-auto flex gap-[100px] justify-center items-center">
			<div>
				<img className="transition transform hover:hover:scale-95 duration-500 ease-in-out" src={man} alt="svg man in a green background" />
				<h3 className="text-[24px] leading-[36px] mt-[24px]">
					Cool feature title
				</h3>
				<p className="text-[20px] leading-[32px] text-[#777777] mt-[12px]">
					Learning curve network effects <br /> return on investment.
				</p>
				<div className="py-4">
					<button className="absolute underline decoration-2 underline-offset-8 text-[20px] leading-[36px] text-[#0A2640]">
						Explore Page
					</button>
					<BsArrowRight className="relative left-[120px] top-2 w-[24px] h-[26px]" />
				</div>
			</div>
			<div>
				<img className="transition transform hover:hover:scale-95 duration-500 ease-in-out" src={handshake} alt="svg man in a green background" />
				<h3 className="text-[24px] leading-[36px] mt-[24px]">
					Even cooler feature
				</h3>
				<p className="text-[20px] leading-[32px] text-[#777777] mt-[12px]">
					Learning curve network effects <br /> return on investment.
				</p>
				<div className="py-4">
					<button className="absolute underline underline-offset-8 decoration-2 text-[20px] leading-[36px] text-[#0A2640]">
						Explore Page
					</button>
					<BsArrowRight className="relative left-[120px] top-2 w-[24px] h-[26px]" />
				</div>
			</div>
			<div>
				<img className="transition transform hover:hover:scale-95 duration-500 ease-in-out" src={sitting} alt="svg man in a green background" />
				<h3 className="text-[24px] leading-[36px] mt-[24px]">
					Even cooler feature
				</h3>
				<p className="text-[20px] leading-[32px] text-[#777777] mt-[12px]">
					Learning curve network effects <br /> return on investment.
				</p>
				<div className="py-4">
					<button className="absolute underline underline-offset-8 decoration-2 text-[20px] leading-[36px] text-[#0A2640]">
						Explore Page
					</button>
					<BsArrowRight className="relative left-[120px] top-2 w-[24px] h-[26px]" />
				</div>
			</div>
		</div>
	);
};

export default ServicesCard;
