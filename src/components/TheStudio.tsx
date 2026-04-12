import { Globe, TrendingUp, Clock, Target, Leaf, BookOpen, Star } from "lucide-react";

const offerings = [
  {
    icon: Globe,
    title: "100% Online & Flexible",
    text: "Personalised training built around your goals, experience, and lifestyle, with the flexibility to adapt to travel, changing routines, or uncertainty",
  },
  {
    icon: TrendingUp,
    title: "Coaching & Accountability",
    text: "Ongoing coaching through weekly check-ins, progress tracking, and structured goal setting to keep you moving forward",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    text: "Fast responses plus flexible consultations that work around your schedule and can change week to week",
  },
  {
    icon: Target,
    title: "Technique & Guidance",
    text: "Detailed technique feedback and exercise guidance to maximise results while reducing risk of injury",
  },
  {
    icon: Leaf,
    title: "Nutrition Support",
    text: "Practical nutrition support focused on sustainable habits, not restrictive dieting",
  },
  {
    icon: BookOpen,
    title: "Education Driven",
    text: "An education driven approach so you understand what you are doing and build long term confidence in your fitness",
  },
];

const bonusOfferings = [
  "Personalised habit and routine planning to create consistency outside of training",
  "Access to a private client hub with workouts, guides, and resources",
];

const TheStudio = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-black mb-4 tracking-tight">
          <span className="text-white">OUR </span>
          <span className="text-[#7A725E]">OFFER</span>
        </h2>
      </div>

      <div className="w-full overflow-hidden mb-10">
        <img
          src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Our Offer"
          className="w-full object-cover object-center h-[140px] sm:h-[260px]"
          loading="lazy"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {offerings.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group flex gap-4 bg-white/5 border border-white/10 rounded-lg p-5 hover:border-[#7A725E]/60 hover:bg-white/8 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-md bg-[#7A725E]/20 flex items-center justify-center group-hover:bg-[#7A725E]/35 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#7A725E]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                    <p className="text-white/60 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border border-[#7A725E]/40 rounded-lg p-6 mb-8 bg-[#7A725E]/5">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-4 h-4 text-[#7A725E] fill-[#7A725E]" />
              <p className="text-[#7A725E] font-bold tracking-widest text-xs uppercase">Bonus</p>
            </div>
            <ul className="space-y-3">
              {bonusOfferings.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#7A725E] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <a
              href="#contact"
              className="inline-block px-10 py-3 bg-[#2e3d30] text-white font-bold tracking-widest text-sm uppercase hover:opacity-90 transition-opacity"
            >
              BOOK FREE CONSULTATION
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheStudio;
