import React, { ChangeEvent, useEffect } from "react";
import { StyledSearchForm, StyledSearchFormInput } from "./SearchForm.styled";
import Icon from "../Icon/Icon";
import { state$ } from "../../store/store";

const SearchForm: React.FC = () => {
  const searchValue = state$.UI.searchValue;
  const searchSneakers = state$.searchSneakers;

  useEffect(() => {
    if (searchValue.get() !== undefined && searchValue.get() !== "") {
      searchSneakers.set(
        [...state$.sneakers.get()].filter(
          (sneaker) =>
            sneaker.name
              .toLowerCase()
              .includes(searchValue.get().toLowerCase()) ||
            sneaker.brand
              .toLowerCase()
              .includes(searchValue.get().toLowerCase()),
        ),
      );
    } else {
      searchSneakers.set([...state$.sneakers.get()]);
    }
  }, [searchValue.get()]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    searchValue.set(e.target.value);
  };

  return (
    <StyledSearchForm>
      <Icon name="search" color="Gray80" />
      <StyledSearchFormInput
        type="text"
        className="form-control"
        placeholder="Search"
        onChange={handleChange}
      />
    </StyledSearchForm>
  );
};

export default SearchForm;
