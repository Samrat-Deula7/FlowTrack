import NavBar from "./LandingPageComponents/NavBar";
import HeroSection from './LandingPageComponents/HeroSection'
import Footer from "./Footer";
import CTASection from "./LandingPageComponents/CTAsection";
import ServiceDetails from "./LandingPageComponents/ServiceDetails";
import Login from "./Login";
import Signup from "./Signup";

type LandingProps = {
  setLoginbtn: React.Dispatch<React.SetStateAction<boolean>>;
  setLoggedin: React.Dispatch<React.SetStateAction<boolean>>;
  setSignupbtn: React.Dispatch<React.SetStateAction<boolean>>;
  Loginbtn: boolean;
  Signupbtn: boolean;
};
const Landing: React.FC<LandingProps> = ({
  setLoginbtn,
  Loginbtn,
  Signupbtn,
  setLoggedin,
  setSignupbtn,
}) => {
  return (
    <>
      <NavBar setLoginbtn={setLoginbtn} setSignupbtn={setSignupbtn} />
      <Login
        Loginbtn={Loginbtn}
        setLoggedin={setLoggedin}
        setLoginbtn={setLoginbtn}
        setSignupbtn={setSignupbtn}
      />
      <Signup
        Signupbtn={Signupbtn}
        setSignupbtn={setSignupbtn}
        setLoginbtn={setLoginbtn}
      />
      <HeroSection />
      <CTASection />
      <ServiceDetails />
      <Footer />
    </>
  );
};

export default Landing;