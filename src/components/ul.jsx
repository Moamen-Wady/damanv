import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
export default function Ul() {
  var p = window.location.pathname;
  var s = p + " ";
  var x = p.slice(0, 1);
  var en = s.slice(3, -1);
  var xx = s.slice(1, -1);

  return (
    <>
      <ul className="ul1 ">
        <picture>
          <source srcSet="logo.webp" type="image/webp" />
          <img className="img1 " src="logo.png" alt="" />
        </picture>
        <li className="l ">
          <Link to="/#mm" className="ll ">
            <p>Home</p>
          </Link>
        </li>
        <li className="l ">
          <Link to="/Services#mm" className="ll ">
            <p>Services</p>
          </Link>
        </li>
        <li className="l ">
          <Link to="/Aboutus#mm" className="ll ">
            <p>About Us</p>
          </Link>
        </li>
        <li className="r ">
          <Link to="/Contactus#container" className="ll " id="rdr">
            <p>Contact Us Now !</p>
          </Link>
        </li>
      </ul>
    </>
  );
}
