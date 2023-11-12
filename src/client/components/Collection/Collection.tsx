import React, { useEffect, useState } from "react";
import { CollectionProps, Sneaker, SneakerSort } from "../../types/sneakers";
import Typography from "../Typography/Typography";
import SortPanel from "./SortPanel/SortPanel";
import Card from "../Card/Card";
import { CardsContainer } from "./Collection.styled";

const Collection: React.FC<CollectionProps> = ({
  sneakers,
  onDeleteSneaker,
}) => {
  const [sortedSneakers, setSortedSneakers] = useState<Sneaker[]>([]);
  const [sortBy, setSortBy] = useState<keyof SneakerSort | undefined>();

  useEffect(() => {
    if (sneakers.length > 0) {
      setSortedSneakers([...sneakers]);
    }
  }, [sneakers]);

  useEffect(() => {
    if (sortBy === "year") {
      setSortedSneakers([...sortedSneakers].sort((a, b) => a.year - b.year));
      console.log(sortedSneakers);
    }
    if (sortBy === "size") {
      setSortedSneakers([...sortedSneakers].sort((a, b) => a.size - b.size));
    }
    if (sortBy === "price") {
      setSortedSneakers([...sortedSneakers].sort((a, b) => a.price - b.price));
    }
  }, [sortBy]);

  if (sortedSneakers.length === 0) {
    return (
      <div>
        <Typography variant="h3">No sneakers found</Typography>
      </div>
    );
  }

  return (
    <>
      <SortPanel sortBy={sortBy} setSortBy={setSortBy} />
      <CardsContainer>
        {sortedSneakers.map((sneaker) => (
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
