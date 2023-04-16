import React from "react";
import community from "../assets/community.png";

import AccordionList from "./AccordionList";


const Community = () => {
	return (
		<div className="py-[124px]">
			<>
				<img className="mx-auto" src={community} alt="" />
			</>
			<div className="flex justify-center items-center px-[100px] h-[400px] gap-[100px]">
				<div>
					<h3 className="leading-[56px] text-[36px]">
						We connect our customers <br /> with the best, and help them <br />{" "}
						keep up-and stay open.
					</h3>
				</div>
                <div  className="w-1/3" >
                <AccordionList />
                </div>
			</div>
		</div>
	);
};

export default Community;
