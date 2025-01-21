import React from "react";
import "./navbara.css";
import { Link } from "react-router-dom";

export default function Ula() {
  return (
    <ul className="aul1 ">
      <li className="al limg">
        
        <picture>
          <source srcSet="logo.webp" type="image/webp" />
          <img className="aimg1 " src="logo.png" alt="" />
        </picture>
      </li>
      <li className="al ">
        <Link to="/ar#mm" className="all ">
          <p>الصفحة الرئيسية</p>
        </Link>
      </li>
      <li className="al ">
        <Link to="/arServices#mm" className="all ">
          <p>الخدمات</p>
        </Link>
      </li>
      <li className="al ">
        <Link to="/arAboutus#mm" className="all ">
          <p>اعرف عنا</p>
        </Link>
      </li>
      <li className="ar ">
        <Link to="/arContactus#container" className="all " id="rdr">
          <p>تواصل معنا</p>
        </Link>
      </li>
    </ul>
  );
}
