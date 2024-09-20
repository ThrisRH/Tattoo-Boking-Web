import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="#FEAE3F"
    {...props}
  >
    <path
      stroke="#FEAE3F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.487 3.855h13.026M1.487 8h13.026M1.487 12.145h13.026"
    />
  </svg>
);
export default SvgComponent;
