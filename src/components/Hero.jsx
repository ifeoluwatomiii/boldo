import React from "react";
import hero from '../assets/hero.png'
import frame from '../assets/frame.png'

const Hero = () => {
	return (
		<div className="bg-[#0A2640] h-[798px]">
			<div className="flex justify-center items-center gap-[150px] px-[100px]">
				<div>
					<h1 className="text-5xl leading-[72px] font-normal text-white">
						Save time by building <br />
						fast with Boldo Template
					</h1>
					<p className="text-[#F1F1F1] leading-[28px] text-[16px] mt-[16px]">
						Funding handshake buyer business-to-business metrics iPad
						partnership. <br /> First mover advantage innovator success
						deployment non-disclosure.
					</p>
                    <div className="flex gap-6 mt-[40px]">
                        <button className="bg-[#65E4A3] text-[#0A2640] text-[20px] leading-[28px] rounded-full py-4 px-12 hover:animate-bounce">Buy template</button>
                        <button className="border-2 rounded-full border-white text-white px-12 py-4 hover:bg-white hover:text-black hover:animate-bounce">Explore</button>
                    </div>
				</div>
                <div className="mt-[71px]">
                    <img className="hover:animate-pulse space-x-4" src={hero} alt="graph" />
                </div>
			</div>
            <div className="bg-white/40 mt-[112px] mx-auto flex items-center justify-center w-[1173px] h-[93px]">
                <img src={frame} alt="" />
            </div>
		</div>
	);
};

export default Hero;
