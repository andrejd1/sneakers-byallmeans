import styled from "styled-components";
import { device } from "../../ui/theme/breakpoints";

export const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 1.375rem;
  @media only screen and ${device.laptop} {
    margin: 0 auto;
    padding: 0 6.25rem;
    max-width: 82rem;
  }
`;
