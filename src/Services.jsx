import "./styles/services.css";
import { useEffect, lazy } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
const Clients = lazy(() => import("./components/clients"));

export default function Services({ scrollToHash }) {
  useEffect(() => scrollToHash(), []);
  return (
    <>
      <div className=" servcont">
        <AnimationOnScroll animateOnce={true} animateIn="animate__backInDown">
          <h1> How Can We Help You?</h1>
        </AnimationOnScroll>

        <div className=" serv">
          <div className=" telts">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__slideInRight"
            >
              <div>
                <picture>
                  <source srcSet="5tama.webp" type="image/webp" />
                  <img src="5tama.png" loading="lazy" alt="" />
                </picture>
                <h1>DED Services</h1>
                <p>
                  DED, the acronym for the Department of Economic Development,
                  Dubai.
                </p>
              </div>
            </AnimationOnScroll>
          </div>
          <div className=" telts">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__slideInRight"
            >
              <div>
                <picture>
                  <source srcSet="visa.webp" type="image/webp" />
                  <img src="visa.png" loading="lazy" alt="" />
                </picture>
                <h1>Visa Services In UAE</h1>
                <p>
                  Visiting, residing, or transiting to the UAE? Visa services
                  will be your main requirement.
                </p>
              </div>
            </AnimationOnScroll>
          </div>
          <div className=" telts">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__slideInRight"
              delay={1200}
            >
              <div>
                <picture>
                  <source srcSet="hi.webp" type="image/webp" />
                  <img src="hi.png" loading="lazy" alt="" />
                </picture>
                <h1>UAE Health Insurance</h1>
                <p>
                  Health insurance is a mandatory requirement for any individual
                  residing or visiting UAE.
                </p>
              </div>
            </AnimationOnScroll>
          </div>

          <div className=" telts">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__slideInRight"
              delay={600}
            >
              <div>
                <picture>
                  <source srcSet="tasheel.webp" type="image/webp" />
                  <img src="tasheel.png" loading="lazy" alt="" />
                </picture>
                <h1>Tasheel Services</h1>
                <p>
                  Tasheel services are created by the Dubai government completed
                  in less time and at an affordable budget.
                </p>
              </div>
            </AnimationOnScroll>
          </div>

          <div className=" telts">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__slideInRight"
              delay={600}
            >
              <div>
                <picture>
                  <source srcSet="bs.webp" type="image/webp" />
                  <img src="bs.png" loading="lazy" alt="" />
                </picture>
                <h1>Business Setup</h1>
                <p>
                  Business setup in UAE is the current favorite trend among the
                  majority of expats coming to Dubai.
                </p>
              </div>
            </AnimationOnScroll>
          </div>
          <div className=" telts">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__slideInRight"
              delay={1200}
            >
              <div>
                <picture>
                  <source srcSet="id.webp" type="image/webp" />
                  <img src="id.png" loading="lazy" alt="" />
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
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
          <Clients />
        </AnimationOnScroll>
      </div>
      <hr style={{ width: "80%" }} />
    </>
  );
}
