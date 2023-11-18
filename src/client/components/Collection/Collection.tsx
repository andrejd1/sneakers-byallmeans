import React, { Suspense } from "react";
import { Sneaker } from "../../types/sneakers";
import SortPanel from "./SortPanel/SortPanel";
import Card from "../Card/Card";
import { CardsContainer } from "./Collection.styled";
import { state$ } from "../../store/store";
import EmptySearchForm from "../Empty/EmptySearchForm/EmptySearchForm";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import { useSneakerContext } from "../../context/SneakerProvider";
import EmptyCollection from "../Empty/EmptyCollection/EmptyCollection";

const LazySneakerForm = React.lazy(
  () => import("../../views/SneakerForm/SneakerForm"),
);

const Collection: React.FC = () => {
  const searchValue = state$.UI.searchValue;
  const sneakers = searchValue.get()
    ? [...state$.searchSneakers.get()]
    : [...state$.sneakers.get()];
  const { error, isLoading } = useSneakerContext();
  const isSneakerFormVisible = state$.UI.isSneakerFormVisible.get();

  if (error) {
    return (
      <Error
        title={"Oh no! Failed to load data :("}
        message={`We were unable to load the data...`}
      />
    );
  }

  if (isLoading) {
    return <Loader />;
  }

  if (sneakers?.length === 0 && searchValue.peek().length === 0) {
    return <EmptyCollection />;
  }

  if (sneakers.length === 0 && searchValue.peek().length > 0) {
    return <EmptySearchForm />;
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
            />
          </div>
        ))}
        {isSneakerFormVisible && (
          <Suspense fallback={<Loader />}>
            <LazySneakerForm />
          </Suspense>
        )}
      </CardsContainer>
    </>
  );
};

export default Collection;
