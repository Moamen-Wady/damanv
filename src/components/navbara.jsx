import { memo } from "react";
import "./navbara.css";

export default memo(function Navbara({ setterLang }) {
  return (
    <div className="anvbr" id="mm">
      <div className="atopbar">
        <div>
          <p>تطمح إلى شركة ناشئة عظيمة ..؟ مرحبًا بك في المكان المناسب</p>
          <div className="algs">
            <div className="alang">
              <span>
                <picture>
                  <source srcSet="/uae.webp" type="image/webp" />
                  <img src="/uae.png" alt="" loading="lazy" />
                </picture>
              </span>
              <div className="alangc">
                <button onClick={() => setterLang("en")} className="alanlink">
                  English
                </button>
                <button onClick={() => setterLang("ar")} className="alanlink">
                  العربية
                </button>
              </div>
            </div>
            <a
              href="https://www.facebook.com/damansolution?mibextid=LQQJ4d"
              target="_blank"
              rel="noreferrer"
            >
              <picture>
                <source srcSet="/fb.webp" type="image/webp" />
                <img src="/fb.png" alt="" loading="lazy" />
              </picture>
            </a>
            <a
              href="https://instagram.com/damansolutions?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noreferrer"
            >
              <picture>
                <source srcSet="/ig.webp" type="image/webp" />
                <img src="/ig.png" alt="" loading="lazy" />
              </picture>
            </a>
            <a
              href="https://www.linkedin.com/in/daman-solutions-b72154267"
              target="_blank"
              rel="noreferrer"
            >
              <picture>
                <source srcSet="/li.webp" type="image/webp" />
                <img src="/li.png" alt="" loading="lazy" />
              </picture>
            </a>
            <a
              href="https://twitter.com/damansolutions?s=11"
              target="_blank"
              rel="noreferrer"
            >
              <picture>
                <source srcSet="/tw.webp" type="image/webp" />
                <img src="/tw.png" alt="" loading="lazy" />
              </picture>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});
