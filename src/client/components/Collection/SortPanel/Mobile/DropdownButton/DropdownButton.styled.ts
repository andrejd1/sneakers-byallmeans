import styled from "styled-components";

export const StyledDropdownButtonWrapper = styled.div<{ $isVisible: boolean }>`
  display: ${(props) => (props.$isVisible ? "none" : ",flex")};
  align-items: center;
  align-self: start;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;
