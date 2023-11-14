import React, { useEffect, useState } from "react";
import { StyledRateContainer } from "./Rate.styled";
import Typography from "../Typography/Typography";
import Stars from "../Stars/Stars";
import { RateTypes } from "./Rate.types";
import { useDeviceSize } from "../../hooks/useDeviceSize";
import { breakpointSize } from "../../ui/theme/breakpoints";

const Rate: React.FC<RateTypes> = ({ rating, register, setValue }) => {
  const [rate, setRate] = useState(rating);
  const { windowWidth } = useDeviceSize();
  const isMobile = windowWidth <= breakpointSize.mobile;

  useEffect(() => {
    setValue("rate", rate);
  }, [rate]);

  return (
    <StyledRateContainer>
      <Typography variant="label">Rate</Typography>
      <Stars
        rating={rate}
        variant={isMobile ? "small" : "large"}
        setRating={setRate}
      />
      <input hidden={true} type="number" {...register} />
    </StyledRateContainer>
  );
};

export default Rate;
