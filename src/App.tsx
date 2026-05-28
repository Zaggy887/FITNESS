import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Universities from './components/Universities';
import StatsBanner from './components/StatsBanner';
import Process from './components/Process';
import OrganizationFeatures from './components/OrganizationFeatures';
import MeetTheCoach from './components/MeetTheCoach';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Universities />
      <StatsBanner />
      <Process />
      <OrganizationFeatures />
      <MeetTheCoach />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
