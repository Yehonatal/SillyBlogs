const Footer = () => {
    return (
        <footer className="mt-[10rem] bg-[#121245] text-[#fff] py-5 mx-0 px-4 relative ">
            <div className="text-center text-[#fff] flex flex-col justify-center items-center mt-4">
                <h1 className="text-extrabold text-xl lg:text-2xl font-extrabold font-system text-[#fff] my-2 ">
                    The Untitled Blogs Journal
                </h1>
                <p className="text-sm max-md:text-sm max-sm:w-full lg:w-[750px] text-[#fff]  font-medium">
                    Explore a world of creativity, inspiration, and untold
                    narratives.
                </p>
                <button className="hover:shadow-md bg-transparent hover:bg-[#fff] font-bold hover:text-[#121245] border-2 border-[#fff] mt-5 rounded-[10px] px-4 py-1">
                    Start your Journey free trial
                </button>
            </div>

            <div className="flex row justify-between mt-20 flex-wrap gap-4">
                <div className="font-extrabold text-lg lg:w-full  text-[#fff]">
                    Untitled Blogs
                    <span className="mx-2 border-2 text-[#fff] border-[#ff] rounded-[20px] italic px-2 py-1 font-semibold text-sm font-serif">
                        Silly Journal
                    </span>
                </div>

                <div>
                    <p className="text-left text-gray-50 opacity-[0.5]  md:text-[12.5px] text-[10px]">
                        © 2023 Yonatan Afewerk Teshome. All Rights Reserved.
                    </p>
                </div>
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
