import { FaArrowDown } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";

const Header = () => {
    return (
        <header className="py-2 min-lg:my-10 flex items-center justify-between  min-w-full max-w-screen-xl">
            <div className="font-extrabold text-lg lg:w-full sm:w-[100px] text-[#121245]">
                Untitled Blogs
                <span className="mx-2 border-2 text-[#121245] border-[#121245] rounded-[20px] italic px-2 py-1 font-semibold text-sm font-serif">
                    Silly Journal
                </span>
            </div>
            <div className="flex items-center p-2 gap-5 ">
                <nav className="max-lg:block max-md:block max-sm:hidden ">
                    <ul className="flex items-center p-2 gap-5 font-bold cursor-pointer text-[#121245]">
                        <li className="p-2 rounded-lg hover:underline flex-1 font-bold">
                            Home
                        </li>
                        <li className="flex font-bold items-center  hover:underline  p-2 gap-2  rounded-lg  flex-1 ">
                            Products{" "}
                            <span>
                                <FaArrowDown className="text-sm" />
                            </span>
                        </li>
                        <li className="flex items-center hover:underline  p-2 gap-2 rounded-lg flex-1 font-bold">
                            Resources{" "}
                            <span>
                                <FaArrowDown className="text-sm" />
                            </span>
                        </li>
                        <li className="p-2 flex-1 hover:underline  font-bold">
                            Pricing
                        </li>
                    </ul>
                </nav>
                <div className="p-2 flex gap-0  rounded-lg hover:bg-gray-200 cursor-pointer">
                    <HiMenuAlt4 />
                    <HiMenuAlt4 className="mx-[-6px]" />
                    <HiMenuAlt4 />
                </div>
            </div>
        </header>
    );
};

export default Header;
