import styled from "styled-components";
import { StyledButton } from "../../Button/Button.styled";
import { device } from "../../../ui/theme/breakpoints";

export const StyledSortPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  overflow: scroll;
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

  @media ${device.tablet} {
    justify-content: end;
  }
`;
