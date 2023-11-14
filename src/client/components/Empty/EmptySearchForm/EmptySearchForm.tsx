import React from "react";
import { StyledEmptyContainer, StyledEmptyImage } from "../Empty.styled";
import EmptyImage from "../../../assets/empty_search.webp";
import Typography from "../../Typography/Typography";

const EmptySearchForm: React.FC = () => {
  return (
    <StyledEmptyContainer>
      <StyledEmptyImage src={EmptyImage} alt="No Sneakers" />
      <Typography variant="copy">
        Search better.
        <br />
        There is nothing like this in your collection.
      </Typography>
    </StyledEmptyContainer>
  );
};

export default EmptySearchForm;
