import axios from "axios";
import { Sneaker, SneakerInput } from "../types/sneakers";
import { extendedSeedData } from "../../server/seed";

// export const fetchSneakers = async (): Promise<Sneaker[]> => {
//   try {
//     const response = await axios.get(
//       `${process.env.VITE_LOCAL_API_BASE_URL}/sneakers`,
//     );
//     return response.data;
//   } catch (error) {
//     // Handle the error, log it, throw a custom error, etc.
//     console.error("Error fetching sneakers:", error);
//     throw error; // Re-throwing the error so that the calling code can handle it.
//   }
// };

//mock
export const fetchSneakers = async (): Promise<Sneaker[]> => {
  return extendedSeedData;
};

export const createSneaker = async (
  newSneaker: SneakerInput,
): Promise<Sneaker> => {
  try {
    const response = await axios.post(
      `${process.env.VITE_LOCAL_API_BASE_URL}/sneakers`,
      newSneaker,
    );
    return response.data;
  } catch (error) {
    console.error("Error creating sneaker:", error);
    throw error;
  }
};

export const updateSneaker = async (
  id: string,
  updatedSneaker: SneakerInput,
): Promise<Sneaker> => {
  try {
    const response = await axios.put(
      `${process.env.VITE_LOCAL_API_BASE_URL}/sneakers/${id}`,
      updatedSneaker,
    );
    return response.data;
  } catch (error) {
    console.error("Error updating sneaker:", error);
    throw error;
  }
};

export const deleteSneaker = async (id: string) => {
  try {
    const response = await axios.delete(
      `${process.env.VITE_LOCAL_API_BASE_URL}/sneakers/${id}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting sneaker:", error);
    throw error;
  }
};
