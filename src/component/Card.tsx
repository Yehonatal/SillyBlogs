import { RiArrowLeftUpLine } from "react-icons/ri";

type CardProps = {
    cardImgUsed: string;
};
const Card = ({ cardImgUsed }: CardProps) => {
    return (
        <div className="max-w-[450px]  mb-10">
            <div className="max-w-full">
                <img src={cardImgUsed} alt="Improve your UI illustration" />
            </div>
            <div className="flex place-items-start mt-7">
                <h1 className="text-xl font-extrabold  text-[#121245]">
                    Improve Your UI Design Skills and Develop an "Eye" for
                    Design
                </h1>
                <div className=" rotate-90 cursor-pointer">
                    <RiArrowLeftUpLine className="scale-[1.5] border-[#121245] fill-[#535381] transition-transform duration-300 transform hover:translate-x-5 cursor-pointer" />
                </div>
            </div>
            <p className="mt-2 font-bold text-md text-[#121245] hyphens-auto">
                The design industry is constantly evolving, but good design is
                timeless. Learn how to quickly develop an "eye" for UI ...{" "}
            </p>
            <ul className="flex gap-2 mt-3 font-bold cursor-pointer">
                <li className="border-2 border-[#121245] rounded-full w-fit px-2 text-[#121245] hover:bg-slate-400">
                    Design
                </li>
                <li className="border-2 border-[#121245] rounded-full w-fit px-2 text-[#121245] hover:bg-slate-400">
                    Tools
                </li>
                <li className="border-2 border-[#121245] rounded-full w-fit px-2 text-[#121245] hover:bg-slate-400">
                    Research
                </li>
            </ul>
        </div>
    );
};

export default Card;
