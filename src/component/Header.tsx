import { FaArrowDown } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="py-2 px-4 min-lg:my-10 flex items-center justify-between  min-w-full max-w-screen-xl">
            <div className="font-extrabold text-lg lg:w-full  text-[#121245]">
                Untitled Blogs
                <span className="mx-2 border-2 text-[#121245] border-[#121245] rounded-[20px] italic px-2 py-1 font-semibold text-sm font-serif">
                    Silly Journal
                </span>
            </div>
            <div className="flex items-center p-2 gap-5 ">
                <nav className="max-lg:block max-md:block max-sm:hidden select-none">
                    <ul className="flex items-center p-2 gap-5 font-bold cursor-pointer text-[#121245]">
                        <Link
                            to={"/"}
                            className="p-2 rounded-lg hover:underline flex-1 font-bold"
                        >
                            Home
                        </Link>

                        <li className="flex items-center hover:underline  p-2 gap-2 rounded-lg flex-1 font-bold relative group ">
                            Resources{" "}
                            <span>
                                <FaArrowDown className="text-sm group-hover:rotate-180  transition-all " />
                            </span>
                            <div className="absolute top-10 bg-slate-50 p-4 rounded-md hidden  group-hover:block transition-all ">
                                <ul>
                                    <li className="hover:underline p-1 rounded-sm">
                                        <a href="#" target="_blank">
                                            Github
                                        </a>
                                    </li>
                                    <li className="hover:underline p-1 rounded-sm">
                                        <a href="#" target="_blank">
                                            React
                                        </a>
                                    </li>
                                    <li className="hover:underline p-1 rounded-sm">
                                        <a href="#" target="_blank">
                                            Tailwind
                                        </a>
                                    </li>
                                    <li className="hover:underline p-1 rounded-sm">
                                        <a href="#" target="_blank">
                                            Typescript
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <Link
                            to={"/pricing"}
                            className="p-2 flex-1 hover:underline  font-bold"
                        >
                            Pricing
                        </Link>
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
