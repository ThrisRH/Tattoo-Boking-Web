import React from "react";
import featured1 from "../../image/featured1.png";
import featured2 from "../../image/featured2.png";
import featured3 from "../../image/featured3.png";
import featured4 from "../../image/featured4.png";
import featured5 from "../../image/featured5.png";
import featured6 from "../../image/featured6.png";
import ButtonLine from "../../Items/ButtonLine";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const featured = () => {
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
    <div className="flex flex-col container gap-8 w-full items-center">
      <div className="title">
        <h1 className="font-bold md:text-[32px] sm:text-[24px] text-xl">
          Sản phẩm tiêu biểu
        </h1>
      </div>

      {/* Màn hình trên sm thì dùng khối này */}
      <div className="content w-full hidden sm:flex flex-col gap-8 items-center">
        <div className="picturesCol1 flex flex-row gap-8 w-full justify-center">
          <img
            src={featured1}
            alt="f3"
            className="w-[150px] h-[250px] lg:w-[250px] lg:h-[350px] hidden sm:block"
          />
          <img
            src={featured2}
            alt="f3"
            className="w-[150px] h-[250px] lg:w-[250px] lg:h-[350px] hidden sm:block"
          />
          <img
            src={featured3}
            alt="f3"
            className="w-[150px] h-[250px] lg:w-[250px] lg:h-[350px] hidden sm:block"
          />
        </div>

        <div className="picturesCol2 hidden flex-row gap-8 w-full justify-center sm:flex">
          <img
            src={featured4}
            alt="f3"
            className="w-[150px] h-[250px] lg:w-[250px] lg:h-[350px] hidden sm:block"
          />
          <img
            src={featured5}
            alt="f3"
            className="w-[150px] h-[250px] lg:w-[250px] lg:h-[350px] hidden sm:block"
          />
          <img
            src={featured6}
            alt="f3"
            className="w-[150px] h-[250px] lg:w-[250px] lg:h-[350px] hidden sm:block"
          />
        </div>
      </div>
      {/* Nếu màn hình dưới sm thì dùng khối này */}
      <div className="block sm:hidden w-36 slider-container gap-8 ">
        <Slider {...settings}>
          <div>
            <img src={featured1} alt="feed1" className="w-full" />
          </div>
          <div>
            <img src={featured2} alt="feed2" className="w-full" />
          </div>
          <div>
            <img src={featured3} alt="feed3" className="w-full" />
          </div>
          <div>
            <img src={featured4} alt="feed4" className="w-full" />
          </div>
          <div>
            <img src={featured5} alt="feed5" className="w-full" />
          </div>
          <div>
            <img src={featured6} alt="feed6" className="w-full" />
          </div>
        </Slider>
      </div>
      <ButtonLine name="Xem thêm" icon={"yes"} color={"#FEAE3F"} />
    </div>
  );
};

export default featured;
