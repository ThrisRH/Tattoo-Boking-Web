import React from "react";

import contentbg from "../image/contentbg.png";

const ImgContainer = (props) => {
  return (
    <>
      {/* Nếu responsive từ md trở lên thì hiển thị card này */}
      <div
        className="relative left-card w-[460px] hidden sm:block sm:max-w-[280px] sm:min-h-[280px] lg:max-w-[480px] lg:min-h-[460px]"
        style={{
          backgroundImage: `url(${contentbg})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          src={props.Art1}
          alt="art1"
          className="absolute sm:max-w-[165px] sm:min-h-[165px] lg:max-w-[285px] lg:max-h-[285px]"
        />
        <img
          src={props.Art2}
          alt="art2"
          className="absolute sm:max-w-[165px] sm:min-h-[165px] lg:max-w-[285px] lg:max-h-[285px] bottom-0 right-0"
        />
      </div>

      {/* Nếu responsive dưới md thì dùng card này */}
      <div className="relative block sm:hidden left-card w-[full]">
        <img
          src={props.Art2}
          alt="art2"
          className="w-full h-[148px] object-contain rounded-xl"
        />
      </div>
    </>
  );
};

export default ImgContainer;
