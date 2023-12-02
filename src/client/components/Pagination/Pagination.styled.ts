import styled from "styled-components";
import { device } from "../../ui/theme/breakpoints";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 9rem;

  @media only screen and ${device.desktop} {
    justify-content: space-between;
  }
`;
export const PaginationButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem;

  @media only screen and ${device.laptop} {
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: end;
    gap: 0.75rem;
    margin-bottom: 2.5rem;
  }
`;
