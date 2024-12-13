import React from "react";

const ChatIcon = ({ size, color }: SVGProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <path
      fill={color || "#000000"}
      stroke={color || "#000000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 21a9 9 0 1 0-7.605-4.185L3 21l4.185-1.395A8.958 8.958 0 0 0 12 21z"
    />
  </svg>
);

export default ChatIcon;
