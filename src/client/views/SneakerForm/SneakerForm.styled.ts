import styled from "styled-components";
import { motion } from "framer-motion";
import { zIndexes } from "../../ui/theme/zIndexes";
import { colors } from "../../ui/theme/colors";
import { StyledButton } from "../../components/Button/Button.styled";
import { device } from "../../ui/theme/breakpoints";
import { SneakerFormTypes } from "./SneakerForm.types";

export const StyledFormBackdrop = styled(
  motion.div,
)<SneakerFormTypes.StyledFormProps>`
  position: absolute;
  top: ${(props) => props.$scrollPosition}px;
  right: 0;
  z-index: ${zIndexes.rightSidebar};
  display: flex;
  width: 100%;
  height: 100%;
  background: ${colors.Black};
`;
export const StyledFormContainer = styled(
  motion.div,
)<SneakerFormTypes.StyledFormProps>`
  position: absolute;
  top: ${(props) => props.$scrollPosition}px;
  right: 0;
  z-index: ${zIndexes.rightSidebar};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 2rem);
  max-width: calc(100% - 4rem);
  padding: 4.5rem 1.5rem;
  background: ${colors.White};
  overflow-y: auto;

  @media only screen and ${device.tablet} {
    max-width: 32.75rem;
    padding: 1rem 3rem;
  }
`;

export const StyledFormTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 3rem;

  > h2 {
    margin: 0;
    line-height: 2.25rem;
    white-space: pre-line;
  }
`;

export const StyledFormCloseWrapper = styled.div``;

export const StyledFormButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
  gap: 1rem;

  > ${StyledButton} {
    place-content: center;

    &:last-child {
      margin-bottom: 4.5rem;
    }
  }

  @media only screen and ${device.tablet} {
    > ${StyledButton} {
      height: 3.5rem;
    }
  }
`;

export const StyledForm = styled.form`
  > ${StyledButton} {
    margin-top: 3rem;
    place-content: center;
    width: 100%;
    margin-bottom: 4.5rem;
  }

  @media only screen and ${device.tablet} {
    > ${StyledButton} {
      height: 3.5rem;
    }
  }
`;
