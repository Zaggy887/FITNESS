import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBanner from "./components/StatsBanner";
import Universities from "./components/Universities";
import UniqueAbout from "./components/UniqueAbout";
import Process from "./components/Process";
import TheStudio from "./components/TheStudio";
import MeetTheCoach from "./components/MeetTheCoach";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsBanner />
      <Universities />
      <UniqueAbout />
      <Process />
      <TheStudio />
      <MeetTheCoach />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
