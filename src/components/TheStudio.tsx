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
    <section className="bg-[#0a0a0a] text-white py-10 sm:py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-black mb-5 tracking-tight">
          <span className="text-white">OUR OFFER TO </span>
          <span className="text-[#7A725E]">YOU</span>
        </h2>
      </div>

      <div className="w-full overflow-hidden mb-8">
        <img
          src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Our Offer"
          className="w-full object-cover object-center h-[150px] sm:h-[260px] md:h-[320px]"
          loading="lazy"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4 sm:grid-cols-2 mb-8">
            {offerings.map((item, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 transition-all duration-300 hover:border-[#7A725E]/50 hover:bg-white/[0.05]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full border border-[#7A725E]/40 bg-[#7A725E]/10 text-[#C2B59B] flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-white/85 text-sm sm:text-[15px] leading-relaxed">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-[#7A725E]/20 bg-[#111111] p-5 sm:p-6 mb-8">
            <p className="text-[#7A725E] font-bold tracking-[0.25em] text-xs uppercase mb-4">
              Bonus
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {bonusOfferings.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-[#7A725E] flex-shrink-0" />
                    <p className="text-white/80 text-sm sm:text-[15px] leading-relaxed">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a
              href="#contact"
              className="inline-block rounded-full px-8 sm:px-10 py-3.5 bg-[#2e3d30] text-white font-bold tracking-[0.18em] text-xs sm:text-sm uppercase hover:opacity-90 transition-opacity"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheStudio;