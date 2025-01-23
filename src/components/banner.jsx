import Slider from "react-slick";
import "./banner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Banner() {
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className="custom-prev-arrow" onClick={onClick}>
        &#10094;
      </div>
    );
  };
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className="custom-next-arrow" onClick={onClick}>
        &#10095;
      </div>
    );
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: false,
  };
  const slides = [
    {
      img: "/1.webp",
    },
    {
      img: "/2.webp",
    },
    {
      img: "/3.webp",
    }
  ];

  return (
    <div className="slideshow-container">
      {/* <p className="onslider">
        We are now the Authorized Distributor of Lectrobar in Egypt
      </p>
      <img src="/btw.png" className="shade" /> */}
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={`SlideImg ${index + 1}`}>
            <img
              className="slide-image"
              src={slide.img}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
