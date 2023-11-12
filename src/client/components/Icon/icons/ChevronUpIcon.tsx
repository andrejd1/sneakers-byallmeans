import { StyledIcon } from "../Icon.styled";
import { IconProps } from "../Icon.types";

export const ChevronUpIcon = ({ color }: IconProps) => (
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
      d="M7.47 5.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06L8 7.06l-3.47 3.47a.75.75 0 1 1-1.06-1.06l4-4Z"
      clipRule="evenodd"
    />
  </StyledIcon>
);
