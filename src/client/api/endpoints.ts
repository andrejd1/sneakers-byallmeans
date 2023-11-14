import axios from "axios";
import { Sneaker, SneakerInput } from "../types/sneakers";

export const fetchSneakers = async (): Promise<Sneaker[]> => {
  const response = await axios.get(
    `${process.env.VITE_LOCAL_API_BASE_URL}/sneakers`,
  );
  return response.data;
};

export const createSneaker = async (
  newSneaker: SneakerInput,
): Promise<Sneaker> => {
  const response = await axios.post(
    `${process.env.VITE_LOCAL_API_BASE_URL}/sneakers`,
    newSneaker,
  );
  return response.data;
};

export const updateSneaker = async (
  id: string,
  updatedSneaker: SneakerInput,
): Promise<Sneaker> => {
  const response = await axios.put(
    `${process.env.VITE_LOCAL_API_BASE_URL}/sneakers/${id}`,
    updatedSneaker,
  );
  return response.data;
};

export const deleteSneaker = async (id: string) => {
  const response = await axios.delete(
    `${process.env.VITE_LOCAL_API_BASE_URL}/sneakers/${id}`,
  );
  return response.data;
};
