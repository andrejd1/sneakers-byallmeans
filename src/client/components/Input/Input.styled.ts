import styled from "styled-components";
import { colors } from "../../ui/theme/colors";

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  > label {
    color: ${colors.Gray50};
  }
`;
export const StyledInput = styled.input`
  height: 1.375rem;
  border: 1px solid ${colors.Gray80};
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
`;
