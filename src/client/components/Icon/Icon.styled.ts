import styled from "styled-components";
import { colors, ThemeColors } from "../../ui/theme/colors";

export const StyledIcon = styled.svg<{ color?: ThemeColors }>`
  position: relative;
  color: ${(props) => (props.color ? colors[props.color] : "initial")};
`;
