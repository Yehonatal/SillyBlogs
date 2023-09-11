const Footer = () => {
    return (
        <footer className="mt-[10rem] bg-[#121245] text-[#fff] py-5 mx-0 px-4 relative ">
            <div className="font-extrabold text-lg lg:w-full  text-[#fff]">
                Untitled Blogs
                <span className="mx-2 border-2 text-[#fff] border-[#ff] rounded-[20px] italic px-2 py-1 font-semibold text-sm font-serif">
                    Silly Journal
                </span>
            </div>

            <div>
                <p className="text-gray-50 opacity-[0.5] text-center mt-7 md:text-[12.5px] text-[10px]">
                    © 2023 Yonatan Afewerk Teshome. All Rights Reserved.
                </p>
            </div>

            <div className="border-1 border-slate-400 absolute w-full overflow-hidden h-[200px] left-0 right-0 top-[-100px] z-[-5] grid grid-cols-4 grid-rows-4 gap-4">
                {Array.from({ length: 450 / 3 }, (_, index) => (
                    <div
                        key={index}
                        className="border-slate-300 border-[1px] w-full"
                        style={{
                            gridColumn: `span 450 / 3`,
                            gridRow: `span 1`,
                            borderBottomWidth: "3px",
                        }}
                    ></div>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
