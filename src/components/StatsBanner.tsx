const StatsBanner = () => {
  return (
    <section className="bg-[#0a0a0a] py-10 sm:py-16 px-4 sm:px-6 border-b border-white/10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-white font-black text-3xl sm:text-4xl md:text-5xl lg:text-7xl uppercase leading-none tracking-tight">
          A PLATFORM YOUR{' '}
          <span className="relative inline-block">
            PEOPLE
            <span className="absolute bottom-0 left-0 w-full h-[2px] sm:h-[3px] bg-[#A3E635]" />
          </span>{' '}
          WILL{' '}
          <span className="relative inline-block">
            ACTUALLY USE
            <span className="absolute bottom-0 left-0 w-full h-[2px] sm:h-[3px] bg-[#A3E635]" />
          </span>
        </h2>
      </div>
    </section>
  );
};

export default StatsBanner;
