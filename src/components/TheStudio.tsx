const TheStudio = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-5xl font-black mb-8 tracking-tight">
          <span className="text-white">THE </span>
          <span className="text-[#7A725E]">STUDIO</span>
        </h2>

        <div className="w-full overflow-hidden mb-10" style={{ maxHeight: '420px' }}>
          <img
            src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="The Studio"
            className="w-full object-cover object-center"
            style={{ height: '420px' }}
            loading="lazy"
          />
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/80 text-base leading-relaxed mb-8">
            As Melbourne's only dedicated graduate recruitment agency, we specialise in helping
            companies find exceptional university graduates from top institutions. We also offer
            tailored{' '}
            <span className="underline underline-offset-2 text-white/90 cursor-pointer">internship placement</span>{' '}
            programs to help you find and develop emerging talent — with expert{' '}
            <span className="underline underline-offset-2 text-white/90 cursor-pointer">candidate screening</span>{' '}
            to support results beyond the application stage. While our focus is on Melbourne graduates,
            we proudly work with companies from nearby areas including{' '}
            <span className="underline underline-offset-2 text-white/90 cursor-pointer">Sydney</span>,{' '}
            <span className="underline underline-offset-2 text-white/90 cursor-pointer">Brisbane</span>,{' '}
            <span className="underline underline-offset-2 text-white/90 cursor-pointer">Perth</span>, and{' '}
            <span className="underline underline-offset-2 text-white/90 cursor-pointer">Adelaide</span>. Our
            personalised approach ensures that a qualified, motivated graduate is within reach for
            growing businesses and established enterprises alike, no matter your industry.
          </p>

          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-[#2e3d30] text-white font-bold tracking-widest text-sm uppercase hover:opacity-90 transition-opacity"
          >
            BOOK FREE CONSULTATION
          </a>
        </div>
      </div>
    </section>
  );
};

export default TheStudio;
