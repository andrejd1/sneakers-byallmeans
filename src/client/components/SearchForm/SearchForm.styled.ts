import styled from "styled-components";
import { colors } from "../../ui/theme/colors";
import { device } from "../../ui/theme/breakpoints";
import { StyledSearchFormInputProps } from "./SearchForm.types";

export const StyledSearchForm = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid ${colors.Gray80};
  background-color: ${colors.White};
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  width: calc(100vw - 5rem);

  @media only screen and ${device.laptop} {
    width: unset;
  }
`;

export const StyledSearchFormInput = styled.input<StyledSearchFormInputProps>`
  height: 100%;
  width: 100%;
  font-family: ${(props) =>
      props.$hasResults ? "Excon Medium" : "Excon Regular"},
    sans-serif;
  background-color: ${colors.White};
  border: none;
  margin-left: 0.2rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${colors.Gray80};
  }
`;
