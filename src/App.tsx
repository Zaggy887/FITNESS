import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBanner from "./components/StatsBanner";
import UniqueAbout from "./components/UniqueAbout";
import Process from "./components/Process";
import TheStudio from "./components/TheStudio";
import MeetTheCoach from "./components/MeetTheCoach";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import HomeSections from "./components/HomeSections";

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  if (path === '/privacy') {
    document.title = 'Privacy Policy | StrengthHub Online';

    return (
      <div className="min-h-screen">
        <Navbar />
        <PrivacyPolicy />
        <Footer />
      </div>
    );
  }

  if (path === '/platform') {
    document.title = 'Platform | StrengthHub Online';

    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-[72px]">
          <UniqueAbout />
          <Process />
          <ContactForm />
        </main>
        <Footer />
      </div>
    );
  }

  if (path === '/universities') {
    document.title = 'For Universities | StrengthHub Online';

    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-[72px]">
          <TheStudio />
          <ContactForm />
        </main>
        <Footer />
      </div>
    );
  }

  if (path === '/about') {
    document.title = 'Our Story | StrengthHub Online';

    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-[72px]">
          <MeetTheCoach />
          <ContactForm />
        </main>
        <Footer />
      </div>
    );
  }

  document.title = 'StrengthHub Online | Student Fitness & Wellbeing Platform';

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsBanner />
      <HomeSections />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
