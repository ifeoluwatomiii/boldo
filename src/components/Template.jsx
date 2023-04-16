import React from "react";
import testimonial1 from "../assets/testimonial1.png";
import testimonial2 from "../assets/testimonial2.png";
import testimonial3 from "../assets/testimonial3.png";
import { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";


const Template = () => {
	const [carousel, setCarousel] = useState(0);

	const images = [testimonial1, testimonial2, testimonial3];

	const handleNext = () => {
		setCarousel((prevIndex) => (prevIndex + 2) % images.length);
	};

	const handlePrev = () => {
		setCarousel((nextIndex) => (nextIndex + 1) % images.length);
	};

	return (
		<div className="bg-[#0A2640] flex flex-col justify-center items-center py-[96px] px-[20px]">
			<div className="mt-[96px] text-[48px] leading-[72px]">
				<h3 className="text-white text-[48px] leading-[72px] text-center">
					An enterprise template to ramp <br /> up your company website
				</h3>
			</div>
			<div className="flex justify-center items-center mt-[72px]">
				<GrFormPrevious
					className="w-[50px] h-[50px]  bg-white rounded-full cursor-pointer transform translate-x-0"
					onClick={handlePrev}
				/>
                
				<img className="h-[394px] w-[400px]" src={images[carousel]} alt={`Image ${carousel + 1}`} />
                

				<GrFormNext
					className="w-[50px] h-[50px] bg-white rounded-full cursor-pointer"
					onClick={handleNext}
				/>
			</div>
           
		</div>
	);
};

export default Template;
