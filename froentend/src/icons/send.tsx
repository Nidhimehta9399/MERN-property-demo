import React from "react";

const SendIcon = ({ size, color }: SVGProps) => (
  <svg
    fill={color || "#000000"}
    width={size}
    height={size}
    viewBox="0 0 1000 1000"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M29 901l938-402L29 97v313l670 89-670 89v313z" />
  </svg>
);

export default SendIcon;
