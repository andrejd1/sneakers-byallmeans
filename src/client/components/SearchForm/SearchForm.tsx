import React, { ChangeEvent, useCallback, useEffect, useRef } from "react";
import { StyledSearchForm, StyledSearchFormInput } from "./SearchForm.styled";
import Icon from "../Icon/Icon";
import { state$ } from "../../store/store";
import { colors } from "../../ui/theme/colors";
import { useSneakerContext } from "../../context/SneakerProvider";
import debounce from "lodash/debounce";
import { useSearchParams } from "react-router-dom";

const SearchForm: React.FC = () => {
  const sneakers = state$.sneakers;
  const searchValue = state$.UI.searchValue;
  const searchSneakers = state$.searchSneakers;
  const { isLoading } = useSneakerContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (query && inputRef.current) {
      searchValue.set(query);
      inputRef.current.value = query;
    }
  }, [query]);

  useEffect(() => {
    if (searchValue.get() !== "") {
      const filtered = [...state$.sneakers.get()].filter((sneaker) => {
        const lowerSearchValue = searchValue.get().toLowerCase();

        return (
          sneaker.name.toLowerCase().includes(lowerSearchValue) ||
          sneaker.brand.toLowerCase().includes(lowerSearchValue)
        );
      });
      searchSneakers.set(filtered);
      setSearchParams((searchParams) => {
        searchParams.set("page", "1");
        searchParams.set("search", searchValue.get());
        return searchParams;
      });
    } else {
      searchSneakers.set([...sneakers.get()]);
      searchParams.delete("search");
      setSearchParams(searchParams);
    }
  }, [searchValue.get()]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    searchValue.set(e.target.value);
  };

  const debounceHandleSearch = useCallback(debounce(handleChange, 500), []);

  return (
    <StyledSearchForm
      whileHover={{ border: `1px solid ${colors.Hover}` }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon name="search" color="Gray80" />
      <StyledSearchFormInput
        ref={inputRef}
        disabled={isLoading}
        type="text"
        className="form-control"
        placeholder="Search"
        onChange={debounceHandleSearch}
      />
    </StyledSearchForm>
  );
};

export default SearchForm;
