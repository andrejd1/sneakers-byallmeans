import React from "react";
import Button from "../../../Button/Button";
import {
  StyledMobileSortPanel,
  StyledSortPanelButtonsWrapper,
} from "../SortPanel.styled";
import { state$ } from "../../../../store/store";
import { SneakerSort } from "../../../../enums/sneakers";

const MobileSortPanel: React.FC = () => {
  const activeSort = state$.UI.activeSort;
  const isDropdownOpen = state$.UI.isDropdownButtonOpen;
  const isSortedByYearDown = activeSort.get() === SneakerSort.yearDown;
  const isSortedByYearUp = activeSort.get() === SneakerSort.yearUp;
  const isSortedBySizeDown = activeSort.get() === SneakerSort.sizeDown;
  const isSortedBySizeUp = activeSort.get() === SneakerSort.sizeUp;
  const isSortedByPriceDown = activeSort.get() === SneakerSort.priceDown;
  const isSortedByPriceUp = activeSort.get() === SneakerSort.priceUp;

  return (
    <StyledMobileSortPanel $isVisible={isDropdownOpen.get()}>
      <StyledSortPanelButtonsWrapper>
        <Button
          variant={
            isSortedByYearUp || isSortedByYearDown ? "primary" : "secondary"
          }
          size={"small"}
          label={!isSortedByYearDown ? "Oldest Year" : "Newest Year"}
          icon={{
            name: "calendar",
            color: isSortedByYearUp || isSortedByYearDown ? "White" : "Black",
          }}
          onClick={() =>
            activeSort.get() === SneakerSort.yearUp
              ? activeSort.set(SneakerSort.yearDown)
              : activeSort.set(SneakerSort.yearUp)
          }
          isActive={isSortedByYearUp || isSortedByYearDown}
        />
        <Button
          variant={
            isSortedBySizeUp || isSortedBySizeDown ? "primary" : "secondary"
          }
          size={"small"}
          label={!isSortedBySizeDown ? "Smallest Size" : "Largest Size"}
          icon={{
            name: "size",
            color: isSortedBySizeUp || isSortedBySizeDown ? "White" : "Black",
          }}
          onClick={() =>
            activeSort.get() === SneakerSort.sizeUp
              ? activeSort.set(SneakerSort.sizeDown)
              : activeSort.set(SneakerSort.sizeUp)
          }
          isActive={isSortedBySizeUp || isSortedBySizeDown}
        />
        <Button
          variant={
            isSortedByPriceUp || isSortedByPriceDown ? "primary" : "secondary"
          }
          size={"small"}
          label={!isSortedByPriceDown ? "Lowest Price" : "Highest Price"}
          icon={{
            name: "dollar-sign",
            color: isSortedByPriceUp || isSortedByPriceDown ? "White" : "Black",
          }}
          onClick={() =>
            activeSort.get() === SneakerSort.priceUp
              ? activeSort.set(SneakerSort.priceDown)
              : activeSort.set(SneakerSort.priceUp)
          }
          isActive={isSortedByPriceUp || isSortedByPriceDown}
        />
        <Button
          variant="secondary"
          size="small"
          label=""
          isActive={false}
          icon={{
            name: "chevron-up",
            align: "right",
            color: "Black",
          }}
          onClick={() => isDropdownOpen.set(false)}
        />
      </StyledSortPanelButtonsWrapper>
    </StyledMobileSortPanel>
  );
};

export default MobileSortPanel;
