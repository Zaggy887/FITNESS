import { Building2, Smartphone, Users } from 'lucide-react';

const StatsBanner = () => {
  return (
    <section className="bg-[#0a0a0a] py-10 sm:py-16 px-4 sm:px-6 border-b border-white/10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-white font-black text-2xl sm:text-4xl md:text-6xl lg:text-7xl uppercase leading-none mb-8 sm:mb-12 tracking-tight">
          A PLATFORM YOUR{' '}
          <span className="relative inline-block">
            PEOPLE
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#A3E635]" />
          </span>{' '}
          WILL{' '}
          <span className="relative inline-block">
            ACTUALLY USE
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#A3E635]" />
          </span>
        </h2>

        <div className="flex flex-row justify-center gap-4 sm:gap-6 md:gap-24">
          <div className="flex flex-col items-center text-center flex-1 md:flex-none">
            <Building2 className="w-6 h-6 md:w-9 md:h-9 text-[#A3E635] mb-2 md:mb-4" strokeWidth={1.5} />
            <span className="text-white/60 text-[10px] md:text-sm font-semibold uppercase tracking-widest mt-1 leading-tight">
              UNIVERSITY &amp;<br />CORPORATE READY
            </span>
          </div>

          <div className="flex flex-col items-center text-center flex-1 md:flex-none">
            <Smartphone className="w-6 h-6 md:w-9 md:h-9 text-[#A3E635] mb-2 md:mb-4" strokeWidth={1.5} />
            <span className="text-white/60 text-[10px] md:text-sm font-semibold uppercase tracking-widest mt-1 leading-tight">
              COMPLETE APP<br />PLATFORM
            </span>
          </div>

          <div className="flex flex-col items-center text-center flex-1 md:flex-none">
            <Users className="w-6 h-6 md:w-9 md:h-9 text-[#A3E635] mb-2 md:mb-4" strokeWidth={1.5} />
            <span className="text-white/60 text-[10px] md:text-sm font-semibold uppercase tracking-widest mt-1 leading-tight">
              STUDENT &amp; STAFF<br />WELLBEING
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
