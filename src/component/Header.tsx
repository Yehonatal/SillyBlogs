import { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

// Define color constants
const PRIMARY_COLOR = "#121245";
const SLATE_BG_COLOR = "bg-slate-50";
const WHITE_COLOR = "white";

const Header = () => {
    const [visible, setVisible] = useState(false);
    const [isOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflowY = isOpen ? "hidden" : "scroll";
    }, [isOpen]);

    return (
        <header className="py-2 px-4 min-lg:my-10 flex items-center justify-between  min-w-full max-w-screen-xl relative">
            <div className="font-extrabold text-lg lg:w-full  text-[#121245]">
                Untitled Blogs
                <span
                    className={`mx-2 border-2 text-[${PRIMARY_COLOR}] border-[${PRIMARY_COLOR}] rounded-[20px] italic px-2 py-1 font-semibold text-sm font-serif`}
                >
                    Silly Journal
                </span>
            </div>
            <div className="flex items-center p-2 gap-5 ">
                {/* Navigation */}
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
                            <div
                                className={`absolute top-10 ${SLATE_BG_COLOR} p-4 rounded-md hidden  group-hover:block transition-all `}
                            >
                                <ul>
                                    <li className="hover:underline p-1 rounded-sm">
                                        <a
                                            href="https://github.com/Yehonatal/SillyBlogs"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Github
                                        </a>
                                    </li>
                                    <li className="hover:underline p-1 rounded-sm">
                                        <a
                                            href="YOUR_REACT_LINK"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            React
                                        </a>
                                    </li>
                                    <li className="hover:underline p-1 rounded-sm">
                                        <a
                                            href="YOUR_TAILWIND_LINK"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Tailwind
                                        </a>
                                    </li>
                                    <li className="hover:underline p-1 rounded-sm">
                                        <a
                                            href="YOUR_TYPESCRIPT_LINK"
                                            target="_blank"
                                            rel="noopener noreferrer"
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
                {/* Mobile Menu */}
                {visible && (
                    <div
                        className={`absolute select-none left-0 right-0 ${SLATE_BG_COLOR} top-0 h-[100vh] z-30 grid place-content-center`}
                    >
                        {/* Close button */}
                        <div
                            className="text-4xl font-normal absolute top-4 right-10 cursor-pointer"
                            onClick={() => {
                                setVisible(!visible);
                                setIsMenuOpen(false);
                            }}
                        >
                            <IoMdClose />
                        </div>
                        {/* Mobile menu content */}
                        <div className="font-extrabold text-lg lg:w-full p-4 text-[#121245]">
                            Untitled Blogs
                            <span
                                className={`mx-2 border-2 text-[${PRIMARY_COLOR}] border-[${PRIMARY_COLOR}] bg-[${WHITE_COLOR}] rounded-[20px] italic px-2 py-1 font-semibold text-sm font-serif`}
                            >
                                Silly Journal
                            </span>
                        </div>
                        <ul className="flex select-none flex-col justify-center p-2 z-40 border-1 w-full text-xl text-left gap-5 font-bold cursor-pointer text-[#121245]">
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
                            <li className="flex flex-col relative p-2 gap-2 rounded-lg flex-1 font-bold  group  select-none">
                                Resources{" "}
                                <div
                                    className={` ${SLATE_BG_COLOR} p-4 absolute top-10 rounded-md hidden  group-hover:block transition-all `}
                                >
                                    <ul className="select-none">
                                        <li className="hover:underline p-1 rounded-sm">
                                            <a
                                                href="YOUR_GITHUB_LINK"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Github
                                            </a>
                                        </li>
                                        <li className="hover:underline p-1 rounded-sm">
                                            <a
                                                href="YOUR_REACT_LINK"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                React
                                            </a>
                                        </li>
                                        <li className="hover:underline p-1 rounded-sm">
                                            <a
                                                href="YOUR_TAILWIND_LINK"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Tailwind
                                            </a>
                                        </li>
                                        <li className="hover:underline p-1 rounded-sm">
                                            <a
                                                href="YOUR_TYPESCRIPT_LINK"
                                                target="_blank"
                                                rel="noopener noreferrer"
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
                {/* Mobile menu toggle */}
                <div
                    className="p-2 gap-0  rounded-lg hover:bg-gray-200 cursor-pointer md:hidden lg:hidden flex"
                    onClick={() => {
                        setVisible(!visible);
                        setIsMenuOpen(true);
                    }}
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
