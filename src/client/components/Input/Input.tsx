import React from "react";
import { StyledInput, StyledInputContainer } from "./Input.styled";
import Typography from "../Typography/Typography";
import { colors } from "../../ui/theme/colors";
import { InputProps } from "./Input.types";

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
