import styled from "styled-components";
import { device } from "../../ui/theme/breakpoints";
import { StyledButton } from "../Button/Button.styled";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-around;
  margin-bottom: 9rem;

  @media only screen and ${device.desktop} {
    justify-content: space-between;
    margin-bottom: 3rem;
  }
`;
export const PaginationButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;

  ${StyledButton} {
    justify-content: center;
  }

  span {
    align-self: center;
  }

  @media only screen and ${device.laptop} {
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: end;
    gap: 0.75rem;
  }
`;
