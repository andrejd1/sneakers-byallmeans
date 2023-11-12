import axios from "axios";
import { Sneaker, SneakerInput } from "../types/sneakers";

export const fetchSneakers = async (): Promise<Sneaker[]> => {
  const response = await axios.get("http://localhost:3000/sneakers");
  return response.data;
};

export const createSneaker = async (
  newSneaker: SneakerInput,
): Promise<Sneaker> => {
  const response = await axios.post(
    "http://localhost:3000/sneakers",
    newSneaker,
  );
  return response.data;
};

export const deleteSneaker = async (id: string) => {
  const response = await axios.delete(`http://localhost:3000/sneakers/${id}`);
  return response.data;
};
