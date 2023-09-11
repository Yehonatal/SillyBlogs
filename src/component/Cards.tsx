import Card from "./Card";
import { PiArrowRightBold } from "react-icons/pi";
import { PiArrowLeftBold } from "react-icons/pi";

import cardImg from "../assets/img1.jpg";
import cardTableImg from "../assets/img2.jpg";

const Cards = () => {
    return (
        <div className="grid mt-[25rem] lg:grid-cols-3 md:grid-cols-2 gap-10 border border-[#0000] mb-25  relative sm:mx-2">
            <Card cardImgUsed={cardImg} />
            <Card cardImgUsed={cardTableImg} />
            <Card cardImgUsed={cardImg} />
            <Card cardImgUsed={cardImg} />
            <Card cardImgUsed={cardImg} />
            <Card cardImgUsed={cardTableImg} />

            <div className="absolute bottom-[-2em] flex justify-between w-full">
                <button className="flex gap-2 items-center font-bold text-[#121245] mr-2 transition-transform duration-300 transform hover:-translate-x-5">
                    <PiArrowLeftBold className="flex gap-2 items-center font-bold text-[#121245]" />
                    <span className="hidden md:block">Previous</span>
                </button>
                <div>
                    <p className="font-bold text-[#121245]">Page 1 of 4</p>
                </div>
                <button className="flex gap-2 items-center font-bold text-[#121245] ml-2 transition-transform duration-300 transform hover:translate-x-5">
                    <span className="hidden md:block">Next</span>
                    <PiArrowRightBold className="flex gap-2 items-center font-bold text-[#121245] " />
                </button>
            </div>
        </div>
    );
};

export default Cards;
