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

function App() {
  const isPrivacyPage = window.location.pathname.replace(/\/+$/, '') === '/privacy';

  if (isPrivacyPage) {
    document.title = 'Privacy Policy | StrengthHub Online';

    return (
      <div className="min-h-screen">
        <Navbar />
        <PrivacyPolicy />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsBanner />
      <UniqueAbout />
      <Process />
      <TheStudio />
      <MeetTheCoach />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
