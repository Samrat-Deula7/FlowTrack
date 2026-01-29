import {  Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import AfterLoggedIn from "./AfterLoggedIn";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Bg from "./LandingPageComponents/Bg";


function App() {
    let navigate = useNavigate();
  const [Loggedin,setLoggedin]=useState(false)

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
              <Bg  />
              <Landing />
            </>
          }
        />
        <Route path="/" element={<AfterLoggedIn />} />
      </Routes>
    </>
  );
}

export default App;
