import styled from "styled-components";
import { device } from "../../ui/theme/breakpoints";
import { StyledIcon } from "../Icon/Icon.styled";

export const StyledStarsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;

  ${StyledIcon} {
    width: 1rem;
    height: 1rem;
  }

  @media only screen and ${device.laptop} {
    gap: 0.5rem;

    ${StyledIcon} {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;
