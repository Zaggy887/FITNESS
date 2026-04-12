import { Handshake, Star, Briefcase } from 'lucide-react';

const StatsBanner = () => {
  return (
    <section className="bg-[#0a0a0a] py-16 px-6 border-b border-white/10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-white font-black text-4xl md:text-6xl lg:text-7xl uppercase leading-none mb-12 tracking-tight">
          THERE'S{' '}
          <span className="relative inline-block">
            NO REASON
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#7A725E]" />
          </span>{' '}
          YOU{' '}
          <span className="relative inline-block">
            CAN'T
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#7A725E]" />
          </span>{' '}
          DO IT
        </h2>

        <div className="flex flex-row md:flex-row justify-center gap-6 md:gap-24">
          <div className="flex flex-col items-center text-center flex-1 md:flex-none">
            <Handshake className="w-6 h-6 md:w-9 md:h-9 text-[#7A725E] mb-2 md:mb-4" strokeWidth={1.5} />
            <span className="text-white font-bold text-xl md:text-3xl">200+</span>
            <span className="text-white/60 text-[10px] md:text-sm font-semibold uppercase tracking-widest mt-1 leading-tight">
              CLIENTS<br />COACHED
            </span>
          </div>

          <div className="flex flex-col items-center text-center flex-1 md:flex-none">
            <Star className="w-6 h-6 md:w-9 md:h-9 text-[#7A725E] mb-2 md:mb-4" strokeWidth={1.5} />
            <span className="text-white font-bold text-xl md:text-3xl">5★</span>
            <span className="text-white/60 text-[10px] md:text-sm font-semibold uppercase tracking-widest mt-1 leading-tight">
              AVERAGE<br />RATING
            </span>
          </div>

          <div className="flex flex-col items-center text-center flex-1 md:flex-none">
            <Briefcase className="w-6 h-6 md:w-9 md:h-9 text-[#7A725E] mb-2 md:mb-4" strokeWidth={1.5} />
            <span className="text-white font-bold text-xl md:text-3xl">15+</span>
            <span className="text-white/60 text-[10px] md:text-sm font-semibold uppercase tracking-widest mt-1 leading-tight">
              COUNTRIES<br />SERVED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
