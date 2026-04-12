const TheStudio = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-black mb-4 tracking-tight">
          <span className="text-white">THE </span>
          <span className="text-[#7A725E]">PLATFORM</span>
        </h2>
      </div>

      <div className="w-full overflow-hidden mb-6">
        <img
          src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="The Studio"
          className="w-full object-cover object-center h-[140px] sm:h-[260px]"
          loading="lazy"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/80 text-sm leading-relaxed mb-6">
            As a fully online personal training service, we specialise in helping
            clients achieve their body composition goals from anywhere in the world. We offer
            tailored{' '}
            <span className="underline underline-offset-2 text-white/90 cursor-pointer">training programs</span>{' '}
            designed around your lifestyle — with expert{' '}
            <span className="underline underline-offset-2 text-white/90 cursor-pointer">nutrition guidance</span>{' '}
            to support your results beyond the gym. While our coaches are based in{' '}
            <span className="underline underline-offset-2 text-white/90 cursor-pointer">Australia</span>,{' '}
            we proudly work with clients from{' '}
            <span className="underline underline-offset-2 text-white/90 cursor-pointer">the UK</span>,{' '}
            <span className="underline underline-offset-2 text-white/90 cursor-pointer">the US</span>, and{' '}
            <span className="underline underline-offset-2 text-white/90 cursor-pointer">beyond</span>. Our
            personalised approach ensures that expert coaching is within reach for
            anyone serious about transforming their physique, no matter where you are.
          </p>

          <a
            href="#contact"
            className="inline-block px-10 py-3 bg-[#2e3d30] text-white font-bold tracking-widest text-sm uppercase hover:opacity-90 transition-opacity"
          >
            BOOK FREE CONSULTATION
          </a>
        </div>
        </div>
    </section>
  );
};

export default TheStudio;
