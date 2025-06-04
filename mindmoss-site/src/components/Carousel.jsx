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
  };

  return (
    <div className="">
      <Slider {...settings}>
        {libraryCardInfo.map((game, index) => (
          <Link
            key={index}
            className="w-[400px] h-[300px] relative hover:scale-110 hover:cursor-pointer transition-all duration-300"
            to={`/library/game/${game.gameId}`}
          >
            <img
              src={game.image}
              alt={game.title}
              className="object-cover shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
