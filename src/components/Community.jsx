import React from "react";
import community from "../assets/community.png";

import AccordionList from "./AccordionList";


const Community = () => {
	return (
		<div className="py-[124px] px-[20px]">
			<>
				<img className="mx-auto mt-[-70px] xl:mt-0" src={community} alt="" />
			</>
			<div className="flex justify-center items-center xl:px-[100px] xl:h-[400px] gap-[100px] flex-col xl:flex-row">
				<div>
					<h3 className="leading-[56px] text-[36px] hidden xl:flex grow">
						We connect our customers <br /> with the best, and help them <br />{" "}
						keep up-and stay open.
					</h3>
					<h3 className="text-[26px] leading-[46px] mt-[20px] xl:hidden">
					We connect our customers with the best, and help them
						keep up-and stay open.
					</h3>
				</div>
				
                <div  className="xl:w-1/3" >
                <AccordionList />
                </div>
			</div>
		</div>
	);
};

export default Community;
