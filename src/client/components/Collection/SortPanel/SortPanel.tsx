import React from "react";
import Typography from "../../Typography/Typography";
import Button from "../../Button/Button";
import { StyledSortPanel } from "./SortPanel.styled";
import { useDeviceSize } from "../../../hooks/useDeviceSize";
import { breakpointSize } from "../../../ui/theme/breakpoints";
import { state$ } from "../../../store/store";
import { SneakerSort } from "../../../enums/sneakers";

const SortPanel: React.FC = () => {
  const { windowWidth } = useDeviceSize();
  const isTablet = windowWidth <= breakpointSize.tablet;

  const activeSort = state$.UI.activeSort;
  const isSortedByYearUp = activeSort.get() === SneakerSort.yearUp;
  const isSortedByYearDown = activeSort.get() === SneakerSort.yearDown;
  const isSortedBySizeUp = activeSort.get() === SneakerSort.sizeUp;
  const isSortedBySizeDown = activeSort.get() === SneakerSort.sizeDown;
  const isSortedByPriceUp = activeSort.get() === SneakerSort.priceUp;
  const isSortedByPriceDown = activeSort.get() === SneakerSort.priceDown;

  return (
    <StyledSortPanel>
      {!isTablet && <Typography variant="label">Sort by:</Typography>}
      <Button
        variant={
          isSortedByYearUp || isSortedByYearDown ? "primary" : "secondary"
        }
        size={"small"}
        label={
          activeSort.get() === SneakerSort.yearUp
            ? "Oldest Year"
            : "Newest Year"
        }
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
        label={
          activeSort.get() === SneakerSort.sizeUp
            ? "Smallest Size"
            : "Largest Size"
        }
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
        label={
          activeSort.get() === SneakerSort.priceUp
            ? "Lowest Price"
            : "Highest Price"
        }
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
    </StyledSortPanel>
  );
};

export default SortPanel;
