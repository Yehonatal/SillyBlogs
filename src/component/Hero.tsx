const Hero = () => {
    return (
        <div className="my-[7.5rem] relative">
            <span className="border-2 border-[#121245] text-[#121245] rounded-[20px] italic px-2 py-1 font-semibold text-sm font-serif">
                Silly Journal
            </span>
            <h1 className="text-extrabold text-6xl font-extrabold font-system text-[#121245] my-2 max-md:text-4xl">
                The Untitled Blogs Journal
            </h1>
            <p className="text-2xl max-sm:w-full lg:w-[750px] text-[#121245] max-md:text-xl">
                where words come to life, and stories are waiting to be told.
                Explore a world of creativity, inspiration, and untold
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
            <div className="border-1 border-slate-400 absolute w-full overflow-hidden h-[308px] top-[-50px] z-[-5] grid grid-cols-4 grid-rows-4 gap-4">
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
            </div>
        </div>
    );
};

export default Hero;
