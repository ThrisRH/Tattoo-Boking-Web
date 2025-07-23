import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={"24px"}
    height={"24px"}
    fill="none"
    viewBox="0 0 24 24" // Giữ nguyên viewBox gốc
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill={props.fill || "#FEAE3F"}
        d="M7.908 1.605A1.791 1.791 0 0 0 5.778.563L1.825 1.64A1.802 1.802 0 0 0 .5 3.375C.5 14.489 9.511 23.5 20.625 23.5c.809 0 1.518-.544 1.734-1.325l1.078-3.953a1.791 1.791 0 0 0-1.042-2.13l-4.313-1.796a1.791 1.791 0 0 0-2.08.52l-1.814 2.215a15.182 15.182 0 0 1-7.22-7.219l2.215-1.81a1.793 1.793 0 0 0 .521-2.08L7.908 1.61v-.005Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
