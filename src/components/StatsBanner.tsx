const stats = [
  { value: '10+', label: 'University Partners' },
  { value: '500+', label: 'Active Members' },
  { value: '98%', label: 'Satisfaction Rate' },
];

const StatsBanner = () => {
  return (
    <section className="bg-black py-16 sm:py-24 px-4 sm:px-6 border-b border-white/[0.05]">
      <div className="container mx-auto max-w-3xl">
        <div className="grid grid-cols-3 gap-6 md:gap-16">
          {stats.map(({ value, label }, i) => (
            <div key={label} className="flex flex-col items-center text-center">
              <span
                className="text-[#A3E635] text-3xl sm:text-5xl md:text-[64px] font-black tracking-tight tabular-nums"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {value}
              </span>
              <span className="mt-2.5 text-white/25 text-[10px] sm:text-xs uppercase tracking-[0.22em] leading-snug">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
