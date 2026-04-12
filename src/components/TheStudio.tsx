const offerings = [
  "100% online personalised training built around your goals, experience, and lifestyle, with the flexibility to adapt to travel, changing routines, or uncertainty",
  "Ongoing coaching and accountability through weekly check-ins, progress tracking, and structured goal setting to keep you moving forward",
  "24/7 support with fast responses, plus flexible consultations that work around your schedule and can change week to week",
  "Detailed technique feedback and exercise guidance to maximise results while reducing risk of injury",
  "Practical nutrition support focused on sustainable habits, not restrictive dieting",
  "An education driven approach so you understand what you are doing and build long term confidence in your fitness",
];

const bonusOfferings = [
  "Personalised habit and routine planning to create consistency outside of training",
  "Access to a private client hub with workouts, guides, and resources",
];

const TheStudio = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-black mb-4 tracking-tight">
          <span className="text-white">OUR </span>
          <span className="text-[#7A725E]">OFFER</span>
        </h2>
      </div>

      <div className="w-full overflow-hidden mb-6">
        <img
          src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Our Offer"
          className="w-full object-cover object-center h-[140px] sm:h-[260px]"
          loading="lazy"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <ul className="mb-6 space-y-3">
            {offerings.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#7A725E] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <p className="text-[#7A725E] font-bold tracking-widest text-xs uppercase mb-3">Bonus</p>
          <ul className="mb-8 space-y-3">
            {bonusOfferings.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#7A725E] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

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
