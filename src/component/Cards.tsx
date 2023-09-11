import Card from "./Card";
import { PiArrowRightBold } from "react-icons/pi";
import { PiArrowLeftBold } from "react-icons/pi";

import card1Img from "../assets/img1.jpg";
import card2Img from "../assets/img2.jpg";
import card3Img from "../assets/img3.jpg";

const Cards = () => {
    return (
        <div className="grid mt-[25rem] lg:grid-cols-3 md:grid-cols-2 gap-10 border border-[#0000] mb-20  relative sm:mx-2 px-4">
            <Card cardImgUsed={card1Img} />
            <Card cardImgUsed={card2Img} />
            <Card cardImgUsed={card3Img} />
            <Card cardImgUsed={card2Img} />
            <Card cardImgUsed={card3Img} />
            <Card cardImgUsed={card1Img} />

            <div className="absolute bottom-[-3em] flex justify-between w-full">
                <button className="flex gap-2 group items-center font-bold text-[#121245] mr-2 ">
                    <PiArrowLeftBold className="flex gap-2 items-center font-bold text-[#78788f] transition-transform duration-300 transform group-hover:-translate-x-5" />
                    <span className="hidden md:block transition-all group-hover:scale-[1.05]">
                        Previous
                    </span>
                </button>
                <div>
                    <p className="font-bold text-[#121245]">Page 1 of 4</p>
                </div>
                <button className="flex group gap-2 items-center font-bold text-[#121245] ml-2 ">
                    <span className="hidden md:block group-hover:scale-[1.05] transition-all">
                        Next
                    </span>
                    <PiArrowRightBold className="flex gap-2 items-center font-bold text-[#121245]  transition-transform duration-300 transform group-hover:translate-x-5" />
                </button>
            </div>
        </div>
    );
};

export default Cards;
