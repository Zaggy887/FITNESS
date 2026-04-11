import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBanner from "./components/StatsBanner";
import WhyUs from "./components/WhyUs";
import About from "./components/About";
import Process from "./components/Process";
import Statistics from "./components/Statistics";
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
      <WhyUs />
      <About />
      <Process />
      <Statistics />
      <Testimonials />
      <Articles />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
