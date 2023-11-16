import styled from "styled-components";
import { colors } from "../../ui/theme/colors";
import { device } from "../../ui/theme/breakpoints";
import { motion } from "framer-motion";

export const StyledSearchForm = styled(motion.form)`
  display: flex;
  align-items: center;
  border: 1px solid ${colors.Gray80};
  max-height: 1.375rem;
  background-color: ${colors.White};
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  width: calc(100vw - 5rem);

  @media only screen and ${device.laptop} {
    width: unset;
  }
`;

export const StyledSearchFormInput = styled.input`
  height: 100%;
  width: 100%;
  font-family: "Excon Regular", sans-serif;
  font-size: 1rem;
  background-color: ${colors.White};
  border: none;
  margin-left: 0.5rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${colors.Gray80};
  }
`;
