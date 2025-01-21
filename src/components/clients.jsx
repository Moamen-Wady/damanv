import React from "react";
import "./clients.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Clients() {
  const trig = () => {
    window.scrollBy(0, 1);
  };
  const trigm = () => {
    window.scrollBy(0, -1);
  };
  return (
    <div>
      <div className=" clientscont ">
        <h1>Check Out Our Partners</h1>

        <div className=" clients ">
          <div className="ccard">
            <picture>
              <source srcSet="c1.webp" type="image/webp" />
              <img src="c1.png" alt="" />
            </picture>
          </div>
          <div className="ccard">
            <picture>
              <source srcSet="c2.webp" type="image/webp" />
              <img src="c2.png" alt="" />
            </picture>
          </div>
          <div className="ccard">
            <picture>
              <source srcSet="c3.webp" type="image/webp" />
              <img src="c3.png" alt="" />
            </picture>
          </div>
          <div className="ccard">
            <picture>
              <source srcSet="c4.webp" type="image/webp" />
              <img src="c4.png" alt="" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}
