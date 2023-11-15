import React, { ChangeEvent, useEffect } from "react";
import { StyledSearchForm, StyledSearchFormInput } from "./SearchForm.styled";
import Icon from "../Icon/Icon";
import { state$ } from "../../store/store";
import { Sneaker } from "../../types/sneakers";
import { SneakerSort } from "../../enums/sneakers";

const SearchForm: React.FC = () => {
  const searchValue = state$.UI.searchValue;
  const sneakers = state$.sneakers;
  const searchSneakers = state$.searchSneakers;
  const activeSort = state$.UI.activeSort.get();

  useEffect(() => {
    if (searchValue.get() !== undefined && searchValue.get() !== "") {
      searchSneakers.set(
        searchValue.get().length > 0
          ? [...state$.sneakers.get()].filter((sneaker) => {
              const lowerSearchValue = searchValue.get().toLowerCase();

              return (
                sneaker.name.toLowerCase().includes(lowerSearchValue) ||
                sneaker.brand.toLowerCase().includes(lowerSearchValue)
              );
            })
          : [...sneakers.get()],
      );
    } else {
      searchSneakers.set([...sneakers.get()]);
    }
  }, [searchValue.get()]);

  useEffect(() => {
    const sortedSneakers: Sneaker[] =
      searchValue.get() !== undefined && searchValue.get() !== ""
        ? [...state$.searchSneakers.get()]
        : [...state$.sneakers.get()];
    switch (activeSort) {
      case SneakerSort.yearUp:
        sortedSneakers.sort((a, b) => a.year - b.year);
        break;
      case SneakerSort.yearDown:
        sortedSneakers.sort((a, b) => b.year - a.year);
        break;
      case SneakerSort.sizeUp:
        sortedSneakers.sort((a, b) => a.size - b.size);
        break;
      case SneakerSort.sizeDown:
        sortedSneakers.sort((a, b) => b.size - a.size);
        break;
      case SneakerSort.priceUp:
        sortedSneakers.sort((a, b) => a.price - b.price);
        break;
      case SneakerSort.priceDown:
        sortedSneakers.sort((a, b) => b.price - a.price);
        break;
      default:
        sortedSneakers.sort((a, b) => a.year - b.year);
        break;
    }

    if (searchValue.get() !== undefined && searchValue.get() !== "") {
      state$.searchSneakers.set(sortedSneakers);
    } else {
      state$.sneakers.set(sortedSneakers);
    }
  }, [activeSort, sneakers]);

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
