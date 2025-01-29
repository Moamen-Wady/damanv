import "./styles/styles.css";
import "animate.css/animate.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState, lazy, Suspense, useCallback, memo } from "react";
import Loading from "./Loading";

const LoadingC = memo(Loading);

const Navbar = lazy(() => import("./components/navbar"));
const Ul = lazy(() => import("./components/ul"));
const Banner = lazy(() => import("./components/banner"));
const Prefooter = lazy(() => import("./components/prefooter"));
const Footer = lazy(() => import("./components/footer"));
const Navbara = lazy(() => import("./components/navbara"));
const Ula = lazy(() => import("./components/ula"));
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
const ErrorpaP = lazy(() => import("./Errorpa"));

function App() {
  useEffect(() => {
    if (navigator.userAgent.match(/samsung/i)) {
      alert(
        "Your browser (Samsung Internet) may not show this website's colors correctly in Dark Mode with setting: 'use dark mode: always/when phone dark mode is on' or when option: 'dark theme sites' is checked. Please choose 'light theme websites' or consider using a standards-compliant browser instead. \n\n" +
          "We recommend Firefox, Microsoft Edge, or Google Chrome."
      );
      return;
    }
  }, []);
 
  function scrollToHash() {
    document.getElementById(window.location.hash?.slice(1))?.scrollIntoView();
  }

  const menuh = useCallback(() => {
    let hb = document.getElementById("hide");
    let vb = document.getElementById("view");
    hb.style.display = "none";
    vb.style.display = "block";
    document.getElementById("mobul").style.display = "none";
  }, []);
  const menuv = useCallback(() => {
    let hb = document.getElementById("hide");
    let vb = document.getElementById("view");
    hb.style.display = "block";
    vb.style.display = "none";
    document.getElementById("mobul").style.display = "block";
  }, []);

  // yes, using state with language to hide it from url
  // it is usually better to put it in a query in url and read it from there 
  // this is a small, manually translated project so why not
  const [lang, setLang] = useState("en");

  return (
    <Router>
      <Suspense fallback={<LoadingC />}>
        {lang === "en" ? (
          <>
            <Navbar setLang={setLang} />
            <Ul menuh={menuh} menuv={menuv} />
            <Banner />
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
              <Route
                path="*"
                element={<ErrorpP scrollToHash={scrollToHash} />}
              />
            </Routes>
            <Prefooter />
            <Footer menuh={menuh} />
          </>
        ) : (
          <>
            <Navbara setLang={setLang} />
            <Ula menuh={menuh} menuv={menuv} />
            <Banner />
            <Routes>
              <Route
                path="/"
                element={<HomeaP scrollToHash={scrollToHash} />}
              />
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
          </>
        )}
      </Suspense>
    </Router>
  );
}
export default App;
