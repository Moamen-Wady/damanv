import { useEffect } from "react";
import "./styles/contact.css";
export default function Contactus({ scrollToHash, sForm, dissub }) {
  useEffect(() => scrollToHash(), []);

  return (
    <>
      <div id="container">
        <div className="form" id="form" method="post">
          <picture>
            <source srcSet="logo.webp" type="image/webp" />
            <img src="logo.png" alt="" loading="lazy" />
          </picture>
          <p>Required Informations</p>
          <form
            action="submit.php"
            method="post"
            id="contactForm"
            onSubmit={sForm}
          >
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

            <input
              type="submit"
              value="Submit"
              disabled={dissub[0]}
              style={{
                backgroundColor: dissub[2],
                pointerEvents: dissub[1],
                color: dissub[3],
              }}
            />
          </form>
        </div>
      </div>
    </>
  );
}
