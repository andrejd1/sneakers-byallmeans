import { StyledIcon } from "../Icon.styled";
import { IconProps } from "../Icon.types";

export const MissingIcon = ({ color }: IconProps) => (
  <StyledIcon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 15 9"
    width="15"
    height="9"
    color={color}
  >
    <path
      d="M0.65625 6.99999H1.62425V2.61599L4.20025 6.99999H5.30425V1.27999H4.33625V5.41599L1.92825 1.27999H0.65625V6.99999Z"
      fill="black"
    />
    <path
      d="M5.91319 8.18399H6.72919L9.14519 0.791992H8.32119L5.91319 8.18399Z"
      fill="black"
    />
    <path
      d="M11.479 2.15199L12.319 4.80799H10.631L11.479 2.15199ZM8.935 6.99999H9.935L10.383 5.58399H12.567L13.023 6.99999H14.127L12.239 1.27999H10.847L8.935 6.99999Z"
      fill="black"
    />
  </StyledIcon>
);
