// src/SneakerForm.tsx

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { SneakerInput } from "../../types/sneakers";
import Typography from "../Typography/Typography";

type SneakerFormProps = {
  onCreateSneaker: (newSneaker: SneakerInput) => void;
};

const SneakerForm: React.FC<SneakerFormProps> = ({ onCreateSneaker }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SneakerInput>();

  const onSubmit: SubmitHandler<SneakerInput> = (data) => {
    onCreateSneaker(data);
    reset();
  };

  return (
    <div>
      <Typography variant="h2">Add a New Sneaker</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            id="brand"
            {...register("brand", { required: true })}
          />
          {errors.brand && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            {...register("price", { required: true })}
          />
          {errors.price && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="size">Size:</label>
          <input
            type="number"
            id="size"
            {...register("size", { required: true })}
          />
          {errors.size && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="year">Year:</label>
          <input
            type="number"
            id="year"
            {...register("year", { required: true })}
          />
          {errors.year && <span>This field is required</span>}
        </div>
        <button type="submit">Add Sneaker</button>
      </form>
    </div>
  );
};

export default SneakerForm;
