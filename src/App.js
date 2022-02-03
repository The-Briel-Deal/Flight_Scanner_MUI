import React from "react";
import logo from './logo.svg';
import Landing from './pages/Landing';
import MySearches from "./pages/MySearches";
import AboutUs from "./pages/AboutUs";
import Nav from './components/Nav';
import { Router, BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SignUp from "./pages/SignUp";
function App() {
  const [user, setUser] = React.useState({
    name: 'Gabriel Ford',
    email: 'gabe@fordltc.net',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AM-JKLXLDoZ9zszyLS3CvyKQC2ic9ggnSun8N35uFFk6dGmizpblBzauxZT1URZ2xiBA3nQR1kfo8fN9wjsOzNMU862jyaVVDikkNRO2ekTF-Hs3egpU14Vsyh2571ENIyRL_adIu_m8OVRGwkso_jXliJPMbg=w721-h961-no?authuser=0',
  });

  const location = useLocation();
  return (
    <>
      {/* <SignUp /> */}
      {/* <h1>hello</h1> */}
      <Nav userState={[user, setUser]} />
      <div style={{ position: "relative" }}>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Landing />} />
            <Route path="/mysearches" element={<MySearches />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
