import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import AfterLoggedIn from "./AfterLoggedIn";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Bg from "./LandingPageComponents/Bg";
import FlowtrackState from "../context/FlowtrackState"

// This is after logged in components
import Background from "./AfterLoggedInComponents/background";
import Nav from "./AfterLoggedInComponents/Nav"
import Tasks from "./AfterLoggedInComponents/Tasks";
import Collaboration from "./AfterLoggedInComponents/Collaboration";
import Visualization from "./AfterLoggedInComponents/Visualization";
import History from "./AfterLoggedInComponents/History";
import Iteration from "./AfterLoggedInComponents/Iteration";

import Alert, {type AlertType} from "./Alert";


function App() {
  let navigate = useNavigate();
  const [Loggedin, setLoggedin] = useState(false);
  const [Loginbtn, setLoginbtn] = useState(false);
  const [Signupbtn, setSignupbtn] = useState(false);
  const [AlertPopUp, setAlertPopUp] = useState<AlertType>({
    alert: false,
    type: "failure",
    msg: "This is an default alert",
  });
  
  useEffect(() => {
    Loggedin ? navigate("/") : navigate("/landing");
  }, [Loggedin]);

  useEffect(() => {
    if (Loginbtn || Signupbtn || AlertPopUp.alert) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      document.body.style.pointerEvents = "none";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.body.style.pointerEvents = "auto";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [Loginbtn, Signupbtn, AlertPopUp.alert]);
  return (
    <>
      <FlowtrackState>
        <Routes>
          <Route
            path="/landing"
            element={
              <>
                <Bg />
                <Alert AlertPopUp={AlertPopUp} setAlertPopUp={setAlertPopUp} />
                <Landing
                  setLoginbtn={setLoginbtn}
                  Loginbtn={Loginbtn}
                  Signupbtn={Signupbtn}
                  setLoggedin={setLoggedin}
                  setSignupbtn={setSignupbtn}
                  setAlertPopUp={setAlertPopUp}
                  AlertPopUp={AlertPopUp}
                />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Background />
                <Nav setLoggedin={setLoggedin} />
                <AfterLoggedIn />
              </>
            }
          />

          {/* This are after logged in components */}
          <Route
            path="/tasks"
            element={
              <>
                <Nav setLoggedin={setLoggedin} /> <Tasks />
              </>
            }
          />
          <Route
            path="/collaboration"
            element={
              <>
                <Nav setLoggedin={setLoggedin} /> <Collaboration />
              </>
            }
          />
          <Route
            path="/visualization"
            element={
              <>
                <Nav setLoggedin={setLoggedin} /> <Visualization />
              </>
            }
          />
          <Route
            path="/history"
            element={
              <>
                <Nav setLoggedin={setLoggedin} /> <History />
              </>
            }
          />
          <Route
            path="/iteration"
            element={
              <>
                <Nav setLoggedin={setLoggedin} /> <Iteration />
              </>
            }
          />
        </Routes>
      </FlowtrackState>
    </>
  );
}

export default App;
