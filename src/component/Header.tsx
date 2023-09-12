import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
    const [visible, setVisible] = useState(false);
    return (
        <header className="py-2 px-4 min-lg:my-10 flex items-center justify-between  min-w-full max-w-screen-xl relative">
            <div className="font-extrabold text-lg lg:w-full  text-[#121245]">
                Untitled Blogs
                <span className="mx-2 border-2 text-[#121245] border-[#121245] rounded-[20px] italic px-2 py-1 font-semibold text-sm font-serif">
                    Silly Journal
                </span>
            </div>
            <div className="flex items-center p-2 gap-5 ">
                <nav className="max-lg:block max-md:hidden max-sm:hidden select-none">
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
                                        <a
                                            href="https://github.com/Yehonatal/SillyBlogs"
                                            target="_blank"
                                        >
                                            Github
                                        </a>
                                    </li>
                                    <li className="hover:underline p-1 rounded-sm">
                                        <a
                                            href="https://react.dev/"
                                            target="_blank"
                                        >
                                            React
                                        </a>
                                    </li>
                                    <li className="hover:underline p-1 rounded-sm">
                                        <a
                                            href="https://tailwindcss.com/"
                                            target="_blank"
                                        >
                                            Tailwind
                                        </a>
                                    </li>
                                    <li className="hover:underline p-1 rounded-sm">
                                        <a
                                            href="https://www.typescriptlang.org/"
                                            target="_blank"
                                        >
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
                {visible && (
                    <div className="absolute select-none left-0 right-0 bg-slate-50 top-0 h-[100vh] z-30 grid place-content-center">
                        <div
                            className="text-4xl font-normal absolute top-4 right-10 cursor-pointer"
                            onClick={() => {
                                setVisible(false);
                            }}
                        >
                            <IoMdClose />
                        </div>
                        <div className="font-extrabold text-lg lg:w-full p-4 text-[#121245]">
                            Untitled Blogs
                            <span className="mx-2 border-2 text-[#121245] border-[#121245] bg-[white] rounded-[20px] italic px-2 py-1 font-semibold text-sm font-serif">
                                Silly Journal
                            </span>
                        </div>
                        <ul className="flex flex-col justify-center p-2 z-40 border-1 w-full text-xl text-left gap-5 font-bold cursor-pointer text-[#121245]">
                            <Link
                                to={"/"}
                                className="p-2 rounded-lg hover:underline flex-1 font-bold"
                            >
                                Home
                            </Link>
                            <Link
                                to={"/pricing"}
                                className="p-2 flex-1 hover:underline  font-bold"
                            >
                                Pricing
                            </Link>
                            <li className="flex flex-col relative p-2 gap-2 rounded-lg flex-1 font-bold  group ">
                                Resources{" "}
                                <div className=" bg-slate-50 p-4 absolute top-10 rounded-md hidden  group-hover:block transition-all ">
                                    <ul className="select-none">
                                        <li className="hover:underline p-1 rounded-sm">
                                            <a
                                                href="https://github.com/Yehonatal/SillyBlogs"
                                                target="_blank"
                                            >
                                                Github
                                            </a>
                                        </li>
                                        <li className="hover:underline p-1 rounded-sm">
                                            <a
                                                href="https://react.dev/"
                                                target="_blank"
                                            >
                                                React
                                            </a>
                                        </li>
                                        <li className="hover:underline p-1 rounded-sm">
                                            <a
                                                href="https://tailwindcss.com/"
                                                target="_blank"
                                            >
                                                Tailwind
                                            </a>
                                        </li>
                                        <li className="hover:underline p-1 rounded-sm">
                                            <a
                                                href="https://www.typescriptlang.org/"
                                                target="_blank"
                                            >
                                                Typescript
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
                <div
                    className="p-2 gap-0  rounded-lg hover:bg-gray-200 cursor-pointer md:hidden lg:hidden flex"
                    onClick={() => setVisible(true)}
                >
                    <HiMenuAlt4 />
                    <HiMenuAlt4 className="mx-[-6px]" />
                    <HiMenuAlt4 />
                </div>
            </div>
        </header>
    );
};

export default Header;
