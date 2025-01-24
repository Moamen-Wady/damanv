import "./styles/styles.css";
import "animate.css/animate.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import Navbar from "./components/navbar";
import Ul from "./components/ul";
import Banner from "./components/banner";
import Navbara from "./components/navbara";
import Ula from "./components/ula";
import Loading from "./Loading";
const Prefooter = lazy(() => import("./components/prefooter"));
const Footer = lazy(() => import("./components/footer"));
const Prefootera = lazy(() => import("./components/prefootera"));
const Footera = lazy(() => import("./components/footera"));
const HomeP = lazy(() => import("./Home"));
const ServicesP = lazy(() => import("./Services"));
const AboutusP = lazy(() => import("./about"));
const ContactUsP = lazy(() => import("./ContactUs"));
const ErrorpP = lazy(() => import("./Errorp"));
const HomeaP = lazy(() => import("./homea"));
const ServicesaP = lazy(() => import("./servicesa"));
const AboutusaP = lazy(() => import("./abouta"));
// const ContactUsaP = lazy(() => import("./ContactUsa"));
const ErrorpaP = lazy(() => import("./Errorpa"));

function App() {
  function menuh() {
    let hb = document.getElementById("hide");
    let vb = document.getElementById("view");
    hb.style.display = "none";
    vb.style.display = "block";
    document.getElementById("mobul").style.display = "none";
  }
  function menuv() {
    let hb = document.getElementById("hide");
    let vb = document.getElementById("view");
    hb.style.display = "block";
    vb.style.display = "none";
    document.getElementById("mobul").style.display = "block";
  }
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
        <Ul menuh={menuh} menuv={menuv} />
        <Banner />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomeP scrollToHash={scrollToHash} />} />
            <Route
              path="/index"
              element={<HomeP scrollToHash={scrollToHash} />}
            />
            <Route
              path="/Contactus"
              element={<ContactUsP scrollToHash={scrollToHash} />}
            />
            <Route
              path="/Services"
              element={<ServicesP scrollToHash={scrollToHash} />}
            />
            <Route
              path="/Aboutus"
              element={<AboutusP scrollToHash={scrollToHash} />}
            />
            <Route path="*" element={<ErrorpP scrollToHash={scrollToHash} />} />
          </Routes>
          <Prefooter />
          <Footer menuh={menuh} />
        </Suspense>
      </Router>
    );
  } else {
    return (
      <Router>
        <Navbara setLang={setLang} />
        <Ula menuh={menuh} menuv={menuv} />
        <Banner />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomeaP scrollToHash={scrollToHash} />} />
            <Route
              path="/index"
              element={<HomeaP scrollToHash={scrollToHash} />}
            />
            <Route
              path="/Contactus"
              element={<ContactUsP scrollToHash={scrollToHash} />}
            />
            <Route
              path="/Services"
              element={<ServicesaP scrollToHash={scrollToHash} />}
            />
            <Route
              path="/Aboutus"
              element={<AboutusaP scrollToHash={scrollToHash} />}
            />
            <Route
              path="*"
              element={<ErrorpaP scrollToHash={scrollToHash} />}
            />
          </Routes>
          <Prefootera />
          <Footera menuh={menuh} />
        </Suspense>
      </Router>
    );
  }
}
export default App;
