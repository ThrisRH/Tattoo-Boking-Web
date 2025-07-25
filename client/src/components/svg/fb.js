import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    fill="none"
    viewBox="0 0 24 24" // Giữ nguyên viewBox gốc
    {...props}
  >
    <path
      fill={props.fill || "#FEAE3F"}
      d="M13.5 1A4.5 4.5 0 0 0 9 5.5V9H6.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5H9v8.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V14h2.5a.5.5 0 0 0 .485-.379l1-4A.5.5 0 0 0 17.5 9H14V7.5A1.5 1.5 0 0 1 15.5 6h2a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-4Z"
    />
  </svg>
);
export default SvgComponent;
