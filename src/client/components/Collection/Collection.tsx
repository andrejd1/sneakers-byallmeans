import React from "react";
import { Sneaker } from "../../types/sneakers";
import SortPanel from "./SortPanel/SortPanel";
import Card from "../Card/Card";
import { CardsContainer } from "./Collection.styled";
import { state$ } from "../../store/store";
import { SneakerCollectionTypes } from "../../views/SneakerCollection/SneakerCollection.types";
import EmptySearchForm from "../Empty/EmptySearchForm/EmptySearchForm";
import EmptyCollection from "../Empty/EmptyCollection/EmptyCollection";

const Collection: React.FC<SneakerCollectionTypes> = ({ onDeleteSneaker }) => {
  const searchValue = state$.UI.searchValue;
  const sneakers = searchValue.get()
    ? [...state$.searchSneakers.get()]
    : [...state$.sneakers.get()];

  if (state$.searchSneakers.get().length === 0 && searchValue.get() !== "") {
    return <EmptySearchForm />;
  }

  if (
    state$.sneakers.get().length === 0 &&
    (searchValue.get() === "" || searchValue.get() === undefined)
  ) {
    return <EmptyCollection />;
  }

  const handleCardOnClick = (sneaker: Sneaker) => {
    state$.UI.activeSneaker.set(sneaker);
    state$.UI.isSneakerFormVisible.set(true);
  };

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
