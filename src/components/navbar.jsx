import "./navbar.css";

export default function Navbar({ setLang }) {
  return (
    <div className="nvbr" id="mm">
      <div className="topbar">
        <div>
          <p>Aspiring To A Great Startup..? WELCOME TO THE RIGHT PLACE!</p>
          <div className="lgs">
            <div className="lang">
              <span>
                <picture>
                  <source srcSet="uk.webp" type="image/webp" />
                  <img src="uk.png" alt="" />
                </picture>
              </span>
              <div className="langc">
                <button onClick={() => setLang("en")} className="lanlink">
                  English
                </button>
                <button onClick={() => setLang("ar")} className="lanlink">
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
