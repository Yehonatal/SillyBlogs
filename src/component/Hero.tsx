import TableIllustration from "../assets/table.jpg";

const Hero = () => {
    return (
        <>
            <div className="my-[7.5rem] relative">
                <span className="border-2 border-[#121245] text-[#121245] rounded-[20px] italic px-2 py-1 font-semibold text-sm font-serif">
                    Silly Journal
                </span>
                <h1 className="text-extrabold text-6xl font-extrabold font-system text-[#121245] my-2 max-md:text-4xl">
                    The Untitled Blogs Journal
                </h1>
                <p className="text-2xl max-sm:w-full lg:w-[750px] text-[#121245] max-md:text-xl font-bold">
                    where words come to life, and stories are waiting to be
                    told. Explore a world of creativity, inspiration, and untold
                    narratives.
                </p>

                <div className="border-1 border-slate-400 absolute w-full overflow-hidden h-[306px] top-[-50px] z-[-5] grid grid-cols-4 grid-rows-4 gap-4">
                    {Array.from({ length: 450 / 3 }, (_, index) => (
                        <div
                            key={index}
                            className="border-slate-200 border-1 h-[450px]"
                            style={{
                                gridColumn: `span 1`,
                                gridRow: `span 450 / 3`,
                                borderRightWidth: "3px",
                            }}
                        ></div>
                    ))}
                </div>
                {/* <div className="border-1 border-slate-400 absolute w-full overflow-hidden h-[308px] top-[-50px] z-[-5] grid grid-cols-4 grid-rows-4 gap-4">
                    {Array.from({ length: 450 / 3 }, (_, index) => (
                        <div
                            key={index}
                            className="border-slate-200 border-[1px] w-full"
                            style={{
                                gridColumn: `span 450 / 3`,
                                gridRow: `span 1`,
                                borderBottomWidth: "3px",
                            }}
                        ></div>
                    ))}
                </div> */}
            </div>
            <div className="lg:h-[775px] min-md:h-[120px] max-sm:h-[350px] sm:h[200px] w-full bg-cover">
                <img
                    className="max-sm:h-2/4 lg:h-3/4 w-full object-cover object-bottom z-[-1]"
                    src={TableIllustration}
                    alt="table illustration"
                />
            </div>
            <div className="relative">
                <span className="border-2 border-[#121245] text-[#121245] rounded-[20px] italic px-2 py-1 font-semibold text-sm font-serif ">
                    The best of our platform
                </span>
                <h1 className="text-extrabold text-5xl font-extrabold font-system text-[#121245] my-5 max-md:text-3xl ">
                    Unleashing the Potential of Artificial Intelligence: How
                    Tech and AI Innovations Are Set to Transform the World for
                    Good
                </h1>
                <p className="text-3xl  text-[#121245] max-md:text-xl hyphens-auto">
                    we embark on a captivating journey into the realm of
                    cutting-edge technology and its remarkable impact on
                    society. Explore how artificial intelligence (AI) is
                    reshaping industries, revolutionizing healthcare, enhancing
                    education, and addressing global challenges.
                </p>
                <div className="border-l-4 border-[#121245] px-5 absolute bottom-[-175px] lg:right-[250px]">
                    <h3 className="font-bold text-[#121245] text-xl">
                        Written By
                    </h3>
                    <h1 className="font-extrabold text-3xl  text-[#121245] max-md:text-xl">
                        Unknown Writer
                    </h1>
                </div>
                <div className="border-l-4 border-[#121245] px-5 absolute lg:bottom-[-250px]  min-md:bottom-[-350px] min-md:bottom-[250px] sm:bottom-[-115px] right-1">
                    <h3 className="font-bold text-[#121245] text-xl">
                        Published on
                    </h3>
                    <h1 className="font-extrabold text-3xl  text-[#121245] max-md:text-xl">
                        12 April 2027
                    </h1>
                </div>

                <div className="border-1 border-slate-400 absolute w-full overflow-hidden h-[900px] top-[-50px] z-[-5] grid grid-cols-4 grid-rows-4 gap-4">
                    {Array.from({ length: 450 / 3 }, (_, index) => (
                        <div
                            key={index}
                            className="border-slate-200 border-1 h-[650px]"
                            style={{
                                gridColumn: `span 1`,
                                gridRow: `span 450 / 3`,
                                borderRightWidth: "3px",
                            }}
                        ></div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Hero;
