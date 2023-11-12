import { StyledIcon } from "../Icon.styled";
import { IconProps } from "../Icon.types";

export const CalendarIcon = ({ color }: IconProps) => (
  <StyledIcon
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    color={color}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.333 3.417A.583.583 0 0 0 2.75 4v9.334c0 .322.261.583.583.583h9.334a.583.583 0 0 0 .583-.583V4a.583.583 0 0 0-.583-.583H3.333ZM1.25 4c0-1.15.933-2.083 2.083-2.083h9.334c1.15 0 2.083.933 2.083 2.083v9.334c0 1.15-.933 2.083-2.083 2.083H3.333a2.083 2.083 0 0 1-2.083-2.083V4Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.667.583a.75.75 0 0 1 .75.75V4a.75.75 0 0 1-1.5 0V1.333a.75.75 0 0 1 .75-.75ZM5.333.583a.75.75 0 0 1 .75.75V4a.75.75 0 1 1-1.5 0V1.333a.75.75 0 0 1 .75-.75ZM1.25 6.667a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    />
  </StyledIcon>
);
