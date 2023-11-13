import React, { Suspense, useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { createSneaker, fetchSneakers } from "./api/endpoints";
import { SneakerInput } from "./types/sneakers";
import SneakerCollection from "./views/SneakerCollection/SneakerCollection";
import Container from "./components/Container/Container";
import { enableReactTracking } from "@legendapp/state/config/enableReactTracking";
import { state$ } from "./store/store";
import Error from "./components/Error/Error";
import Loader from "./components/Loader/Loader";

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

  useEffect(() => {
    if (sneakers !== undefined && sneakers.length > 0) {
      state$.sneakers.set([...sneakers]);
    }
  }, [sneakers]);

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

  // const handleDeleteSneaker = async (id: string) => {
  //   await deleteSneaker(id);
  //   refetch();
  // };

  enableReactTracking({
    auto: true,
  });

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

  return (
    <Container>
      {/* Sneaker Input Form */}
      {isSneakerFormVisible && (
        <Suspense fallback={<Loader />}>
          <LazySneakerForm onCreateSneaker={handleCreateSneaker} />
        </Suspense>
      )}
      {/* Sneaker Collection */}
      <SneakerCollection />
      {/* Sneaker Sorting */}
      {/* Query-like Interaction */}
    </Container>
  );
};

export default App;
