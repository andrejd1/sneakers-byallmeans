import styled from "styled-components";
import { device } from "../../ui/theme/breakpoints";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 8.5rem;

  @media only screen and ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
