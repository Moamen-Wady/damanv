/*#view, #hide, #mobul and .img DON'T have a in the beginning of them*/
import { memo } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
export default memo(function Ula({ menuh, menuv }) {
  return (
    <>
      <ul className="adsk aul1">
        <picture>
          <source srcSet="logo.webp" type="image/webp" />
          <img className="adsk aimg1" src="logo.png" alt="" loading="lazy" />
        </picture>
        <li className="adsk al">
          <Link to="/#mm" className="adsk all">
            <p>الصفحة الرئيسية</p>
          </Link>
        </li>
        <li className="adsk al">
          <Link to="/Services#mm" className="adsk all">
            <p>الخدمات</p>
          </Link>
        </li>
        <li className="adsk al">
          <Link to="/Aboutus#mm" className="adsk all">
            <p>اعرف عنا</p>
          </Link>
        </li>
        <li className="adsk ar">
          <Link to="/Contactus#container" className="adsk all">
            <p>تواصل معنا</p>
          </Link>
        </li>
      </ul>
      <div id="amob">
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
            <img className="amob img1" src="logo.png" alt="" loading="lazy" />
          </picture>
          <ul className="amob ul1" id="mobul">
            <li className="amob al">
              <Link onClick={menuh} to="/#mm" className="amob all">
                <p>الصفحة الرئيسية</p>
              </Link>
            </li>
            <li className="amob al">
              <Link onClick={menuh} to="/Services#mm" className="amob all">
                <p>الخدمات</p>
              </Link>
            </li>
            <li className="amob al">
              <Link onClick={menuh} to="/Aboutus#mm" className="amob all">
                <p>اعرف عنا</p>
              </Link>
            </li>
            <li className="amob al">
              <Link
                onClick={menuh}
                to="/Contactus#container"
                className="amob all"
              >
                <p>تواصل معنا</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
)