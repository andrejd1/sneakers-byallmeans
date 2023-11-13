import styled from "styled-components";
import { StyledButton } from "../../Button/Button.styled";
import { device } from "../../../ui/theme/breakpoints";

export const StyledSortPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  overflow: auto;
  margin-top: 1rem;

  > label {
    margin-right: 1.5rem;
  }

  ${StyledButton} {
    margin-right: 0.5rem;

    &:last-child {
      margin-right: 0;
    }
  }

  @media only screen and ${device.tablet} {
    justify-content: end;
  }
`;
