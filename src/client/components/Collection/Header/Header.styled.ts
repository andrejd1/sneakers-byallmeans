import styled from "styled-components";
import { device } from "../../../ui/theme/breakpoints";
import { StyledButton } from "../../Button/Button.styled";
import { colors } from "../../../ui/theme/colors";
import { zIndexes } from "../../../ui/theme/zIndexes";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;

  > h2 {
    margin: 5.25rem 0 0;
    place-self: start;
  }

  @media only screen and ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const StyledHeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  @media only screen and ${device.laptop} {
    flex-direction: row;
    justify-content: end;
    margin-left: 1.5rem;
    gap: 1rem;
  }
`;

export const StyledAddNewSneakersButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${colors.White};
  border-top: 1px solid ${colors.Gray100};
  padding: 1rem 1.375rem 3.5rem;
  z-index: ${zIndexes.addNewSneakersButton};

  ${StyledButton} {
    place-content: center;
    margin: 0 1.375rem;
    width: calc(100% - 2.75rem);
  }

  @media only screen and ${device.laptop} {
    position: relative;
    bottom: unset;
    width: unset;
    background-color: unset;
    border-top: unset;
    padding: unset;

    ${StyledButton} {
      margin: 0;
      width: unset;
    }
  }
`;
