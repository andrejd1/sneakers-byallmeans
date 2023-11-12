import styled from "styled-components";
import { device } from "../../ui/theme/breakpoints";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 8.5rem;

  @media ${device.tablet} {
    grid-template-columns: 1.5fr 1.5fr;

    @media ${device.laptop} {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;
