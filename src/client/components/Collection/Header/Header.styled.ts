import styled from "styled-components";
import { device } from "../../../ui/theme/breakpoints";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 1.375rem;
  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const StyledHeaderButtonsContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media ${device.laptop} {
    flex-direction: row;
  }
`;
