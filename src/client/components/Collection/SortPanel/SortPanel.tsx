import React from "react";
import Typography from "../../Typography/Typography";
import Button from "../../Button/Button";
import {
  StyledSearchResultWrapper,
  StyledSortButton,
  StyledSortPanel,
  StyledSortPanelButtonsWrapper,
} from "./SortPanel.styled";
import { useDeviceSize } from "../../../hooks/useDeviceSize";
import { breakpointSize } from "../../../ui/theme/breakpoints";
import { state$ } from "../../../store/store";
import { SneakerSort } from "../../../enums/sneakers";

const SortPanel: React.FC = () => {
  const { windowWidth } = useDeviceSize();
  const isTablet = windowWidth <= breakpointSize.tablet;
  const searchValue = state$.UI.searchValue.get();
  const searchResultsLength = state$.searchSneakers.get().length;

  const activeSort = state$.UI.activeSort;
  const isSortedByYearUp = activeSort.get() === SneakerSort.yearUp;
  const isSortedByYearDown = activeSort.get() === SneakerSort.yearDown;
  const isSortedBySizeUp = activeSort.get() === SneakerSort.sizeUp;
  const isSortedBySizeDown = activeSort.get() === SneakerSort.sizeDown;
  const isSortedByPriceUp = activeSort.get() === SneakerSort.priceUp;
  const isSortedByPriceDown = activeSort.get() === SneakerSort.priceDown;

  return (
    <StyledSortPanel $isVisible={true}>
      <StyledSearchResultWrapper $hasSearchValue={searchValue.length > 0}>
        {searchValue.length > 0 && (
          <>
            <Typography variant="label">Search results for</Typography>
            <Typography variant="h3" style={{ margin: 0 }}>
              {searchValue} {` (${searchResultsLength})`}
            </Typography>
          </>
        )}
      </StyledSearchResultWrapper>
      <StyledSortPanelButtonsWrapper>
        {!isTablet && (
          <>
            <Typography variant="label">Sort by:</Typography>
            <StyledSortButton whileTap={{ scale: 0.9 }}>
              <Button
                variant={
                  isSortedByYearUp || isSortedByYearDown
                    ? "primary"
                    : "secondary"
                }
                size={"small"}
                label={!isSortedByYearDown ? "Oldest Year" : "Newest Year"}
                icon={{
                  name: "calendar",
                  color:
                    isSortedByYearUp || isSortedByYearDown ? "White" : "Black",
                }}
                onClick={() =>
                  activeSort.get() === SneakerSort.yearUp
                    ? activeSort.set(SneakerSort.yearDown)
                    : activeSort.set(SneakerSort.yearUp)
                }
                isActive={isSortedByYearUp || isSortedByYearDown}
              />
            </StyledSortButton>
            <StyledSortButton whileTap={{ scale: 0.9 }}>
              <Button
                variant={
                  isSortedBySizeUp || isSortedBySizeDown
                    ? "primary"
                    : "secondary"
                }
                size={"small"}
                label={!isSortedBySizeDown ? "Smallest Size" : "Largest Size"}
                icon={{
                  name: "size",
                  color:
                    isSortedBySizeUp || isSortedBySizeDown ? "White" : "Black",
                }}
                onClick={() =>
                  activeSort.get() === SneakerSort.sizeUp
                    ? activeSort.set(SneakerSort.sizeDown)
                    : activeSort.set(SneakerSort.sizeUp)
                }
                isActive={isSortedBySizeUp || isSortedBySizeDown}
              />
            </StyledSortButton>
            <StyledSortButton whileTap={{ scale: 0.9 }}>
              <Button
                variant={
                  isSortedByPriceUp || isSortedByPriceDown
                    ? "primary"
                    : "secondary"
                }
                size={"small"}
                label={!isSortedByPriceDown ? "Lowest Price" : "Highest Price"}
                icon={{
                  name: "dollar-sign",
                  color:
                    isSortedByPriceUp || isSortedByPriceDown
                      ? "White"
                      : "Black",
                }}
                onClick={() =>
                  activeSort.get() === SneakerSort.priceUp
                    ? activeSort.set(SneakerSort.priceDown)
                    : activeSort.set(SneakerSort.priceUp)
                }
                isActive={isSortedByPriceUp || isSortedByPriceDown}
              />
            </StyledSortButton>
          </>
        )}
      </StyledSortPanelButtonsWrapper>
    </StyledSortPanel>
  );
};

export default SortPanel;
