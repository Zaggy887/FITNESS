import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBanner from "./components/StatsBanner";
import UniqueAbout from "./components/UniqueAbout";
import Process from "./components/Process";
import TheStudio from "./components/TheStudio";
import MeetTheCoach from "./components/MeetTheCoach";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import HomeSections from "./components/HomeSections";
import NotFound from "./components/NotFound";
import StickyMobileCta from "./components/StickyMobileCta";
import useScrollAnimation from "./hooks/useScrollAnimation";

function App() {
  useScrollAnimation();

  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  if (path === '/privacy') {
    document.title = 'Privacy Policy | StrengthHub Online';

    return (
      <div className="page-enter min-h-screen">
        <Navbar />
        <PrivacyPolicy />
        <Footer />
      </div>
    );
  }

  if (path === '/platform') {
    document.title = 'Platform | StrengthHub Online';

    return (
      <div className="page-enter min-h-screen">
        <Navbar />
        <main className="pt-[72px]">
          <UniqueAbout />
          <Process />
        </main>
        <Footer />
        <StickyMobileCta />
      </div>
    );
  }

  if (path === '/universities') {
    document.title = 'For Universities & Organisations | StrengthHub Online';

    return (
      <div className="page-enter min-h-screen">
        <Navbar />
        <main className="pt-[72px]">
          <TheStudio />
        </main>
        <Footer />
        <StickyMobileCta />
      </div>
    );
  }

  if (path === '/about') {
    document.title = 'Our Story | StrengthHub Online';

    return (
      <div className="page-enter min-h-screen">
        <Navbar />
        <main className="pt-[72px]">
          <MeetTheCoach />
        </main>
        <Footer />
        <StickyMobileCta />
      </div>
    );
  }

  if (path !== '/') {
    document.title = 'Page not found | StrengthHub Online';

    return (
      <div className="page-enter min-h-screen">
        <Navbar />
        <div className="pt-[72px]">
          <NotFound />
        </div>
        <Footer />
      </div>
    );
  }

  document.title = 'StrengthHub Online | Young Adult Fitness & Wellbeing Platform';

  return (
    <div className="page-enter min-h-screen">
      <Navbar />
      <Hero />
      <StatsBanner />
      <HomeSections />
      <Footer />
      <StickyMobileCta />
    </div>
  );
}

export default App;
