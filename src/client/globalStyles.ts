import { createGlobalStyle } from "styled-components";
import { colors } from "./ui/theme/colors";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${colors.Background};
    min-width: 320px;
    margin: 0;
  }
`;
