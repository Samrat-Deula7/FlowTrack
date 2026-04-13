import NavBar from "./LandingPageComponents/NavBar";
import HeroSection from './LandingPageComponents/HeroSection'
import Footer from "./Footer";
import CTASection from "./LandingPageComponents/CTAsection";
import ServiceDetails from "./LandingPageComponents/ServiceDetails";

type LandingProps = {
  setLoginbtn:React.Dispatch<React.SetStateAction<boolean>>;
};
const Landing:React.FC<LandingProps>=({setLoginbtn})=> {
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