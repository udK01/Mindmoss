import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";

import { useLibrary } from "../context/LibraryProvider";

const Carousel = () => {
  const { libraryCardInfo } = useLibrary();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ maxWidth: "100%", margin: "0 auto" }}>
      <Slider {...settings}>
        {libraryCardInfo.map((game, index) => (
          <Link key={index} to={`/library/game/${game.gameId}`}>
            <img
              src={game.image}
              alt={game.title}
              className="hover:cursor-pointer hover:scale-105 transition-all duration-300"
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
