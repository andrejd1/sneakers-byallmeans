import { StyledIcon } from "../Icon.styled";
import { IconProps } from "../Icon.types";

export const DollarSignIcon = ({ color }: IconProps) => (
  <StyledIcon
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    color={color}
  >
    <g clipPath="url(#dollar-sign)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.75.667a.75.75 0 0 0-1.5 0v1.916h-.917a3.083 3.083 0 1 0 0 6.167h.917v3.167H4a.75.75 0 0 0 0 1.5h3.25v1.916a.75.75 0 0 0 1.5 0v-1.916h.917a3.083 3.083 0 1 0 0-6.167H8.75V4.083h2.583a.75.75 0 0 0 0-1.5H8.75V.667Zm-1.5 3.417h-.917a1.583 1.583 0 1 0 0 3.166h.917V4.083Zm1.5 4.666v3.167h.917a1.584 1.584 0 0 0 0-3.167H8.75Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="dollar-sign">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </StyledIcon>
);
