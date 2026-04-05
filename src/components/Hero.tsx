import { useEffect, useState } from "react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const backgroundImages = [
    "/Background_2.jpg",
    "/Background_3.jpg",
    "/Background_1.jpg",
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* IMAGE AREA */}
      <div className="relative h-[420px] sm:h-[500px] lg:h-[540px] overflow-hidden">
        {backgroundImages.map((img, index) => {
          let backgroundPosition = "center center";

          if (isMobile && index === 2) {
            backgroundPosition = "68% center";
          }

          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
                currentImageIndex === index ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url("${img}")`,
                backgroundSize: "cover",
                backgroundPosition,
                backgroundRepeat: "no-repeat",
              }}
            />
          );
        })}

        {/* image overlays */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/20 to-black/55" />
      </div>

      {/* BLACK CONTENT AREA */}
      <div className="relative bg-black px-6 pt-10 pb-16 sm:pt-12 sm:pb-20">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">
            Personal Training Studio in
            <span className="block text-[#8C8267]">Elwood</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base font-semibold leading-8 text-white sm:text-lg">
            Expert trainers in body composition, dedicated to transforming
            physiques and changing lives with private{" "}
            <span className="text-[#8C8267] underline underline-offset-4">
              1-on-1 training in Elwood
            </span>
            . Also proudly supporting clients across{" "}
            <span className="text-[#8C8267] underline underline-offset-4">
              Elsternwick, Brighton, St Kilda, Balaclava
            </span>{" "}
            and surrounding suburbs.
          </p>

          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex min-w-[280px] items-center justify-center bg-[#2F3A35] px-8 py-5 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#39453f]"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>

      {/* REVIEW BADGE */}
      <div className="absolute bottom-6 left-4 z-20 sm:left-6">
        <div className="flex w-[220px] items-start justify-between rounded-2xl bg-white px-5 py-4 text-black shadow-2xl">
          <div>
            <div className="text-4xl font-semibold leading-none text-[#4285F4]">
              G
            </div>
            <div className="mt-3 text-[15px] font-bold">5.0 ⭐⭐⭐⭐⭐</div>
            <div className="mt-1 text-sm text-black/65">82 reviews</div>
          </div>
          <button
            aria-label="Close reviews badge"
            className="text-xl leading-none text-black/40"
          >
            ×
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;