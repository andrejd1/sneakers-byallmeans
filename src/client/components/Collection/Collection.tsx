import React from "react";
import { Sneaker } from "../../types/sneakers";
import SortPanel from "./SortPanel/SortPanel";
import Card from "../Card/Card";
import { CardsContainer } from "./Collection.styled";
import { state$ } from "../../store/store";
import { SneakerCollectionTypes } from "../../views/SneakerCollection/SneakerCollection.types";
import EmptySearchForm from "../Empty/EmptySearchForm/EmptySearchForm";

const Collection: React.FC<SneakerCollectionTypes> = ({ onDeleteSneaker }) => {
  const searchValue = state$.UI.searchValue;
  const sneakers = searchValue.get()
    ? [...state$.searchSneakers.get()]
    : [...state$.sneakers.get()];

  const handleCardOnClick = (sneaker: Sneaker) => {
    state$.UI.activeSneaker.set(sneaker);
    state$.UI.isSneakerFormVisible.set(true);
  };

  if (sneakers.length === 0) {
    return <EmptySearchForm />;
  }

  return (
    <>
      <SortPanel />
      <CardsContainer>
        {sneakers.map((sneaker) => (
          <div key={sneaker._id} onClick={() => handleCardOnClick(sneaker)}>
            <Card
              _id={sneaker._id}
              name={sneaker.name}
              year={sneaker.year}
              size={sneaker.size}
              price={sneaker.price}
              brand={sneaker.brand}
              rate={sneaker.rate}
              onDeleteSneaker={onDeleteSneaker}
            />
          </div>
        ))}
      </CardsContainer>
    </>
  );
};

export default Collection;
