import styled from "styled-components";
import { device } from "../../../ui/theme/breakpoints";

export const StyledSortPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${device.laptop} {
    flex-direction: row;
    justify-content: end;
  }
`;
