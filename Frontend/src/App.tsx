import {  Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import AfterLoggedIn from "./AfterLoggedIn";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Bg from "./LandingPageComponents/Bg";

// This is after logged in components
import Background from "./AfterLoggedInComponents/background";
import Tasks from "./AfterLoggedInComponents/Tasks";
import Collaboration from "./AfterLoggedInComponents/Collaboration";
import Visualization from "./AfterLoggedInComponents/Visualization";
import History from "./AfterLoggedInComponents/History";
import Iteration from "./AfterLoggedInComponents/Iteration";

function App() {
    let navigate = useNavigate();
  const [Loggedin,setLoggedin]=useState(true)

  useEffect(()=>{
    Loggedin ? navigate("/") : navigate("/landing");
  
  },[Loggedin])
  return (
    <>
      <Routes>
        <Route
          path="/landing"
          element={
            <>
              <Bg />
              <Landing />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Background />
              <AfterLoggedIn />
            </>
          }
        />

        {/* This are after logged in components */}
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/visualization" element={<Visualization />} />
        <Route path="/history" element={<History />} />
        <Route path="/iteration" element={<Iteration />} />
      </Routes>
    </>
  );
}

export default App;
