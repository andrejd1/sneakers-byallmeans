import { IconProps } from "../Icon.types";
import { StyledIcon } from "../Icon.styled";

export const StarEmptySmallIcon = ({ color }: IconProps) => (
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
      d="M8 .583a.75.75 0 0 1 .672.419l1.886 3.82 4.217.616a.75.75 0 0 1 .415 1.28l-3.05 2.97.72 4.199a.75.75 0 0 1-1.09.79L8 12.694l-3.771 1.983a.75.75 0 0 1-1.088-.79l.72-4.198L.81 6.717a.75.75 0 0 1 .415-1.279l4.217-.616 1.885-3.82A.75.75 0 0 1 8 .583Zm0 2.445-1.388 2.81a.75.75 0 0 1-.564.41l-3.103.455L5.19 8.89a.75.75 0 0 1 .216.664l-.53 3.088 2.775-1.459a.75.75 0 0 1 .698 0l2.775 1.46-.53-3.09a.75.75 0 0 1 .216-.663l2.245-2.187-3.104-.454a.75.75 0 0 1-.564-.41L8 3.028Z"
      clipRule="evenodd"
    />
  </StyledIcon>
);
