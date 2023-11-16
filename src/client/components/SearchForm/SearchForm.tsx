import React, { ChangeEvent, useEffect } from "react";
import { StyledSearchForm, StyledSearchFormInput } from "./SearchForm.styled";
import Icon from "../Icon/Icon";
import { state$ } from "../../store/store";
import { colors } from "../../ui/theme/colors";

const SearchForm: React.FC = () => {
  const sneakers = state$.sneakers;
  const searchValue = state$.UI.searchValue;
  const searchSneakers = state$.searchSneakers;

  useEffect(() => {
    if (searchValue.get() !== "") {
      searchSneakers.set(
        [...state$.sneakers.get()].filter((sneaker) => {
          const lowerSearchValue = searchValue.get().toLowerCase();

          return (
            sneaker.name.toLowerCase().includes(lowerSearchValue) ||
            sneaker.brand.toLowerCase().includes(lowerSearchValue)
          );
        }),
      );
    } else {
      searchSneakers.set([...sneakers.get()]);
    }
  }, [searchValue.get()]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    searchValue.set(e.target.value);
  };

  return (
    <StyledSearchForm
      whileHover={{ border: `1px solid ${colors.Hover}` }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon name="search" color="Gray80" />
      <StyledSearchFormInput
        $hasResults={searchSneakers.get().length > 0}
        type="text"
        className="form-control"
        placeholder="Search"
        onChange={handleChange}
      />
    </StyledSearchForm>
  );
};

export default SearchForm;
