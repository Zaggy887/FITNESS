const offerings = [
  "Access to the StrengthHub Online platform, ready to deploy to your members immediately.",
  "Structured programs across strength, conditioning and mobility built and overseen by a qualified coach.",
  "Nutrition tracking and education built into the app. Real understanding over restrictive rules.",
  "Progress tracking across workouts, weight, habits and consistency so members understand what is driving their results.",
  "A community feature that keeps your cohort connected, motivated and accountable to each other.",
  "Ongoing expert coach support available to members through the platform with fast response times.",
];

const bonusOfferings = [
  "Assistance evaluating lifestyle habits across sleep, nutrition, movement and recovery",
  "Health literacy resources that build lasting knowledge, not just short term results",
  "Personalised pathways, habit tracking, challenges and leaderboards",
  "Full onboarding support and setup assistance at no additional cost",
];

const TheStudio = () => {
  return (
    <section className="bg-[#0a0a0a] text-white pb-8 sm:pb-14 border-t border-white/10">
      <div className="w-full overflow-hidden mb-8">
        <img
          src="/image copy copy copy.png"
          alt="StrengthHub Platform"
          className="w-full object-cover h-[150px] sm:h-[260px] md:h-[320px] object-[50%_20%] md:object-[50%_60%]"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl sm:text-3xl md:text-5xl font-black mb-2 tracking-tight">
          <span className="text-white">AN EXAMPLE OF WHAT YOUR ORGANISATION COULD </span>
          <span className="text-[#A3E635]">GET</span>
        </h2>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          <ul className="mb-10 space-y-6 md:flex md:flex-col md:items-center">
            {offerings.map((item, i) => (
              <li key={i} className="flex items-start gap-4 group w-full max-w-xl">
                <div className="flex-shrink-0 w-8">
                  <span className="text-[#A3E635] text-sm font-semibold tabular-nums tracking-widest">
                    {`0${i + 1}`}
                  </span>
                </div>
                <div className="w-[1px] self-stretch bg-white/10 group-hover:bg-[#A3E635]/40 transition-colors" />
                <p className="text-white/75 text-sm sm:text-[15px] leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ul>

          <p className="text-[#A3E635] font-bold tracking-[0.25em] text-xs uppercase mb-4 md:text-center">
            Also Included
          </p>

          <ul className="mb-10 space-y-4 max-w-xl md:mx-auto">
            {bonusOfferings.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-[7px] w-2 h-2 rounded-full bg-[#A3E635] flex-shrink-0" />
                <p className="text-white/70 text-sm sm:text-[15px] leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 bg-[#A3E635] px-7 sm:px-9 py-3.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-black transition-all duration-200 hover:bg-[#B8F04A] hover:shadow-[0_0_40px_rgba(163,230,53,0.4)] w-full sm:w-auto"
            >
              Find out More
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TheStudio;
