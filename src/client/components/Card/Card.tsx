import React from "react";
import {
  StyledCard,
  StyledCardInfo,
  StyledCardInfoContainer,
  StyledCardTitle,
} from "./Card.styled";
import Typography from "../Typography/Typography";
import Icon from "../Icon/Icon";
import { SneakerInput } from "../../types/sneakers";

const Card: React.FC<SneakerInput> = ({ name, brand, price, size, year }) => {
  return (
    <StyledCard>
      <StyledCardTitle>
        <Typography variant={"h3"} style={{ margin: 0 }}>
          {name}
        </Typography>
        <Icon name="trash" />
      </StyledCardTitle>
      <Typography variant={"copy"}>{brand}</Typography>
      <div>stars</div>
      <StyledCardInfoContainer>
        <StyledCardInfo>
          <Typography variant={"subhead"} style={{ margin: 0 }}>
            {year}
          </Typography>
          <Typography variant={"copy"}>Year</Typography>
        </StyledCardInfo>
        <StyledCardInfo>
          <Typography variant={"subhead"} style={{ margin: 0 }}>
            {size}
          </Typography>
          <Typography variant={"copy"}>Size US</Typography>
        </StyledCardInfo>
        <StyledCardInfo>
          <Typography
            variant={"subhead"}
            style={{ margin: 0 }}
          >{`$${price}`}</Typography>
          <Typography variant={"copy"}>Price</Typography>
        </StyledCardInfo>
      </StyledCardInfoContainer>
    </StyledCard>
  );
};

export default Card;
