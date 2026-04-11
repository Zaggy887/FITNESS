import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBanner from "./components/StatsBanner";
import UniqueAbout from "./components/UniqueAbout";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Articles from "./components/Articles";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsBanner />
      <UniqueAbout />
      <Process />
      <Testimonials />
      <Articles />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
