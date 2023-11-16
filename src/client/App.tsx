import React, { useEffect } from "react";
import { Sneaker } from "./types/sneakers";
import SneakerCollection from "./views/SneakerCollection/SneakerCollection";
import Container from "./components/Container/Container";
import { state$ } from "./store/store";
import { GlobalStyles } from "./globalStyles";
import { SneakerSort } from "./enums/sneakers";
import { useSneakerContext } from "./context/SneakerProvider";

const App: React.FC = () => {
  const { sneakers } = useSneakerContext();

  const isSneakerFormVisible = state$.UI.isSneakerFormVisible.get();
  const searchValue = state$.UI.searchValue;
  const searchSneakers = state$.searchSneakers;
  const activeSort = state$.UI.activeSort.get();

  useEffect(() => {
    if (sneakers !== undefined && sneakers.length > 0) {
      state$.sneakers.set([...sneakers]);
      state$.searchSneakers.set([...sneakers]);
    }
  }, [sneakers]);

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
  }, [activeSort, sneakers, searchSneakers]);

  useEffect(() => {
    isSneakerFormVisible
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isSneakerFormVisible]);

  return (
    <>
      <GlobalStyles />
      <Container>
        <SneakerCollection />
      </Container>
    </>
  );
};

export default App;
