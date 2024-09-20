import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#FEAE3F"
      d="M18.199 22.062a.718.718 0 0 1-.422-.134L12 17.739l-5.778 4.189a.719.719 0 0 1-1.102-.813l2.253-6.673-5.84-4.005a.719.719 0 0 1 .404-1.312h7.205l2.174-6.69a.72.72 0 0 1 1.367 0l2.175 6.692h7.204a.719.719 0 0 1 .407 1.312l-5.842 4.003 2.252 6.672a.719.719 0 0 1-.68.948Z"
    />
  </svg>
);
export default SvgComponent;
