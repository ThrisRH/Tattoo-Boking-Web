import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonSolid = ({ id, name }) => {
  const navigation = useNavigate();

  const goToNewPage = (idPage) => {
    navigation(`/${idPage}`);
  };
  return (
    <button
      className="min-w-[102px] sm:min-w-[150px] max-w-[160px] sm:max-w-[160px] 
    h-8 md:h-12 bg-[#FEAE3F] rounded-md font-bold md:text-base text-[12px]"
      onClick={() => goToNewPage(id)}
    >
      {name}
    </button>
  );
};

const ButtonSolidConfirm = ({ onConfirm, name }) => {
  return (
    <button
      onClick={onConfirm}
      type="submit"
      className="min-w-[102px] sm:min-w-[150px] max-w-[160px] sm:max-w-[394px] 
    h-8 md:h-12 bg-[#FEAE3F] rounded-md font-bold md:text-base text-[12px]"
    >
      {name}
    </button>
  );
};

export default ButtonSolid;
export { ButtonSolidConfirm };
