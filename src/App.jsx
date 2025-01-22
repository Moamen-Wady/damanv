import "./styles/styles.css";
import "animate.css/animate.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState, lazy } from "react";
// const LazyComponent = lazy(() => import('./LazyComponent'));
import Home from "./Home";
import Services from "./Services";
import Aboutus from "./about";
import ContactUs from "./ContactUs";
import Errorp from "./Errorp";
import Homea from "./homea";
import Servicesa from "./servicesa";
import Aboutusa from "./abouta";
import ContactUsa from "./ContactUsa";
import Errorpa from "./Errorpa";
import Navbar from "./components/navbar";
import Ul from "./components/ul";
import Banner from "./components/banner";
import Prefooter from "./components/prefooter";
import Footer from "./components/footer";
import Navbara from "./components/navbara";
import Ula from "./components/ula";
import Prefootera from "./components/prefootera";
import Footera from "./components/footera";

function App() {
  useEffect(() => {
    if (navigator.userAgent.match(/samsung/i)) {
      alert(
        "Your browser (Samsung Internet) may not show this website's colors correctly in Dark Mode with setting: 'use dark mode: always/when phone dark mode is on' or when option: 'dark theme sites' is checked. Please choose 'light theme websites' or consider using a standards-compliant browser instead. \n\n" +
          "We recommend Firefox, Microsoft Edge, or Google Chrome."
      );
    }
  }, []);
  function scrollToHash() {
    document.getElementById(window.location.hash?.slice(1))?.scrollIntoView();
  }
  const [lang, setLang] = useState("en");
  if (lang === "en") {
    return (
      <Router>
        <Navbar setLang={setLang} />
        <Ul />
        <Banner />
        <Routes>
          <Route path="/" element={<Home scrollToHash={scrollToHash} />} />
          <Route path="/index" element={<Home scrollToHash={scrollToHash} />} />
          <Route
            path="/Contactus"
            element={<ContactUs scrollToHash={scrollToHash} />}
          />
          <Route
            path="/Services"
            element={<Services scrollToHash={scrollToHash} />}
          />
          <Route
            path="/Aboutus"
            element={<Aboutus scrollToHash={scrollToHash} />}
          />
          <Route path="*" element={<Errorp scrollToHash={scrollToHash} />} />
        </Routes>
        <Prefooter />
        <Footer />
      </Router>
    );
  } else {
    return (
      <Router>
        <Navbara setLang={setLang} />
        <Ula />
        <Banner />
        <Routes>
          <Route path="/" element={<Homea scrollToHash={scrollToHash} />} />
          <Route
            path="/index"
            element={<Homea scrollToHash={scrollToHash} />}
          />
          <Route
            path="/Contactus"
            element={<ContactUsa scrollToHash={scrollToHash} />}
          />
          <Route
            path="/Services"
            element={<Servicesa scrollToHash={scrollToHash} />}
          />
          <Route
            path="/Aboutus"
            element={<Aboutusa scrollToHash={scrollToHash} />}
          />
          <Route path="*" element={<Errorpa scrollToHash={scrollToHash} />} />
        </Routes>
        <Prefootera />
        <Footera />
      </Router>
    );
  }
}
export default App;
