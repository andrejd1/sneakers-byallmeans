import React, { useEffect } from "react";
import { Sneaker } from "../../types/sneakers";
import SortPanel from "./SortPanel/SortPanel";
import Card from "../Card/Card";
import { CardsContainer } from "./Collection.styled";
import { state$ } from "../../store/store";
import EmptyCollection from "./EmptyCollection/EmptyCollection";

const Collection: React.FC = () => {
  const sneakers = [...state$.sneakers.get()];
  const activeSort = state$.UI.activeSort.get();

  useEffect(() => {
    const sortedSneakers: Sneaker[] = [...state$.sneakers.get()];
    if (activeSort === "year") {
      sortedSneakers.sort((a, b) => a.year - b.year);
    }
    if (activeSort === "size") {
      sortedSneakers.sort((a, b) => a.size - b.size);
    }
    if (activeSort === "price") {
      sortedSneakers.sort((a, b) => a.price - b.price);
    }
    state$.sneakers.set(sortedSneakers);
  }, [activeSort, sneakers]);

  if (sneakers.length === 0) {
    return <EmptyCollection />;
  }

  return (
    <>
      <SortPanel sortBy={activeSort} />
      <CardsContainer>
        {sneakers.map((sneaker) => (
          <Card
            name={sneaker.name}
            year={sneaker.year}
            size={sneaker.size}
            price={sneaker.price}
            brand={sneaker.brand}
            rate={sneaker.rate}
            key={sneaker._id}
          />
        ))}
      </CardsContainer>
    </>
  );
};

export default Collection;
