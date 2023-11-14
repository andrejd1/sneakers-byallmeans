import React from "react";
import { StyledEmptyContainer, StyledEmptyImage } from "../Empty.styled";
import EmptyImage from "../../../assets/empty_collection.webp";
import Typography from "../../Typography/Typography";

const EmptyCollection: React.FC = () => {
  return (
    <StyledEmptyContainer>
      <StyledEmptyImage src={EmptyImage} alt="No Sneakers" />
      <Typography variant="copy">
        Seems like you still didn't add
        <br />
        any new sneaker to your collection
      </Typography>
    </StyledEmptyContainer>
  );
};

export default EmptyCollection;
