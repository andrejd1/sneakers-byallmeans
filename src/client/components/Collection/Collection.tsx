import React from "react";
import { CollectionProps } from "../../types/sneakers";
import Typography from "../Typography/Typography";
import SortPanel from "./SortPanel/SortPanel";
import Card from "../Card/Card";
import { CardsContainer } from "./Collection.styled";

const Collection: React.FC<CollectionProps> = ({
  sneakers,
  onDeleteSneaker,
}) => {
  if (sneakers.length === 0) {
    return (
      <div>
        <Typography variant="h1">Your collection</Typography>
        <Typography variant="h3">No sneakers found</Typography>
      </div>
    );
  }

  return (
    <>
      <SortPanel />
      <CardsContainer>
        {sneakers.map((sneaker) => (
          <Card
            name={sneaker.name}
            year={sneaker.year}
            size={sneaker.size}
            price={sneaker.price}
            brand={sneaker.brand}
            key={sneaker._id}
          />
        ))}
      </CardsContainer>
    </>
  );
};

export default Collection;
