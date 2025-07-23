import React from "react";

const ICandText = ({ icon, name, isBold }) => {
  return (
    <div className="flex h-auto min-h-7 flex-row gap-3 items-center">
      <div className="icon-box lg:w-6 lg:h-6 w-5 h-5">{icon}</div>
      <p
        className={`${
          isBold === "yes" ? "font-bold" : ""
        } lg:text-base text-[12px]`}
      >
        {name}
      </p>
    </div>
  );
};

export default ICandText;
