import React from "react";
import {
  StyledEmptyCollectionContainer,
  StyledEmptyCollectionImage,
} from "./EmptyCollection.styled";
import EmptyCollectionImage from "../../../assets/empty_collection.webp";
import Typography from "../../Typography/Typography";

const EmptyCollection: React.FC = () => {
  return (
    <StyledEmptyCollectionContainer>
      <StyledEmptyCollectionImage
        src={EmptyCollectionImage}
        alt="No Sneakers"
      />
      <Typography variant="copy">
        Seems like you still didn't add
        <br />
        any new sneaker to your collection
      </Typography>
    </StyledEmptyCollectionContainer>
  );
};

export default EmptyCollection;
