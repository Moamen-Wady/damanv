import { useEffect } from "react";
import "./styles/abouta.css";
import Clientsa from "./components/clientsa";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Aboutusa({ scrollToHash }) {

  useEffect(() => scrollToHash(), []);
  return (
    <>
      <div className="aaboutcont">
        <div className="afirst ax8">
          <AnimationOnScroll
            animateOnce={true}
            animateIn="animate__fadeIn"
            duration={1.5}
          >
            <h1>عن ضمان</h1>
            <p>
              <b> السعادة .. </b> عندما أطلق صاحب السمو الشيخ محمد بن راشد آل
              مكتوم نائب رئيس الدولة ، رئيس الوزراء وحاكم دبي أجندة السعادة ، قد
              عرفنا بكل تأكيد أننا سنكون جزءًا لا يتجزأ من هذه الخطوة التي من
              المتوقع أن ينتج عنها العديد من التغييرات وتؤدي إلى تعزيز العديد من
              القطاعات. لأن هذه الأجندة تهدف إلى تحقيق إسعاد الناس ، فإنها
              بدورها ستشجع الإبداع وتقلل الكثير من الأعباء التي تعيق التقدم
              والتنمية ليس فقط على المستوى الفردي والاجتماعي ، بل الأمة ككل.
            </p>
          </AnimationOnScroll>
        </div>

        <div className="asnd">
          <ul>
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__fadeInRight"
              delay={300}
            >
              <li>توفير الأسس للشركات والمشاريع الكبرى.</li>
            </AnimationOnScroll>

            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__fadeInRight"
              delay={400}
            >
              <li>وضع خطط إستراتيجية طويلة المدى.</li>
            </AnimationOnScroll>

            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__fadeInRight"
              delay={500}
            >
              <li>
                تحديد نهج ونظام متكامل من قبل خبرائنا لضمان القدرة على المنافسة.
              </li>
            </AnimationOnScroll>

            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__fadeInRight"
              delay={600}
            >
              <li>
                إجراء جميع التعاملات الحكومية والتعامل مع الأوراق اللازمة.
              </li>
            </AnimationOnScroll>
          </ul>
          <picture>
            <source srcSet="about-us.webp" type="image/webp" />
            <img src="about-us.jpg" alt="" loading="lazy" />
          </picture>
        </div>

        <div className="afirst">
          <p>
            لذلك ، ضمان لدينا هنا للمساهمة في ذلك عن طريق التعريف بمجموعة متنوعة
            من الخدمات والحلول المبتكرة التي تجعل الحياة أسهل و خلق بيئة مواتية
            لنجاح وتطوير كلا الشركات الكبيرة والناشئة. تمتد هذه الخدمات أيضًا
            إلى الأفراد وتمهيد الطريق لهم لرفع طاقاتهم الإنتاجية والتغلب على
            العوائق المتعلقة بتصاريح الإقامة وبطاقات الهوية وما إلى ذلك. على هذا
            الحساب، نحن فخورون بأن نلعب دورًا في نشر السعادة من خلال فرق متفانية
            تعمل بلا كلل لخدمتك أينما كنت.
          </p>
          <hr style={{ width: "80%" }} />
        </div>

        <div className="athrd">
          <AnimationOnScroll
            animateOnce={true}
            animateIn="animate__fadeInDown"
            delay={300}
          >
            <h1>مبادؤنا الاساسية</h1>
            <div className="asubthrd">
              <div>
                <p>&#9733; ملتزمون بتحقيق افضل النتائج</p>
                <p>&#9733; نهتم بمشروعك كما لو كان ملكنا</p>
              </div>
            </div>
            <div className="asubthrd">
              <div>
                <p>&#9733; خدمات شفافة وصادقة </p>
                <p>&#9733; الاستمرار في التعلم والتكيف مع التقنيات الجديدة </p>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
          <Clientsa />
        </AnimationOnScroll>
      </div>
    </>
  );
}
