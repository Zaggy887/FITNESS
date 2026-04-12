import { Handshake, Star, Briefcase } from 'lucide-react';

const StatsBanner = () => {
  return (
    <section className="bg-[#0a0a0a] py-16 px-6 border-b border-white/10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-white font-black text-4xl md:text-6xl lg:text-7xl uppercase leading-none mb-12 tracking-tight">
          WE'VE TRANSFORMED{' '}
          <span className="relative inline-block">
            HUNDREDS
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#7A725E]" />
          </span>{' '}
          OF CLIENTS
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24">
          <div className="flex flex-col items-center text-center">
            <Handshake className="w-9 h-9 text-[#7A725E] mb-4" strokeWidth={1.5} />
            <span className="text-white font-bold text-3xl">200+</span>
            <span className="text-white/60 text-sm font-semibold uppercase tracking-widest mt-1 leading-tight">
              CLIENTS<br />COACHED
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <Star className="w-9 h-9 text-[#7A725E] mb-4" strokeWidth={1.5} />
            <span className="text-white font-bold text-3xl">5★</span>
            <span className="text-white/60 text-sm font-semibold uppercase tracking-widest mt-1 leading-tight">
              AVERAGE<br />RATING
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <Briefcase className="w-9 h-9 text-[#7A725E] mb-4" strokeWidth={1.5} />
            <span className="text-white font-bold text-3xl">15+</span>
            <span className="text-white/60 text-sm font-semibold uppercase tracking-widest mt-1 leading-tight">
              COUNTRIES<br />SERVED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
