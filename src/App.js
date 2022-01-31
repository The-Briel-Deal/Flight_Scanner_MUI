import React from "react";
import logo from './logo.svg';
import Landing from './pages/Landing';
import MySearches from "./pages/MySearches";
import AboutUs from "./pages/AboutUs";
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [user, setUser] = React.useState({
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl: 'https://lh3.googleusercontent.com/pw/AM-JKLXLDoZ9zszyLS3CvyKQC2ic9ggnSun8N35uFFk6dGmizpblBzauxZT1URZ2xiBA3nQR1kfo8fN9wjsOzNMU862jyaVVDikkNRO2ekTF-Hs3egpU14Vsyh2571ENIyRL_adIu_m8OVRGwkso_jXliJPMbg=w721-h961-no?authuser=0',
  });

  return (
    <>
      <BrowserRouter>
        <Nav userState={[user, setUser]} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/mysearches" element={<MySearches />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
