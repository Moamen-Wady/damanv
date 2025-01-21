import React from "react";
import { Link } from "react-router-dom";
import "./navbara.css";

export default function Navbara() {
  var p = window.location.pathname;
  var s = p + " ";
  var x = p.slice(0, 1);
  var en = s.slice(3, -1);
  var xx = s.slice(1, -1);

  return (
    <div className="anvbr " id="mm">
      <div className="atopbar ">
        <div>
          <p>تطمح إلى شركة ناشئة عظيمة ..؟ مرحبًا بك في المكان المناسب</p>
          <div className="algs ">
            <div className="alang">
              <span>
                
                <picture>
                  <source srcSet="uae.webp" type="image/webp" />
                  <img src="uae.png" alt="" />
                </picture>
              </span>
              <div className="alangc">
                <Link to={"/" + en} className="alanlink">
                  English
                </Link>
                <Link to={p} className="alanlink">
                  العربية
                </Link>
              </div>
            </div>
            <a
              href="https://www.facebook.com/damansolution?mibextid=LQQJ4d"
              target="_blank"
              rel="noreferrer"
            >
              
              <picture>
                <source srcSet="fb.webp" type="image/webp" />
                <img src="fb.png" alt="" />
              </picture>
            </a>
            <a
              href="https://instagram.com/damansolutions?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noreferrer"
            >
              
              <picture>
                <source srcSet="ig.webp" type="image/webp" />
                <img src="ig.png" alt="" />
              </picture>
            </a>
            <a
              href="https://www.linkedin.com/in/daman-solutions-b72154267"
              target="_blank"
              rel="noreferrer"
            >
              
              <picture>
                <source srcSet="li.webp" type="image/webp" />
                <img src="li.png" alt="" />
              </picture>
            </a>
            <a
              href="https://twitter.com/damansolutions?s=11"
              target="_blank"
              rel="noreferrer"
            >
              
              <picture>
                <source srcSet="tw.webp" type="image/webp" />
                <img src="tw.png" alt="" />
              </picture>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
