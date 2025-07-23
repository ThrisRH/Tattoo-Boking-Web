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
      stroke={props.stroke || "#FEAE3F"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.5 16.523a4.523 4.523 0 1 0 0-9.046 4.523 4.523 0 0 0 0 9.046Z"
    />
    <path
      stroke={props.stroke || "#FEAE3F"}
      strokeWidth={2}
      d="M2.323 16.523V7.477a5.654 5.654 0 0 1 5.654-5.654h9.046a5.654 5.654 0 0 1 5.654 5.654v9.046a5.654 5.654 0 0 1-5.654 5.654H7.977a5.654 5.654 0 0 1-5.654-5.654Z"
    />
    <path
      stroke={props.stroke || "#FEAE3F"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m18.72 5.792.01-.012"
    />
  </svg>
);
export default SvgComponent;
