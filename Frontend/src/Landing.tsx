import NavBar from "./LandingPageComponents/NavBar";
import HeroSection from './LandingPageComponents/HeroSection'
import Footer from "./Footer";
import CTASection from "./LandingPageComponents/CTAsection";
import ServiceDetails from "./LandingPageComponents/ServiceDetails";
import Login from "./Login";

type LandingProps = {
  setLoginbtn: React.Dispatch<React.SetStateAction<boolean>>;
  setLoggedin: React.Dispatch<React.SetStateAction<boolean>>;
  setSignupbtn: React.Dispatch<React.SetStateAction<boolean>>;
  Loginbtn: boolean;
};
const Landing: React.FC<LandingProps> = ({
  setLoginbtn,
  Loginbtn,
  setLoggedin,
  setSignupbtn,
}) => {
  return (
    <>
      <NavBar setLoginbtn={setLoginbtn} />
      <Login
        Loginbtn={Loginbtn}
        setLoggedin={setLoggedin}
        setLoginbtn={setLoginbtn}
        setSignupbtn={setSignupbtn}
      />
      <HeroSection />
      <CTASection />
      <ServiceDetails />
      <Footer />
    </>
  );
};

export default Landing;