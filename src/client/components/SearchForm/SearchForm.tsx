import React from "react";
import { StyledSearchForm, StyledSearchFormInput } from "./SearchForm.styled";
import Icon from "../Icon/Icon";

const SearchForm: React.FC = () => {
  return (
    <StyledSearchForm>
      <Icon name="search" color="Gray80" />
      <StyledSearchFormInput
        type="text"
        className="form-control"
        placeholder="Search"
      />
    </StyledSearchForm>
  );
};

export default SearchForm;
