import styled from "styled-components";
import { device } from "../../ui/theme/breakpoints";

export const StyledEmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 10rem;

  @media only screen and ${device.tablet} {
    width: 100%;
  }
`;
export const StyledEmptyImage = styled.img`
  padding: 3rem;
  object-fit: cover;
  width: calc(100% - 6rem);

  @media only screen and ${device.laptop} {
    object-fit: unset;
    width: unset;
  }
`;
