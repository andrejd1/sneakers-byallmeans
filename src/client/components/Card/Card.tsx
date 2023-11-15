import React from "react";
import {
  StyledCard,
  StyledCardInfo,
  StyledCardInfoContainer,
  StyledCardTitle,
} from "./Card.styled";
import Typography from "../Typography/Typography";
import Icon from "../Icon/Icon";
import { Sneaker } from "../../types/sneakers";
import Stars from "../Stars/Stars";

const Card: React.FC<Sneaker> = ({
  _id,
  name,
  brand,
  price,
  size,
  year,
  rate,
  onDeleteSneaker,
}) => {
  return (
    <StyledCard>
      <StyledCardTitle>
        <Typography variant={"h3"} style={{ margin: 0 }}>
          {name}
        </Typography>
        <div
          onClick={(event) => {
            event.stopPropagation();
            if (
              window.confirm(
                `Are you sure you want to delete ${brand} ${name}?`,
              )
            ) {
              onDeleteSneaker(_id);
            }
          }}
        >
          <Icon name="trash" />
        </div>
      </StyledCardTitle>
      <Typography variant={"copy"}>{brand}</Typography>
      <Stars rating={rate} variant="small" isReadonly={true} />
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
