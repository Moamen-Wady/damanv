import "./styles/servicesa.css";
import { useEffect, memo } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Clientsa from "./components/clientsa";
const ClientsaC = memo(Clientsa);

export default function Servicesa({ scrollToHash }) {
  useEffect(() => scrollToHash(), []);
  return (
    <>
      <div className="aservcont">
        <AnimationOnScroll animateOnce={true} animateIn="animate__backInDown">
          <h1> كيف يمكننا مساعدتك؟</h1>
        </AnimationOnScroll>

        <div className=" aserv">
          <div className=" atelts">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__slideInRight"
            >
              <div>
                <picture>
                  <source srcSet="5tama.webp" type="image/webp" />
                  <img src="5tama.png" loading="lazy" alt="" />
                </picture>
                <h1>خدمات د.أ.أ </h1>
                <p>د.أ.أ اختصار دائرة التنمية الاقتصادية ، دبي.</p>
              </div>
            </AnimationOnScroll>
          </div>
          <div className=" atelts">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__slideInRight"
            >
              <div>
                <picture>
                  <source srcSet="visa.webp" type="image/webp" />
                  <img src="visa.png" loading="lazy" alt="" />
                </picture>
                <h1>خدمات الفيزا في الامارات </h1>
                <p>
                  زيارة دولة الإمارات أو إقامتها أو عبورها؟ ستكون خدمات
                  التأشيرات هي مطلبك الرئيسي.
                </p>
              </div>
            </AnimationOnScroll>
          </div>
          <div className=" atelts">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__slideInRight"
              delay={1200}
            >
              <div>
                <picture>
                  <source srcSet="hi.webp" type="image/webp" />
                  <img src="hi.png" loading="lazy" alt="" />
                </picture>
                <h1>التأمين الصحي في الامارات</h1>
                <p>
                  يعتبر التأمين الصحي مطلبًا إلزاميًا لأي فرد يقيم أو يزور
                  الإمارات العربية المتحدة.
                </p>
              </div>
            </AnimationOnScroll>
          </div>

          <div className=" atelts">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__slideInRight"
              delay={600}
            >
              <div>
                <picture>
                  <source srcSet="tasheel.webp" type="image/webp" />
                  <img src="tasheel.png" loading="lazy" alt="" />
                </picture>
                <h1>خدمات تسهيل</h1>
                <p>
                  يتم إنشاء خدمات تسهيل من قبل حكومة دبي اكتمل في وقت أقل
                  وبميزانية معقولة.
                </p>
              </div>
            </AnimationOnScroll>
          </div>

          <div className=" atelts">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__slideInRight"
              delay={600}
            >
              <div>
                <picture>
                  <source srcSet="bs.webp" type="image/webp" />
                  <img src="bs.png" loading="lazy" alt="" />
                </picture>
                <h1>إعداد الأعمال</h1>
                <p>
                  يعد تأسيس الأعمال في الإمارات العربية المتحدة هو الاتجاه
                  المفضل حاليًا بين غالبية الوافدين القادمين إلى دبي.
                </p>
              </div>
            </AnimationOnScroll>
          </div>
          <div className=" atelts">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__slideInRight"
              delay={1200}
            >
              <div>
                <picture>
                  <source srcSet="id.webp" type="image/webp" />
                  <img src="id.png" loading="lazy" alt="" />
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
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
          <ClientsaC />
        </AnimationOnScroll>
      </div>
      <hr style={{ width: "80%" }} />
    </>
  );
}
