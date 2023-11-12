import { StyledIcon } from "../Icon.styled";
import { IconProps } from "../Icon.types";

export const SizeIcon = ({ color }: IconProps) => (
  <StyledIcon
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    color={color}
  >
    <path
      fill="#191919"
      fillRule="evenodd"
      d="M10.136 3.47a.75.75 0 0 1 1.061 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06L13.605 8l-3.47-3.47a.75.75 0 0 1 0-1.06ZM5.864 3.47a.75.75 0 0 1 0 1.06L2.394 8l3.47 3.47a.75.75 0 1 1-1.061 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0Z"
      clipRule="evenodd"
    />
  </StyledIcon>
);
