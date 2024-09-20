import React from "react";

const ContentBlock = ({ align, backHighlight, frontHighlight, items }) => {
  return (
    <div className="right-card w-full sm:w-[70%] flex flex-col gap-4 justify-center">
      {align === "left" ? (
        <h1 className="text-[16px] lg:text-[24px] w-full text-center sm:text-start">
          {backHighlight}{" "}
          <span className="text-[#FEAE3F] font-semibold">Neki's Tattoo</span>{" "}
          {frontHighlight}
        </h1>
      ) : (
        <h1 className="text-[16px] lg:text-[24px] w-full text-center sm:text-end">
          {backHighlight}{" "}
          <span className="text-[#FEAE3F] font-semibold">Neki's Tattoo</span>{" "}
          {frontHighlight}
        </h1>
      )}
      <ul className="content flex flex-col gap-4 text-justify">
        {items.map((item, index) => (
          <li className="text-[12px] lg:text-[16px] xl:text-[18px]" key={index}>
            <span className="font-bold">{item.MainContent}: </span>
            {item.Content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentBlock;
