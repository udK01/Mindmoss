import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  { src: "./GameImages/game1.png", alt: "Game 1" },
  { src: "./GameImages/game2.png", alt: "Game 2" },
  { src: "./GameImages/game3.png", alt: "Game 3" },
  { src: "./GameImages/game4.png", alt: "Game 4" },
  { src: "./GameImages/game5.png", alt: "Game 5" },
  { src: "./GameImages/game6.png", alt: "Game 6" },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <div className="">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="w-[400px] h-[300px] relative hover:scale-110 hover:cursor-pointer transition-all duration-300"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
