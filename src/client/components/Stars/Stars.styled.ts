import styled from "styled-components";
import { device } from "../../ui/theme/breakpoints";
import { StarsTypes } from "./Stars.types";

export const StyledStarsContainer = styled.div<StarsTypes.StyledStarsContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;

  @media only screen and ${device.laptop} {
    gap: ${(props) => (props.$variant === "small" ? "0.25rem" : "0.5rem")};
  }
`;
