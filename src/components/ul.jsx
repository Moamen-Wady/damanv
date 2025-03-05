import { memo } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
export default memo(function Ul({ menuh, menuv }) {
  return (
    <>
      <ul className="dsk ul1">
        <picture>
          <source srcSet="logo.webp" type="image/webp" />
          <img className="dsk img1" src="logo.png" alt="" loading="lazy" />
        </picture>
        <li className="dsk l">
          <Link to="/#mm" className="dsk ll">
            <p>Home</p>
          </Link>
        </li>
        <li className="dsk l">
          <Link to="/Services#mm" className="dsk ll">
            <p>Services</p>
          </Link>
        </li>
        <li className="dsk l">
          <Link to="/Aboutus#mm" className="dsk ll">
            <p>About Us</p>
          </Link>
        </li>
        <li className="dsk r">
          <Link to="/Contactus#container" className="dsk ll">
            <p>Contact Us Now !</p>
          </Link>
        </li>
      </ul>
      <div id="mob">
        <div>
          <picture>
            <source srcSet="mbar.webp" type="image/webp" />
            <img src="mbar.png" alt="" id="hide" onClick={menuh} />
          </picture>
          <picture>
            <source srcSet="mbar.webp" type="image/webp" />
            <img src="mbar.png" alt="" id="view" onClick={menuv} />
          </picture>
          <picture>
            <source srcSet="logo.webp" type="image/webp" />
            <img className="mob img1" src="logo.png" alt="" loading="lazy" />
          </picture>
          <ul className="mob ul1" id="mobul">
            <li className="mob l">
              <Link  to="/#mm" className="mob ll">
                <p>Home</p>
              </Link>
            </li>
            <li className="mob l">
              <Link  to="/Services#mm" className="mob ll">
                <p>Services</p>
              </Link>
            </li>
            <li className="mob l">
              <Link  to="/Aboutus#mm" className="mob ll">
                <p>About Us</p>
              </Link>
            </li>
            <li className="mob l">
              <Link
                
                to="/Contactus#container"
                className="mob ll"
              >
                <p>Contact Us</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
)