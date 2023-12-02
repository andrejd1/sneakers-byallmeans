import React, { Suspense, useState } from "react";
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
import Pagination from "../Pagination/Pagination";

const LazySneakerForm = React.lazy(
  () => import("../../views/SneakerForm/SneakerForm"),
);

const SNEAKERS_PER_PAGE = 12; // Adjust the number of sneakers per page

const Collection: React.FC = () => {
  const searchValue = state$.UI.searchValue;
  const sneakers = searchValue.get()
    ? [...state$.searchSneakers.get()]
    : [...state$.sneakers.get()];
  const { error, isLoading } = useSneakerContext();
  const isSneakerFormVisible = state$.UI.isSneakerFormVisible.get();
  const [currentPage, setCurrentPage] = useState(1);

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

  const totalPages = Math.ceil(sneakers.length / SNEAKERS_PER_PAGE);

  const renderVisibleSneakers = () => {
    const startIndex = (currentPage - 1) * SNEAKERS_PER_PAGE;
    const endIndex = startIndex + SNEAKERS_PER_PAGE;
    const visibleSneakersSlice = sneakers.slice(startIndex, endIndex);

    return visibleSneakersSlice.map((sneaker) => (
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
    ));
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <SortPanel />
      <CardsContainer $hasPagination={totalPages > 1}>
        {renderVisibleSneakers()}
        {isSneakerFormVisible && (
          <Suspense fallback={<Loader />}>
            <LazySneakerForm />
          </Suspense>
        )}
      </CardsContainer>
      {totalPages > 1 && (
        <Pagination
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </>
  );
};

export default Collection;
