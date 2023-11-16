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
import { motion } from "framer-motion";
import { useSneakerContext } from "../../context/SneakerProvider";

const Card: React.FC<Sneaker> = ({
  _id,
  name,
  brand,
  price,
  size,
  year,
  rate,
}) => {
  const { handleDeleteSneaker } = useSneakerContext();

  return (
    <StyledCard>
      <StyledCardTitle>
        <Typography variant={"h3"} style={{ margin: 0 }}>
          {name}
        </Typography>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={async (event) => {
            event.stopPropagation();
            if (
              window.confirm(
                `Are you sure you want to delete ${brand} ${name}?`,
              )
            ) {
              await handleDeleteSneaker(_id);
            }
          }}
        >
          <Icon name="trash" />
        </motion.div>
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
