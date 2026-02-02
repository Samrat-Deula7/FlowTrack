import NavBar from "./LandingPageComponents/NavBar";
import HeroSection from './LandingPageComponents/HeroSection'
import Footer from "./Footer";
import CTASection from "./LandingPageComponents/CTAsection";
import ServiceDetails from "./LandingPageComponents/ServiceDetails";
function Landing() {
  return (
    <>
    <NavBar/>
    <HeroSection/>
    <CTASection/>
    <ServiceDetails/>
    <Footer/>
    </>
  );
}

export default Landing;