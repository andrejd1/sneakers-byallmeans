import { StyledIcon } from "../Icon.styled";
import { IconProps } from "../Icon.types";

export const ChevronDownIcon = ({ color }: IconProps) => (
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
      d="M3.47 5.47a.75.75 0 0 1 1.06 0L8 8.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </StyledIcon>
);
