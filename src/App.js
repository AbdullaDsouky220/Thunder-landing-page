import Home from './components/Home/Home';
import './app.scss';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Team from './components/Team/Team';
import PricingSection from './components/Pricing/PricingSection';
import ExpertSection from './components/ExpertSection/ExpertSection';
import StartSection from './components/StartSection/StartSection';
import ClientSection from './components/ClienSection/ClientSection';
import Brands from './components/Brands/Brands';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App () {
  return (
    <div className="App">

      <Navbar />

      <Home />
      <Services />
      <Team/>
      <PricingSection/>
      <ExpertSection/>
      <StartSection/>
      <ClientSection/>
      <Brands/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
