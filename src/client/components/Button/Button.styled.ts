import styled, { css } from "styled-components";
import { ButtonTypes } from "./Button.types";
import { colors } from "../../ui/theme/colors";

const resolveContainerVariantStyle = (variant: ButtonTypes.ButtonVariants) =>
  ({
    primary: css`
      color: ${colors.White};
      background-color: ${colors.Black};

      &:hover {
        background-color: ${colors.Hover};
      }

      &:focus {
        border: 3px solid ${colors.Focus};
      }

      &:disabled {
        color: ${colors.Gray50};
        background-color: ${colors.Gray80};
      }
    `,
    secondary: css`
      color: ${colors.Black};
      border: 1px solid ${colors.Black};

      &:hover {
        color: ${colors.Hover};
        border: 1px solid ${colors.Hover};
      }

      &:focus {
        border: 2px solid ${colors.Focus};
      }

      &:disabled {
        color: ${colors.Gray50};
        border: 1px solid ${colors.Gray50};
      }
    `,
  })[variant];

export const StyledButton = styled.button<ButtonTypes.StyledButtonProps>`
  height: ${(props) => (props.$size === "large" ? "3rem" : "2.25rem")};
  display: flex;
  align-items: center;
  padding: 0 0.75rem;
  font-family: "Excon Regular", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  border-radius: 12px;
  cursor: pointer;
  ${(props) => resolveContainerVariantStyle(props.$variant)}
  ${(props) =>
    props.$isActive &&
    css`
      background-color: ${colors.Red};
      color: ${colors.White};
      border: none;
    `};

  svg {
    ${(props) =>
      !props.$iconAlign || props.$iconAlign === "left"
        ? "margin-right: 0.5rem;"
        : "margin-left: 0.5rem;"};
  }
`;
