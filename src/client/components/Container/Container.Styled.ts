import styled from "styled-components";
import { device } from "../../ui/theme/breakpoints";

export const StyledContainer = styled.div`
  padding: 0 1.375rem;
  @media ${device.laptop} {
    max-width: 82rem;
    margin: 0 auto;
    width: 100%;
    padding: 0 6.25rem;
  }
`;
