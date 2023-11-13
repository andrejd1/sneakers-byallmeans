import React from "react";
import { StyledStarsContainer } from "./Stars.styled";
import { StarsTypes } from "./Stars.types";
import Icon from "../Icon/Icon";

const Stars: React.FC<StarsTypes> = ({ rating }) => {
  const [rate, setRate] = React.useState(rating);
  const [hover, setHover] = React.useState(0);

  const handleRateChange = (index: number) => {
    setRate(index + 1);
  };

  return (
    <StyledStarsContainer>
      {[...Array(5)].map((_, i) => {
        return (
          <div
            key={i}
            onClick={() => handleRateChange(i)}
            onMouseEnter={() => setHover(i + 1)}
            onMouseLeave={() => setHover(rate ?? 0)}
          >
            {i + 1 <= (hover || (rate ?? 0)) ? (
              <Icon name="star-filled" />
            ) : (
              <Icon name="star-empty" />
            )}
          </div>
        );
      })}
    </StyledStarsContainer>
  );
};

export default Stars;
