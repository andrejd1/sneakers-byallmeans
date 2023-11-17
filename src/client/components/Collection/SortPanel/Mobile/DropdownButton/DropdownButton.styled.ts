import styled from "styled-components";
import { StyledDropdownButtonProps } from "./DropdownButton.types";

export const StyledDropdownButtonWrapper = styled.div<StyledDropdownButtonProps>`
  display: ${(props) => (props.$isVisible ? "none" : ",flex")};
  align-items: center;
  align-self: start;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;
