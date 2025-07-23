import React from "react";
import StarIcon from "../svg/star.js";

const TitleSection = ({ title, subtitle }) => {
  return (
    <div className="title-section flex w-full justify-center">
      <div className="container flex flex-col items-center gap-3">
        <a className="text-primary text-base underline " href="/">
          Quay về trang chủ
        </a>
        <p className="section-title text-3xl font-bold">{title}</p>
        <div className="star flex flex-row gap-[6px]">
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default TitleSection;
