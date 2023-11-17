import styled from "styled-components";
import { colors } from "../../ui/theme/colors";
import { IconProps } from "./Icon.types";

export const StyledIcon = styled.svg<IconProps>`
  position: relative;
  color: ${(props) => (props.color ? colors[props.color] : "initial")};
  cursor: pointer;
`;
