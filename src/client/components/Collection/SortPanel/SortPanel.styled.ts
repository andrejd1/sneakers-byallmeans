import styled from "styled-components";
import { StyledButton } from "../../Button/Button.styled";
import { device } from "../../../ui/theme/breakpoints";
import { StyledIcon } from "../../Icon/Icon.styled";
import {
  StyledSearchResultWrapperProps,
  StyledSortPanelProps,
} from "./SortPanel.types";

export const StyledSortPanel = styled.div<StyledSortPanelProps>`
  display: ${(props) => (props.$isVisible ? "flex" : "none")};
  flex-direction: row;
  align-self: start;
  align-items: center;
  overflow: auto;

  ${StyledButton} {
    margin-right: 0.5rem;

    ${StyledIcon}:last-child {
      margin: 0;
    }

    &:last-child {
      margin-right: 1.375rem;
    }
  }

  @media only screen and ${device.tablet} {
    justify-content: space-between;
    margin: 2rem 0 1rem;

    ${StyledButton} {
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const StyledMobileSortPanel = styled(StyledSortPanel)`
  margin: 1rem 0;
`;

export const StyledSearchResultWrapper = styled.div<StyledSearchResultWrapperProps>`
  margin-top: ${(props) => (props.$hasSearchValue ? "1rem" : "0")};
  @media only screen and ${device.tablet} {
    margin: 0;
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
