import React, { createContext, ReactNode, useContext } from "react";
import { useMutation, useQuery } from "react-query";
import {
  createSneaker,
  deleteSneaker,
  fetchSneakers,
  updateSneaker,
} from "../api/endpoints";
import { Sneaker, SneakerInput } from "../types/sneakers";

type SneakerContextProps = {
  children: ReactNode;
};

type SneakerContextValue = {
  sneakers: Sneaker[] | undefined;
  isLoading: boolean;
  error: unknown;
  handleCreateSneaker: (newSneaker: SneakerInput) => Promise<void>;
  handleUpdateSneaker: (
    id: string,
    updatedSneaker: SneakerInput,
  ) => Promise<void>;
  handleDeleteSneaker: (id: string) => Promise<void>;
};

const SneakerContext = createContext<SneakerContextValue | undefined>(
  undefined,
);

export const SneakerProvider: React.FC<SneakerContextProps> = ({
  children,
}) => {
  const {
    data: sneakers,
    isLoading,
    error,
    refetch,
  } = useQuery("sneakers", fetchSneakers);

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

  const value: SneakerContextValue = {
    sneakers,
    isLoading,
    error,
    handleCreateSneaker,
    handleUpdateSneaker,
    handleDeleteSneaker,
  };

  return (
    <SneakerContext.Provider value={value}>{children}</SneakerContext.Provider>
  );
};

export const useSneakerContext = () => {
  const context = useContext(SneakerContext);
  if (!context) {
    throw new Error("useSneakerContext must be used within a SneakerProvider");
  }
  return context;
};
