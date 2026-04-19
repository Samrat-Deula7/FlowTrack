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

type AlertType={
  alert:boolean,
  type:"success"|"failure",
  msg:string
}

function App() {
  let navigate = useNavigate();
  const [Loggedin, setLoggedin] = useState(false);
  const [Loginbtn, setLoginbtn] = useState(false);
  const [Signupbtn, setSignupbtn] = useState(false);
  const [Alert, SetAlert] = useState<AlertType>({
    alert: false,
    type: "failure",
    msg:"",
  });

  useEffect(() => {
    Loggedin ? navigate("/") : navigate("/landing");
  }, [Loggedin]);

  useEffect(() => {
    if (Loginbtn || Signupbtn) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [Loginbtn , Signupbtn]);
  return (
    <>
      <FlowtrackState>
        <Routes>
          <Route
            path="/landing"
            element={
              <>
                <Bg />
                <Landing
                  setLoginbtn={setLoginbtn}
                  Loginbtn={Loginbtn}
                  Signupbtn={Signupbtn}
                  setLoggedin={setLoggedin}
                  setSignupbtn={setSignupbtn}
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
