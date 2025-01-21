import "./styles/servicesa.css";
import React, { useEffect } from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Clientsa from "./components/clientsa";
import Navbara from "./components/navbara";
import Footera from "./components/footera";
import Prefootera from "./components/prefootera";
import Bannera from "./components/bannera";
import Ula from "./components/ula";

export default function Servicesa() {
  function scrollToHash() {
    const id = window.location.hash.substr(1);

    if (id) {
      const anchor = document.getElementById(id);

      if (anchor) {
        anchor.scrollIntoView();
      }
    }
  }

  useEffect(() => scrollToHash(), []);
  return (
    <>
      <Navbara />
      <Ula />
      <Bannera />

      <div className="aservcont ">
        <AnimationOnScroll animateOnce={true} animateIn="animate__backInDown">
          <h1> كيف يمكننا مساعدتك؟</h1>
        </AnimationOnScroll>

        <div className=" aserv ">
          <div className=" atelts ">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__slideInRight"
            >
              <div>
                <picture>
                  <source srcSet="5tama.webp" type="image/webp" />
                  <img src="5tama.png" alt="" />
                </picture>
                <h1>خدمات د.أ.أ </h1>
                <p>د.أ.أ اختصار دائرة التنمية الاقتصادية ، دبي.</p>
              </div>
            </AnimationOnScroll>
          </div>
          <div className=" atelts ">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__slideInRight"
            >
              <div>
                <picture>
                  <source srcSet="visa.webp" type="image/webp" />
                  <img src="visa.png" alt="" />
                </picture>
                <h1>خدمات الفيزا في الامارات </h1>
                <p>
                  زيارة دولة الإمارات أو إقامتها أو عبورها؟ ستكون خدمات
                  التأشيرات هي مطلبك الرئيسي.
                </p>
              </div>
            </AnimationOnScroll>
          </div>
          <div className=" atelts ">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__slideInRight"
              delay={1200}
            >
              <div>
                <picture>
                  <source srcSet="hi.webp" type="image/webp" />
                  <img src="hi.png" alt="" />
                </picture>
                <h1>التأمين الصحي في الامارات</h1>
                <p>
                  يعتبر التأمين الصحي مطلبًا إلزاميًا لأي فرد يقيم أو يزور
                  الإمارات العربية المتحدة.
                </p>
              </div>
            </AnimationOnScroll>
          </div>

          <div className=" atelts ">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__slideInRight"
              delay={600}
            >
              <div>
                <picture>
                  <source srcSet="tasheel.webp" type="image/webp" />
                  <img src="tasheel.png" alt="" />
                </picture>
                <h1>خدمات تسهيل</h1>
                <p>
                  يتم إنشاء خدمات تسهيل من قبل حكومة دبي اكتمل في وقت أقل
                  وبميزانية معقولة.
                </p>
              </div>
            </AnimationOnScroll>
          </div>

          <div className=" atelts ">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__slideInRight"
              delay={600}
            >
              <div>
                <picture>
                  <source srcSet="bs.webp" type="image/webp" />
                  <img src="bs.png" alt="" />
                </picture>
                <h1>إعداد الأعمال</h1>
                <p>
                  يعد تأسيس الأعمال في الإمارات العربية المتحدة هو الاتجاه
                  المفضل حاليًا بين غالبية الوافدين القادمين إلى دبي.
                </p>
              </div>
            </AnimationOnScroll>
          </div>
          <div className=" atelts ">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__slideInRight"
              delay={1200}
            >
              <div>
                <picture>
                  <source srcSet="id.webp" type="image/webp" />
                  <img src="id.png" alt="" />
                </picture>
                <h1>خدمات الهوية الإماراتية</h1>
                <p>
                  الهوية الإماراتية هي بطاقة الهوية التي يتم توفيرها لفرد مقيم
                  أو مواطن في دولة الإمارات العربية المتحدة
                </p>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
      <hr style={{ width: "80%" }} />
      <Prefootera />
      <Footera />
    </>
  );
}
