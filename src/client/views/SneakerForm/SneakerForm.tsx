import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SneakerInput } from "../../types/sneakers";
import Typography from "../../components/Typography/Typography";
import {
  StyledForm,
  StyledFormBackdrop,
  StyledFormButtonsContainer,
  StyledFormCloseWrapper,
  StyledFormContainer,
  StyledFormTitleContainer,
} from "./SneakerForm.styled";
import { state$ } from "../../store/store";
import Icon from "../../components/Icon/Icon";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { SneakerFormProps } from "./SneakerForm.types";
import Rate from "../../components/Rate/Rate";

const SneakerForm: React.FC<SneakerFormProps> = ({
  onCreateSneaker,
  onDeleteSneaker,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
    setValue,
  } = useForm<SneakerInput>();

  const onSubmit: SubmitHandler<SneakerInput> = (data) => {
    onCreateSneaker(data);
    reset();
    state$.UI.isSneakerFormVisible.set(false);
  };

  const sneaker = state$.UI.activeSneaker.get();
  const isSneakerFormVisible = state$.UI.isSneakerFormVisible.get();

  return (
    <>
      <StyledFormBackdrop
        initial={{ opacity: 0, visibility: "hidden" }}
        animate={
          isSneakerFormVisible
            ? { opacity: 0.8, visibility: "visible" }
            : {
                opacity: 0,
                display: "none",
                transition: {
                  visibility: {
                    delay: 0.4,
                  },
                },
              }
        }
        onClick={() => {
          state$.UI.activeSneaker.set(null);
          state$.UI.isSneakerFormVisible.set(false);
        }}
      />
      <StyledFormContainer
        transition={{
          type: "linear",
          duration: 0.4,
          delay: 0,
        }}
        initial={{ x: "100%" }}
        animate={isSneakerFormVisible ? { x: "0%" } : { x: "100%" }}
      >
        <StyledFormTitleContainer>
          <Typography variant="h2">
            {sneaker?.name ?? `Add sneakers\nto your collection`}
          </Typography>
          <StyledFormCloseWrapper
            onClick={() => {
              state$.UI.activeSneaker.set(null);
              state$.UI.isSneakerFormVisible.set(false);
            }}
          >
            <Icon name="close" color="Black" />
          </StyledFormCloseWrapper>
        </StyledFormTitleContainer>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Name"
            type="text"
            register={register("name", { required: "The name is required!" })}
            defaultValue={sneaker?.name}
            error={Boolean(errors.name)}
            errorMessage={errors.name?.message}
          />
          <Input
            label="Brand"
            type="text"
            register={register("brand", {
              required: "The brand is required!",
            })}
            defaultValue={sneaker?.brand}
            error={Boolean(errors.brand)}
            errorMessage={errors.brand?.message}
          />
          <Input
            label="Price"
            type="number"
            register={register("price", {
              required: "The price is required!",
            })}
            defaultValue={sneaker?.price.toString()}
            error={Boolean(errors.price)}
            errorMessage={errors.price?.message}
          />
          <Input
            label="Size US"
            type="number"
            register={register("size", { required: "The size is required!" })}
            defaultValue={sneaker?.size.toString()}
            error={Boolean(errors.size)}
            errorMessage={errors.size?.message}
          />
          <Input
            label="Year"
            type="number"
            register={register("year", { required: "The year is required!" })}
            defaultValue={sneaker?.year.toString()}
            error={Boolean(errors.year)}
            errorMessage={errors.year?.message}
          />
          <Rate
            rating={sneaker?.rate}
            setValue={setValue}
            register={register("rate")}
          />
          {sneaker ? (
            <StyledFormButtonsContainer>
              <Button
                variant="primary"
                size="large"
                label="Save"
                disabled={isDirty}
                isActive={false}
              />
              <Button
                variant="primary"
                size="large"
                label="Delete"
                isActive={true}
                onClick={(event) => {
                  event.preventDefault();
                  if (onDeleteSneaker) {
                    onDeleteSneaker(sneaker._id);
                    state$.UI.isSneakerFormVisible.set(false);
                  }
                }}
                icon={{ name: "trash", color: "White" }}
              />
            </StyledFormButtonsContainer>
          ) : (
            <Button
              variant="primary"
              size="large"
              label="Add new sneakers"
              isActive={false}
              icon={{ name: "plus", color: "White" }}
            />
          )}
        </StyledForm>
      </StyledFormContainer>
    </>
  );
};

export default SneakerForm;
