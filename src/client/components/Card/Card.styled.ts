import styled from "styled-components";
import { colors } from "../../ui/theme/colors";

export const StyledCard = styled.div`
  display: flex;
  background-color: ${colors.White};
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 1.5rem;
  border-radius: 0.75rem;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid ${colors.Hover};
  }
`;
export const StyledCardTitle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const StyledCardInfoContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
`;
export const StyledCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 1rem;
  border-right: 1px solid ${colors.Gray80};

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    border-right: none;
  }
`;
