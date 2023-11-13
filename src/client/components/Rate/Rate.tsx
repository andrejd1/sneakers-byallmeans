import React, { useEffect, useState } from "react";
import { StyledRateContainer } from "./Rate.styled";
import Typography from "../Typography/Typography";
import Stars from "../Stars/Stars";
import { RateTypes } from "./Rate.types";

const Rate: React.FC<RateTypes> = ({ rating, register, setValue }) => {
  const [rate, setRate] = useState(rating);

  useEffect(() => {
    setValue("rate", rate);
  }, [rate]);

  return (
    <StyledRateContainer>
      <Typography variant="label">Rate</Typography>
      <Stars rating={rate} setRating={setRate} />
      <input hidden={true} type="number" {...register} />
    </StyledRateContainer>
  );
};

export default Rate;
