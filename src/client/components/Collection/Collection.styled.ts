import styled from "styled-components";
import { device } from "../../ui/theme/breakpoints";

export const CardsContainer = styled.div<{ $hasPagination: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  margin-top: 1.5rem;
  margin-bottom: ${(props) => (props.$hasPagination ? "2.5rem" : "9rem")};

  @media only screen and ${device.tablet} {
    margin-top: 0;
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
