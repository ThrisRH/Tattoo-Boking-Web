import React from "react";
import Next from "../svg/next";
import { useNavigate } from "react-router-dom";

const ButtonLine = ({ id, name, icon, color }) => {
  const navigation = useNavigate();

  const goToNewPage = (idPage) => {
    navigation(`/${idPage}`);
  };

  return (
    <button
      style={{ borderColor: color }}
      className="flex flex-row justify-center items-center gap-[6px] px-3 min-w-[102px] sm:min-w-[150px] max-w-[160px] sm:max-w-[160px] h-8 md:h-12 
      bg-none border-solid border-[1px] border-[#D9D9D9] rounded-md text-[#D9D9D9] font-bold
      md:text-base text-[12px]"
      onClick={() => goToNewPage(id)}
    >
      {name} {icon === "yes" ? <Next /> : ""}
    </button>
  );
};

const ButtonLineConfirm = ({ id, name, icon, color }) => {
  return (
    <button
      style={{ borderColor: color }}
      className="flex flex-row justify-center items-center gap-[6px] px-3 min-w-[394px] sm:min-w-[150px] max-w-[160px] sm:max-w-[160px] h-8 md:h-12 
      bg-none border-solid border-[1px] border-[#D9D9D9] rounded-md text-[#D9D9D9] font-bold
      md:text-base text-[12px]"
    >
      {name}
    </button>
  );
};

export default ButtonLine;
export { ButtonLineConfirm };
