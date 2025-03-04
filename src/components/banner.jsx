import Slider from "react-slick";
import "./banner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Banner() {
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-prev-arrow" onClick={onClick}>
        &#10094;
      </div>
    );
  };
  const NextArrow = (props) => {
    const { onClick } = props;
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
      fallback: "/1.jpg",
    },
    {
      img: "/2.webp",
      fallback: "/2.jpg",
    },
    {
      img: "/3.webp",
      fallback: "/3.jpg",
    },
  ];

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={`SlideImg ${index + 1}`}>
            <picture>
              <source srcSet={slide.img} type="image/webp" />
              <img
                className="slide-image"
                src={slide.fallback}
                alt={`Slide ${index + 1}`}
                loading="lazy"
              />
            </picture>
          </div>
        ))}
      </Slider>
    </div>
  );
}