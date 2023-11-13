import React from "react";
import { StyledInput, StyledInputContainer } from "./Input.styled";
import Typography from "../Typography/Typography";
import { InputProps } from "../../types/common";
import { colors } from "../../ui/theme/colors";

const Input: React.FC<InputProps> = ({
  label,
  type,
  defaultValue,
  register,
  error,
  errorMessage,
}) => {
  return (
    <StyledInputContainer>
      <Typography variant="label">{label}</Typography>
      <StyledInput type={type} defaultValue={defaultValue} {...register} />
      {error && (
        <Typography variant="copy" style={{ color: colors.Red }}>
          {errorMessage}
        </Typography>
      )}
    </StyledInputContainer>
  );
};

export default Input;
