import { StyledIcon } from "../Icon.styled";
import { IconProps } from "../Icon.types";

export const StarEmptyIcon = ({ color }: IconProps) => (
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
      d="M12 .875c.428 0 .82.243 1.009.627l2.828 5.73 6.326.925a1.125 1.125 0 0 1 .622 1.919l-4.576 4.457 1.08 6.297a1.125 1.125 0 0 1-1.633 1.186L12 19.04l-5.656 2.975A1.125 1.125 0 0 1 4.71 20.83l1.08-6.297-4.576-4.457a1.125 1.125 0 0 1 .622-1.92l6.326-.924 2.828-5.73c.19-.384.58-.627 1.009-.627Zm0 3.667L9.919 8.758c-.164.332-.48.562-.846.615l-4.656.68 3.368 3.281c.265.259.386.631.324.996l-.795 4.633 4.162-2.189c.328-.172.72-.172 1.048 0l4.162 2.19-.795-4.634a1.125 1.125 0 0 1 .324-.996l3.368-3.28-4.656-.68a1.125 1.125 0 0 1-.846-.616L12 4.542Z"
      clipRule="evenodd"
    />
  </StyledIcon>
);
