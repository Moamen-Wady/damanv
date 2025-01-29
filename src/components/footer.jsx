import "./footer.css";
import "../styles/contact.css";
import { Link } from "react-router-dom";

export default function Footer({ menuh }) {
  return (
    <footer className="ff">
      <div className="map">
        <div className="xfc">
          <div className="container">
            <div className="form">
              <picture>
                <source srcSet="logo.webp" type="image/webp" />
                <img src="/logo.png" loading="lazy" alt="" />
              </picture>
              <p>Required Informations</p>
              <form action="submit.php" method="post" id="form">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name / الاسم"
                />

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail / الايميل"
                />

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your Phone Number / رقم التليفون"
                />

                <input
                  type="text"
                  id="activity"
                  name="activity"
                  placeholder="Activity / نوع النشاط"
                />

                <input
                  type="number"
                  id="residence"
                  name="residence"
                  placeholder="No. of Residences or Investors / عدد الاقامات او المستثمرين"
                />

                <textarea
                  id="notes"
                  name="notes"
                  placeholder="Notes / ملاحظات"
                ></textarea>

                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1242.2687233704498!2d55.30163847722248!3d25.15577871046888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69b334b7d3bb%3A0x4cc18e99b55206b1!2sDND%20Events%20L.L.C-FZ!5e0!3m2!1sar!2seg!4v1679330132381!5m2!1sar!2seg"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="location"
        ></iframe>
      </div>

      <div className="xcon">
        <div className="portion">
          <div className="lgsf">
            <picture>
              <source srcSet="logo.webp" type="image/webp" />
              <img className="imx" src="logo.png" loading="lazy" alt="" />
            </picture>
            <a
              href="https://www.facebook.com/damansolution?mibextid=LQQJ4d"
              target="_blank"
              rel="noreferrer"
            >
              <picture>
                <source srcSet="fb.webp" type="image/webp" />
                <img src="fb.png" loading="lazy" alt="" />
              </picture>
            </a>
            <a
              href="https://instagram.com/damansolutions?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noreferrer"
            >
              <picture>
                <source srcSet="ig.webp" type="image/webp" />
                <img src="ig.png" loading="lazy" alt="" />
              </picture>
            </a>
            <a
              href="https://www.linkedin.com/in/daman-solutions-b72154267"
              target="_blank"
              rel="noreferrer"
            >
              <picture>
                <source srcSet="li.webp" type="image/webp" />
                <img src="li.png" loading="lazy" alt="" />
              </picture>
            </a>
            <a
              href="https://twitter.com/damansolutions?s=11"
              target="_blank"
              rel="noreferrer"
            >
              <picture>
                <source srcSet="tw.webp" type="image/webp" />
                <img src="tw.png" loading="lazy" alt="" />
              </picture>
            </a>
          </div>

          <ul className="ful">
            <li className="xl">
              <Link onClick={menuh} to="/#mm" className="fll">
                <p>Home</p>
              </Link>
            </li>
            <li className="xl">
              <Link onClick={menuh} to="/Services#mm" className="fll">
                <p>Services</p>
              </Link>
            </li>
            <li className="xl">
              <Link onClick={menuh} to="/Aboutus#mm" className="fll">
                <p>About Us</p>
              </Link>
            </li>
            <li className="xl">
              <Link onClick={menuh} to="/Contactus#mm" className="fll">
                <p>Contact Us Now !</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="portion">
          <div className="contact">
            <h1>Daman Solutions</h1>
            <p>
              We offer explicit services to establish and run your business in
              the United Arab Emirates with ease. Our vast experience in company
              formation for several business verticals…
            </p>
            <p>
              <picture>
                <source srcSet="location.webp" type="image/webp" />
                <img src="location.png" loading="lazy" alt="location" />
                Business Center 1, M Floor , The Meydan Hotel, Nad Al Sheba,
                Dubai , U.A.E.
              </picture>
            </p>
            <p>
              <picture>
                <source srcSet="phone.webp" type="image/webp" />
                <img src="phone.png" loading="lazy" alt="phone" />
                <a href="tel:0547807870">0547807870</a>
              </picture>
            </p>
            <p>
              <picture>
                <source srcSet="mail.webp" type="image/webp" />
                <img src="mail.png" loading="lazy" alt="mail" />
                <a href="mailto:Info@damansolutions.com">
                  Info@damansolutions.com
                </a>
              </picture>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
