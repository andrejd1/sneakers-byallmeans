import React from "react";
import Typography from "../../Typography/Typography";
import Button from "../../Button/Button";
import { StyledHeader, StyledHeaderButtonsContainer } from "./Header.styled";

const CollectionHeader: React.FC = () => {
  return (
    <StyledHeader>
      <Typography variant="h1">Sneaker Collection</Typography>
      <StyledHeaderButtonsContainer>
        <div>Search form</div>
        <Button
          variant={"primary"}
          size={"large"}
          label={"Add new sneakers"}
          isActive={false}
          icon={{
            name: "plus",
            color: "White",
          }}
        />
      </StyledHeaderButtonsContainer>
    </StyledHeader>
  );
};

export default CollectionHeader;
