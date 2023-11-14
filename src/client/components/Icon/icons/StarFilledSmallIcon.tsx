import { IconProps } from "../Icon.types";
import { StyledIcon } from "../Icon.styled";

export const StarFilledSmallIcon = ({ color }: IconProps) => (
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
      d="M8 .583a.75.75 0 0 1 .672.419l1.886 3.82 4.217.616a.75.75 0 0 1 .415 1.28l-3.05 2.97.72 4.199a.75.75 0 0 1-1.09.79L8 12.694l-3.771 1.983a.75.75 0 0 1-1.088-.79l.72-4.198L.81 6.717a.75.75 0 0 1 .415-1.279l4.217-.616 1.885-3.82A.75.75 0 0 1 8 .583Z"
      clipRule="evenodd"
    />
  </StyledIcon>
);
