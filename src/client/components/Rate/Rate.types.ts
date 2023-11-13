import { UseFormRegisterReturn, UseFormSetValue } from "react-hook-form";
import { SneakerInput } from "../../types/sneakers";

export type RateTypes = {
  rating?: number;
  register: UseFormRegisterReturn;
  setValue: UseFormSetValue<SneakerInput>;
};
