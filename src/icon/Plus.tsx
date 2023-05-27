import React, { SVGProps } from "react";

export const Plus: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    viewBox="0 0 30 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 2L15 27"
      stroke="currentColor"
      stroke-width="4"
      stroke-linecap="round"
    />
    <path
      d="M2.5 14.5H27.5"
      stroke="currentColor"
      stroke-width="4"
      stroke-linecap="round"
    />
  </svg>
);
