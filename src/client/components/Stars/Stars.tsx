import React from "react";
import { StyledStarsContainer } from "./Stars.styled";
import Icon from "../Icon/Icon";
import { StarsTypes } from "./Stars.types";

const Stars: React.FC<StarsTypes> = ({ rating, setRating, isReadonly }) => {
  const [hover, setHover] = React.useState(0);

  const handleRateChange = (index: number) => {
    if (setRating) {
      setRating(index + 1);
    }
  };

  return (
    <StyledStarsContainer>
      {[...Array(5)].map((_, i) => {
        return (
          <div
            key={i}
            onClick={() => handleRateChange(i)}
            onMouseEnter={() => !isReadonly && setHover(i + 1)}
            onMouseLeave={() => !isReadonly && setHover(rating ?? 0)}
          >
            {i + 1 <= (hover || (rating ?? 0)) ? (
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
