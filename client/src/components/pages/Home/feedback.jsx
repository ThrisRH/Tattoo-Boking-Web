import React from "react";
import feed1 from "../../image/feed1.png";
import feed2 from "../../image/feed2.png";
import feed3 from "../../image/feed3.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const feedback = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container flex flex-col justify-center items-center gap-8">
      <div className="title">
        <h1 className="font-bold  md:text-[32px] sm:text-[24px] text-xl">
          Feedback
        </h1>
      </div>

      {/* Nếu màn hình trên sm thì sử dụng khối này */}
      <div className="hidden sm:flex flex-col container gap-8 items-center">
        <div className="picturesCol2 flex-row gap-8 w-full justify-center flex">
          <img
            src={feed1}
            alt="feed1"
            className="w-[250px] xl:w-[350px] h-[350px] xl:h-[500px]"
          />
          <img
            src={feed2}
            alt="feed2"
            className="w-[250px] xl:w-[350px] lg:h-[350px] xl:h-[500px]"
          />
          <img
            src={feed3}
            alt="feed3"
            className="w-[250px] xl:w-[350px] lg:h-[350px] xl:h-[500px] hidden lg:block"
          />
        </div>
      </div>

      {/* Nếu màn hình dưới sm thì dùng khối này */}
      <div className="block sm:hidden w-36 slider-container gap-8 ">
        <Slider {...settings}>
          <div>
            <img src={feed1} alt="feed1" className="w-full" />
          </div>
          <div>
            <img src={feed2} alt="feed2" className="w-full" />
          </div>
          <div>
            <img src={feed3} alt="feed3" className="w-full" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default feedback;
