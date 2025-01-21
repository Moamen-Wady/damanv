import React, { useEffect } from "react";
import "./styles/homea.css";
import "./styles/contact.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Clientsa from "./components/clientsa";
import Navbara from "./components/navbara";
import Footera from "./components/footera";
import Prefootera from "./components/prefootera";
import Bannera from "./components/bannera";
import Ula from "./components/ula";

export default function Homea() {
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
      <div className="a">
        <div className="awhyuscont ">
          <AnimationOnScroll animateOnce={true} animateIn="animate__backInDown">
            <h1> وظفنا من اجل</h1>
          </AnimationOnScroll>
          <div className="awhyus ">
            <div className="atelt ">
              <AnimationOnScroll
                animateOnce={true}
                animateIn="animate__slideInRight"
              >
                <h1>التصاريح الأمنية</h1>
                <picture>
                  <source srcSet="security1.webp" type="image/webp" />
                  <img src="security1.png" alt="Security clearances" />
                </picture>
                <p>
                  مع فريقنا المؤهل نساعدك في جميع المعاملات لاستخراج التصاريح
                  الأمنية.
                </p>
              </AnimationOnScroll>
            </div>

            <div className="atelt ">
              <AnimationOnScroll
                animateOnce={true}
                animateIn="animate__slideInRight"
                delay={600}
              >
                <h1>إنشاء مرفق</h1>
                <picture>
                  <source srcSet="facility.webp" type="image/webp" />
                  <img src="facility.jpg" alt="Facility establishing" />
                </picture>
                <p>
                  ضمن هذه الخطوة ، يجب توقيع المستندات المطلوبة لإتمام المعاملة
                  للبلد.
                </p>
              </AnimationOnScroll>
            </div>

            <div className="atelt ">
              <AnimationOnScroll
                animateOnce={true}
                animateIn="animate__slideInRight"
                delay={1200}
              >
                <h1>الاقامة</h1>
                <picture>
                  <source srcSet="residence1.webp" type="image/webp" />
                  <img src="residence1.png" alt="residence visa extracting" />
                </picture>
                <p>
                  بمساعدة فريقنا ، نقوم بتسريع عملية استخراج الإقامة والتأشيرات
                  المطلوبة.
                </p>
              </AnimationOnScroll>
            </div>
          </div>
          <hr style={{ width: "80%" }} />
        </div>
        <div className=" avismis ">
          <div className="anos1">
            <h1>عن ضمان</h1>
            <p>خدمات إعداد الحكومة والأعمال في دبي</p>
            <p>
              الإمارات العربية المتحدة هي بديل استثماري رائع طويل الأجل ،
              وإطارها القانوني المعفي من الضرائب يجعلها ملجأ آمن لكل من الأعمال
              الخارجية والداخلية. استفد من قواعد الشركة الجديدة لحكومة الإمارات
              العربية المتحدة ، التي توفر إجراءات تنظيمية مرنة ، وجداول زمنية
              قصيرة ، وعمليات الموافقة البسيطة. ضمان هو مركز معتمد من الحكومة
              وأحد مزودي الخدمات الحكومية الرائدين في دبي. خدمات ضمان في دبي على
              دراية جيدة بالوظائف وخروجات تشريعات دولة الإمارات العربية المتحدة
              بشأن تأسيس الأعمال ، بعد أن دخلت في شراكة مع المسؤولين والوكالات
              الحكومية في دولة الإمارات العربية المتحدة. نحن نقدم محطة واحدة
              لخدمات إعداد الأعمال والتراخيص التجارية واحتياجات التأشيرة.
              سنساعدك في الأعمال الورقية لتشكيل الشركة لجميع الخدمات الحكومية
              تحت سقف واحد وسنجعلها سريعة
            </p>
          </div>
          <div className="nos2">
            
            <picture>
              <source srcSet="5.webp" type="image/webp" />
              <img src="5.jpg" alt="" />
            </picture>
          </div>
        </div>
        <hr style={{ width: "80%", color: "white" }} />
        <div className=" avismis ">
          <div className="anos1">
            <h1>ابدأ معنا</h1>
            <p>اعداد الأعمال الجديدة في دبي</p>
            <p>
              جاهز لبدء عملك الجديد ، إذن دبي هي الوجهة الأكثر ربحية لبدء عملك.
              في ضمان ، نحن بمثابة مزود الخدمة في دولة الإمارات العربية المتحدة.
              نذهب ما وراء خدمات إعداد الأعمال التي تقدم خدمات التدقيق ، إدارة
              تمويل الشركات ، خدمات المحاسبة المتوافقة مع ضريبة القيمة المضافة ،
              وأكثر بكثير. مع الاهتمام الكامل بالتفاصيل ، نحن نفهم أهمية كل
              مشروع تجاري والاستفادة من الفرص الهائلة.
              <br />
              امتلاك معرفة وخبرة واسعة في خدمة قطاعات الأعمال المختلفة ، يضمن
              فريقنا المجهز تجهيزًا جيدًا الكفاءة والاجتهاد لتقديم أفضل الحلول.
              علاوة على ذلك ، نقدم خدمات ودية وفعالة في إنشاء عملك في المنطقة
              الحرة ، البر الرئيسى والبحر. يساعدك فريقنا النابض بالحياة في عملية
              التوثيق ، التراخيص التجارية والموافقات على التأشيرات والإجراءات
              المصرفية ذات الصلة. نحن نأخذ حلمك ونجعله حقيقة.
            </p>
          </div>
          <div className="nos2">
            
            <picture>
              <source srcSet="6.webp" type="image/webp" />
              <img src="6.jpg" alt="" />
            </picture>
          </div>
        </div>
        <hr style={{ width: "80%", color: "white" }} />

        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
          <div className="aidea ">
            <picture>
              <source srcSet="idea.webp" type="image/webp" />
              <img src="idea.jpg" alt="Motivational Business Quote" />
            </picture>
            <p>
              <b>“</b>يستلزم الأمر فكرة وايمان والكثير من العمل الشاق , ولكن في
              النهاية تصبح الاحلام حقيقة<b>”</b>
            </p>
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
          <div className="avismis ">
            <div className="anos ">
              <picture>
                <source srcSet="light.webp" type="image/webp" />
                <img src="light.png" alt="" />
              </picture>
              <h1>رؤيتنا</h1>
              <p>
                نحن لا نسعى فقط إلى ضمان ، بل نحققه. مجتمعنا من المستثمرين وكبار
                رجال الدولة والشخصيات العامة ورجال الأعمال بحاجة إلى نظام متكامل
                وخدمة لا مثيل لها. لذلك قمنا بعمل قمتنا الخاصة من خلال الاهتمام
                بكل احتياجاتهم من أجل تمهيد الطريق نحو مستقبل أكثر ثباتًا
                وإشراقًا حيث ينتظرك نجاح اعظم. رؤيتنا لا تنطبق فقط على بلدنا
                الحبيب ، الإمارات العربية المتحدة ، بل تمتد إلى العالم العربي.
                وبالتالي ، فإننا نسعى جاهدين لتحقيق رؤيتنا العالمية لتحقيق نمو
                غير مسبوق في خدمة الأعمال وقطاعات الاستثمار.
              </p>
            </div>
            <div className="anos ">
              <picture>
                <source srcSet="target.webp" type="image/webp" />
                <img src="target.png" alt="" />
              </picture>
              <h1>مهمتنا</h1>
              <p>
                مهمة ضمان لدينا هي التفوق على الرغم من ضيق الوقت لإنجاز المهام
                الموكلة إلينا بأعلى مستويات الكفاءة مع التأكيد على الحفاظ على
                مصداقيتنا وضمان أقصى درجات الشفافية كل ذلك من أجل راحتك وتحقيق
                توقعاتك بما يحقق رضاك ​​وموافقتك. مهمتنا هي مساعدتك على تحقيق
                أحلامك على الأرض ، والارتقاء بما نضعه على الأرض لتتوجه إلى
                الغيوم ، وتحافظ على ذلك إلى الأبد. مهمتنا هي أن تغلق عينيك
                وتفتحها على الحلول المبتكرة لمشاكلك وطريق ممهد لنجاحك خالي من
                العوائق.
              </p>
            </div>
          </div>
          <hr style={{ width: "80%" }} />
        </AnimationOnScroll>
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
        <AnimationOnScroll animateOnce={true} animateIn="animate__backInRight">
          <div className="aadvcont ">
            <h1>لماذا تختارنا بالضبط؟</h1>
            <p>
              دبي لديها الكثير من الفرص التجارية. هناك العديد من الخيارات لبدء
              شركتك الخاصة في الإمارات العربية المتحدة. <br />
              يمكنك أن تفعل ذلك بنفسك؟ نعم ، لكنها تستغرق وقتًا طويلاً. هنا ،
              يوجهك مستشارو إعداد الأعمال مباشرة من فكرة الفكرة إلى الإطلاق
              النهائي. <br />
              نحن نساعدك في اختيار الاختصاص والنشاط التجاري المناسبين. علاوة على
              ذلك ، نتشاور مع الجهات المعنية والدوائر الحكومية لتسريع العملية.
              كما تعلم ، يتطلب إنشاء شركة في دبي الكثير من الأعمال الورقية.
              نتعامل مع جميع المتطلبات القانونية ونقوم بذلك بكفاءة. <br />
              توفر خدمات إعداد الأعمال لدينا وقتك وأموالك. يسترخي أصحاب الأعمال
              ويركزون على عملياتك التجارية الأساسية أثناء عملنا على إعداد
              الشركة.
            </p>

            <div className="aadv ">
              <div className="aadvgrid ">
                <div>
                  <picture>
                    <source srcSet="star.webp" type="image/webp" />
                    <img src="star.png" alt="" />
                  </picture>
                  <p>
                    الخبرة <br /> <br /> نحن الاختيار المناسب لمشروعك. لدينا
                    الخبرة والمعرفة لتقديم المشورة المحايدة والخدمات
                  </p>
                </div>
                <div>
                  
                  <picture>
                    <source srcSet="dollar.webp" type="image/webp" />
                    <img src="dollar.png" alt="" />
                  </picture>
                  <p>
                    السعر <br /> <br /> نحن نقدم خدماتنا بسعر صادق لضمان قدرتنا
                    على مساعدة أي شخص على أي مستوى من البداية إلى النهاية
                  </p>
                </div>
                <div>
                  <picture>
                    <source srcSet="ear.webp" type="image/webp" />
                    <img src="ear.png" alt="" />
                  </picture>
                  <p>
                    التواصل <br /> <br /> معنا ستسمع. نستمع إلى متطلبات عملائنا
                    ثم نختار الحل المناسب الذي يناسبك.
                  </p>
                </div>
                <div>
                  <picture>
                    <source srcSet="hand.webp" type="image/webp" />
                    <img src="hand.png" alt="" />
                  </picture>
                  <p>
                    التعاون <br /> <br /> نحن نهتم بعملك على أنه أعمالنا الخاصة.
                    نحن نهتم به بصدق ونريد حقًا مساعدة شركتك على تحقيق
                    إمكاناتها.
                  </p>
                </div>
              </div>
            </div>
            <hr style={{ width: "80%" }} />
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateOnce={true} animateIn="animate__jackInTheBox">
          <Clientsa />
        </AnimationOnScroll>
      </div>
      <Prefootera />
      <Footera />
    </>
  );
}
