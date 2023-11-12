import { StyledIcon } from "../Icon.styled";
import { IconProps } from "../Icon.types";

export const SearchIcon = ({ color }: IconProps) => (
  <StyledIcon
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    color={color}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-9 7a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.943 15.943a1 1 0 0 1 1.414 0l4.35 4.35a1 1 0 0 1-1.414 1.414l-4.35-4.35a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </StyledIcon>
);
