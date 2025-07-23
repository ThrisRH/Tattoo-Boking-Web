import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#FEAE3F"
        d="M4.125.975a3.153 3.153 0 0 0-3.15 3.15v15.75a3.153 3.153 0 0 0 3.15 3.15h4.833V15.85H6.36V12h2.598v-1.659c0-4.287 1.94-6.275 6.153-6.275.797 0 2.175.158 2.741.315v3.485c-.295-.03-.812-.05-1.457-.05-2.067 0-2.864.783-2.864 2.816V12h4.114l-.708 3.849h-3.411v7.176h6.349a3.153 3.153 0 0 0 3.15-3.15V4.125a3.153 3.153 0 0 0-3.15-3.15H4.125Z"
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
