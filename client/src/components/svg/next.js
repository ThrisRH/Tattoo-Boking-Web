import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#D9D9D9"
      d="M14.645 8.647a.918.918 0 0 0 0-1.297l-4.581-4.582a.918.918 0 0 0-1.297 1.298l3.02 3.018H3.004a.915.915 0 1 0 0 1.832h8.782L8.77 11.934a.918.918 0 0 0 1.297 1.298l4.581-4.582-.003-.003Z"
    />
  </svg>
);
export default SvgComponent;
