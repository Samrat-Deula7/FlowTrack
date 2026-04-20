import NavBar from "./LandingPageComponents/NavBar";
import HeroSection from './LandingPageComponents/HeroSection'
import Footer from "./Footer";
import CTASection from "./LandingPageComponents/CTAsection";
import ServiceDetails from "./LandingPageComponents/ServiceDetails";
import Login from "./Login";
import Signup from "./Signup";
import  { type AlertType } from "./Alert";

type LandingProps = {
  setLoginbtn: React.Dispatch<React.SetStateAction<boolean>>;
  setLoggedin: React.Dispatch<React.SetStateAction<boolean>>;
  setSignupbtn: React.Dispatch<React.SetStateAction<boolean>>;
  setAlertPopUp: React.Dispatch<React.SetStateAction<AlertType>>;
  AlertPopUp: AlertType;
  Loginbtn: boolean;
  Signupbtn: boolean;
};
const Landing: React.FC<LandingProps> = ({
  setLoginbtn,
  Loginbtn,
  Signupbtn,
  setLoggedin,
  setSignupbtn,
  setAlertPopUp,
  AlertPopUp,
}) => {
  return (
    <>
      <NavBar setLoginbtn={setLoginbtn} setSignupbtn={setSignupbtn} />
      <Login
        Loginbtn={Loginbtn}
        setLoggedin={setLoggedin}
        setLoginbtn={setLoginbtn}
        setSignupbtn={setSignupbtn}
        setAlertPopUp={setAlertPopUp}
        AlertPopUp={AlertPopUp}
      />
      <Signup
        Signupbtn={Signupbtn}
        setSignupbtn={setSignupbtn}
        setLoginbtn={setLoginbtn}
        setAlertPopUp={setAlertPopUp}
        AlertPopUp={AlertPopUp}
      />
      <HeroSection />
      <CTASection />
      <ServiceDetails />
      <Footer />
    </>
  );
};

export default Landing;