import React from "react";
import { StyledRateContainer } from "./Rate.styled";
import Typography from "../Typography/Typography";
import Stars from "../Stars/Stars";
import { RateTypes } from "./Rate.types";

const Rate: React.FC<RateTypes> = ({ rate }) => {
  return (
    <StyledRateContainer>
      <Typography variant="label">Rate</Typography>
      <Stars rating={rate} />
    </StyledRateContainer>
  );
};

export default Rate;
