import React from "react";
import { useMutation, useQuery } from "react-query";
import { createSneaker, deleteSneaker, fetchSneakers } from "./api/endpoints";
import { SneakerInput } from "./types/sneakers";
import SneakerCollection from "./views/SneakerCollection/SneakerCollection";
import Container from "./components/Container/Container";

const App: React.FC = () => {
  const { data: sneakers, refetch } = useQuery("sneakers", fetchSneakers);

  const mutation = useMutation(createSneaker, {
    onSuccess: () => {
      refetch();
    },
  });

  const handleCreateSneaker = async (newSneaker: SneakerInput) => {
    await mutation.mutateAsync(newSneaker);
  };

  const handleDeleteSneaker = async (id: string) => {
    await deleteSneaker(id);
    refetch();
  };

  return (
    <Container>
      {/* Sneaker Input Form */}
      {/*<SneakerForm onCreateSneaker={handleCreateSneaker} />*/}
      {/* Sneaker Collection */}
      <SneakerCollection
        sneakers={sneakers ?? []}
        onDeleteSneaker={handleDeleteSneaker}
      />
      {/* Sneaker Sorting */}
      {/* Query-like Interaction */}
    </Container>
  );
};

export default App;
