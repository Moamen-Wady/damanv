import "./styles/services.css";
import React, { useEffect } from "react";
import Clients from "./components/clients";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Prefooter from "./components/prefooter";
import Banner from "./components/banner";
import Ul from "./components/ul";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Services() {
  function scrollToHash() {
    const id = window.location.hash.substr(1);

    if (id) {
      const anchor = document.getElementById(id);

      if (anchor) {
        anchor.scrollIntoView();
      }
    }
  }

  useEffect(() => scrollToHash(), []);
  return (
    <>
      <Navbar />
      <Ul />
      <Banner />

      <div className=" servcont ">
        <AnimationOnScroll animateOnce={true} animateIn="animate__backInDown">
          <h1> How Can We Help You?</h1>
        </AnimationOnScroll>

        <div className=" serv ">
          <div className=" telts ">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__slideInRight"
            >
              <div>
                <picture>
                  <source srcSet="5tama.webp" type="image/webp" />
                  <img src="5tama.png" alt="" />
                </picture>
                <h1>DED Services</h1>
                <p>
                  DED, the acronym for the Department of Economic Development,
                  Dubai.
                </p>
              </div>
            </AnimationOnScroll>
          </div>
          <div className=" telts ">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__slideInRight"
            >
              <div>
                <picture>
                  <source srcSet="visa.webp" type="image/webp" />
                  <img src="visa.png" alt="" />
                </picture>
                <h1>Visa Services In UAE</h1>
                <p>
                  Visiting, residing, or transiting to the UAE? Visa services
                  will be your main requirement.
                </p>
              </div>
            </AnimationOnScroll>
          </div>
          <div className=" telts ">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__slideInRight"
              delay={1200}
            >
              <div>
                <picture>
                  <source srcSet="hi.webp" type="image/webp" />
                  <img src="hi.png" alt="" />
                </picture>
                <h1>UAE Health Insurance</h1>
                <p>
                  Health insurance is a mandatory requirement for any individual
                  residing or visiting UAE.
                </p>
              </div>
            </AnimationOnScroll>
          </div>

          <div className=" telts ">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__slideInRight"
              delay={600}
            >
              <div>
                <picture>
                  <source srcSet="tasheel.webp" type="image/webp" />
                  <img src="tasheel.png" alt="" />
                </picture>
                <h1>Tasheel Services</h1>
                <p>
                  Tasheel services are created by the Dubai government completed
                  in less time and at an affordable budget.
                </p>
              </div>
            </AnimationOnScroll>
          </div>

          <div className=" telts ">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__slideInRight"
              delay={600}
            >
              <div>
                <picture>
                  <source srcSet="bs.webp" type="image/webp" />
                  <img src="bs.png" alt="" />
                </picture>
                <h1>Business Setup</h1>
                <p>
                  Business setup in UAE is the current favorite trend among the
                  majority of expats coming to Dubai.
                </p>
              </div>
            </AnimationOnScroll>
          </div>
          <div className=" telts ">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__slideInRight"
              delay={1200}
            >
              <div>
                <picture>
                  <source srcSet="id.webp" type="image/webp" />
                  <img src="id.png" alt="" />
                </picture>
                <h1>UAE ID Services</h1>
                <p>
                  An Emirates ID is the identification card that is provided for
                  a resident individual or citizen of the United Arab Emirates
                </p>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
      <hr style={{ width: "80%" }} />
      <Prefooter />
      <Footer />
    </>
  );
}
