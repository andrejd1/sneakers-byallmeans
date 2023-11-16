import React, { Suspense, useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import {
  createSneaker,
  deleteSneaker,
  fetchSneakers,
  updateSneaker,
} from "./api/endpoints";
import { Sneaker, SneakerInput } from "./types/sneakers";
import SneakerCollection from "./views/SneakerCollection/SneakerCollection";
import Container from "./components/Container/Container";
import { state$ } from "./store/store";
import Error from "./components/Error/Error";
import Loader from "./components/Loader/Loader";
import { GlobalStyles } from "./globalStyles";
import EmptyCollection from "./components/Empty/EmptyCollection/EmptyCollection";
import { SneakerSort } from "./enums/sneakers";

const LazySneakerForm = React.lazy(
  () => import("./views/SneakerForm/SneakerForm"),
);

const App: React.FC = () => {
  const {
    data: sneakers,
    isLoading,
    error,
    refetch,
  } = useQuery("sneakers", fetchSneakers);
  const isSneakerFormVisible = state$.UI.isSneakerFormVisible.get();
  const searchValue = state$.UI.searchValue;
  const searchSneakers = state$.searchSneakers;
  const activeSort = state$.UI.activeSort.get();

  useEffect(() => {
    if (sneakers !== undefined && sneakers.length > 0) {
      state$.sneakers.set([...sneakers]);
      state$.searchSneakers.set([...sneakers]);
    }
  }, [sneakers]);

  useEffect(() => {
    const sortedSneakers: Sneaker[] =
      searchValue.get() !== undefined && searchValue.get() !== ""
        ? [...state$.searchSneakers.get()]
        : [...state$.sneakers.get()];
    switch (activeSort) {
      case SneakerSort.yearUp:
        sortedSneakers.sort((a, b) => a.year - b.year);
        break;
      case SneakerSort.yearDown:
        sortedSneakers.sort((a, b) => b.year - a.year);
        break;
      case SneakerSort.sizeUp:
        sortedSneakers.sort((a, b) => a.size - b.size);
        break;
      case SneakerSort.sizeDown:
        sortedSneakers.sort((a, b) => b.size - a.size);
        break;
      case SneakerSort.priceUp:
        sortedSneakers.sort((a, b) => a.price - b.price);
        break;
      case SneakerSort.priceDown:
        sortedSneakers.sort((a, b) => b.price - a.price);
        break;
      default:
        sortedSneakers.sort((a, b) => a.year - b.year);
        break;
    }

    if (searchValue.get() !== undefined && searchValue.get() !== "") {
      state$.searchSneakers.set(sortedSneakers);
    } else {
      state$.sneakers.set(sortedSneakers);
    }
  }, [activeSort, sneakers, searchSneakers]);

  useEffect(() => {
    isSneakerFormVisible
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isSneakerFormVisible]);

  const mutation = useMutation(createSneaker, {
    onSuccess: () => {
      refetch();
    },
  });

  const handleCreateSneaker = async (newSneaker: SneakerInput) => {
    await mutation.mutateAsync(newSneaker);
  };

  const handleUpdateSneaker = async (
    id: string,
    updatedSneaker: SneakerInput,
  ) => {
    await updateSneaker(id, updatedSneaker);
    refetch();
  };

  const handleDeleteSneaker = async (id: string) => {
    await deleteSneaker(id);
    refetch();
  };

  // enableReactTracking({
  //   auto: true,
  // });

  if (error)
    return (
      <Error
        title={"Oh no! Failed to load data :("}
        message={`We were unable to load the data...`}
      />
    );

  if (isLoading) {
    return <Loader />;
  }

  if (sneakers?.length === 0) {
    return <EmptyCollection />;
  }

  return (
    <>
      <GlobalStyles />
      <Container>
        {isSneakerFormVisible && (
          <Suspense fallback={null}>
            <LazySneakerForm
              onCreateSneaker={handleCreateSneaker}
              onUpdateSneaker={handleUpdateSneaker}
              onDeleteSneaker={handleDeleteSneaker}
            />
          </Suspense>
        )}
        <SneakerCollection onDeleteSneaker={handleDeleteSneaker} />
      </Container>
    </>
  );
};

export default App;
