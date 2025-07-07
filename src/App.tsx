import './styles/App.css';
import Hero from './components/pages/Header/hero-section';
import Navbar from './components/pages/Header/navbar';
import PortableSolutions from './components/pages/PortableSolution';
import OurService from './components/pages/OurServices';
import WhyChooseUs from './components/pages/WhyChooseUs';
import TrustedClients from './components/pages/TrustedClient';
import OurProduct from './components/pages/OurProduct';
import TestimonialSlider from './components/pages/CustomerSlider';
import ContactUs from './components/pages/ContactUs';
import Footer from './components/pages/Footer';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="font-sans">
      <ToastContainer position="bottom-right" autoClose={3000} />
      <Navbar />
      <Hero />
      <PortableSolutions />
      <OurService />
      <WhyChooseUs />
      <TrustedClients />
      <OurProduct />
      <TestimonialSlider />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
