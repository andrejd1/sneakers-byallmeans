import { StyledIcon } from "../Icon.styled";
import { IconProps } from "../Icon.types";

export const StarFilledIcon = ({ color }: IconProps) => (
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
      d="M12 .875c.428 0 .82.243 1.009.627l2.828 5.73 6.326.925a1.125 1.125 0 0 1 .622 1.919l-4.576 4.457 1.08 6.297a1.125 1.125 0 0 1-1.633 1.186L12 19.04l-5.656 2.975A1.125 1.125 0 0 1 4.71 20.83l1.08-6.297-4.576-4.457a1.125 1.125 0 0 1 .622-1.92l6.326-.924 2.828-5.73c.19-.384.58-.627 1.009-.627Z"
      clipRule="evenodd"
    />
  </StyledIcon>
);
