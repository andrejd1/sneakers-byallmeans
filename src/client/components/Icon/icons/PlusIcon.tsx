import { StyledIcon } from "../Icon.styled";
import { IconProps } from "../Icon.types";

export const PlusIcon = ({ color }: IconProps) => (
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
      d="M12 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
  </StyledIcon>
);
