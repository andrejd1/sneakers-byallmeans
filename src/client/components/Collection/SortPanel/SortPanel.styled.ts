import styled from "styled-components";
import { StyledButton } from "../../Button/Button.styled";

export const StyledSortPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;

  > label {
    margin-right: 1.5rem;
  }

  ${StyledButton} {
    margin-right: 0.5rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;
