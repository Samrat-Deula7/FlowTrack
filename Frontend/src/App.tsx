import {  Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import AfterLoggedIn from "./AfterLoggedIn";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Bg from "./LandingPageComponents/Bg";
import Background from "./AfterLoggedInComponents/background";


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
      </Routes>
    </>
  );
}

export default App;
