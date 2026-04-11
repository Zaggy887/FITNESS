import { useEffect, useState } from "react";
import { X } from "lucide-react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [reviewVisible, setReviewVisible] = useState(true);

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
  }, [backgroundImages.length]);

  return (
    <div className="bg-black text-white">
      {/* Image section */}
      <div className="relative h-[40vh] sm:h-[50vh] lg:h-[55vh] overflow-hidden">
        {backgroundImages.map((img, index) => {
          let backgroundPosition = "center";
          if (index === 2 && isMobile) backgroundPosition = "70% center";

          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
                currentImageIndex === index ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url("${img}")`,
                backgroundSize: "cover",
                backgroundPosition,
                backgroundRepeat: "no-repeat",
                filter: "brightness(0.45)",
              }}
            />
          );
        })}

        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-black/15 to-black/30" />

        {/* Google review card */}
        {reviewVisible && (
          <div className="absolute bottom-6 left-5 z-30 w-[200px] rounded-2xl bg-white p-4 text-black shadow-2xl sm:left-8">
            <button
              className="absolute right-2 top-2 text-gray-500 hover:text-black"
              onClick={() => setReviewVisible(false)}
            >
              <X size={16} />
            </button>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-[#4285F4] shadow">
                G
              </div>
              <div>
                <div className="text-3xl font-bold leading-none">5.0</div>
                <div className="mt-1 text-[22px] leading-none text-[#fbbc05]">
                  ★★★★★
                </div>
                <div className="mt-2 text-sm text-gray-600">82 reviews</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Text content section */}
      <div className="bg-black px-6 pb-20 pt-14 sm:px-8 sm:pt-16 lg:px-10 lg:pt-20">
        <div className="mx-auto max-w-[860px] text-center">
          <h1 className="font-extrabold tracking-tight leading-tight">
            <span className="block text-white text-4xl sm:text-5xl lg:text-[62px]">
              Personal Training Studio{" "}
              <span className="text-[#7A725E]">in</span>
            </span>
            <span className="block text-[#7A725E] text-5xl sm:text-6xl lg:text-[78px] mt-1">
              Elwood
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-[700px] text-base font-bold leading-7 text-white sm:text-lg sm:leading-8">
            Expert trainers in body composition, dedicated to transforming
            physiques and changing lives with private{" "}
            <span className="text-[#7A725E] underline underline-offset-2">1-on-1 training in Elwood</span>.{" "}
            Also proudly supporting clients across{" "}
            <span className="text-[#7A725E] underline underline-offset-2">
              Elwood, Elsternwick, Brighton, St Kilda, Balaclava
            </span>{" "}
            and surrounding suburbs.
          </p>

          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex min-w-[320px] items-center justify-center bg-[#2e3d30] px-10 py-5 text-sm font-bold uppercase tracking-[0.15em] text-white transition hover:opacity-90"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
