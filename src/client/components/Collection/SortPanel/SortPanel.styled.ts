import styled from "styled-components";
import { StyledButton } from "../../Button/Button.styled";
import { device } from "../../../ui/theme/breakpoints";
import { StyledIcon } from "../../Icon/Icon.styled";

export const StyledSortPanel = styled.div<{ $isVisible: boolean }>`
  display: ${(props) => (props.$isVisible ? "flex" : "none")};
  flex-direction: row;
  align-self: start;
  align-items: center;
  overflow: auto;
  margin: 1rem 0;

  ${StyledButton} {
    margin-right: 0.5rem;

    ${StyledIcon}:last-child {
      margin: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  @media only screen and ${device.tablet} {
    justify-content: space-between;
    place-content: end;
    margin: 1rem 0 0 0;
  }
`;

export const StyledSortPanelButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > label {
    margin-right: 1.5rem;
  }
`;
