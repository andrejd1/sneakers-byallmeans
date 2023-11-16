import React from "react";
import Typography from "../../Typography/Typography";
import Button from "../../Button/Button";
import {
  StyledAddNewSneakersButtonContainer,
  StyledHeader,
  StyledHeaderButtonsContainer,
} from "./Header.styled";
import { useDeviceSize } from "../../../hooks/useDeviceSize";
import { breakpointSize } from "../../../ui/theme/breakpoints";
import SearchForm from "../../SearchForm/SearchForm";
import { state$ } from "../../../store/store";
import DropdownButton from "../SortPanel/Mobile/DropdownButton/DropdownButton";
import MobileSortPanel from "../SortPanel/Mobile/MobileSortPanel";

const CollectionHeader: React.FC = () => {
  const { windowWidth } = useDeviceSize();
  const isTablet = windowWidth <= breakpointSize.tablet;
  const searchSneakers = state$.searchSneakers.get();

  return (
    <StyledHeader>
      <Typography variant={isTablet ? "h2" : "h1"}>Your collection</Typography>
      {isTablet && <DropdownButton />}
      {isTablet && <MobileSortPanel />}
      <StyledHeaderButtonsContainer>
        <SearchForm />
        <StyledAddNewSneakersButtonContainer
          $hasResults={searchSneakers.length > 0}
        >
          <Button
            variant={"primary"}
            size={"large"}
            label={"Add new sneakers"}
            isActive={false}
            icon={{
              name: "plus",
              color: "White",
            }}
            onClick={() => state$.UI.isSneakerFormVisible.set(true)}
          />
        </StyledAddNewSneakersButtonContainer>
      </StyledHeaderButtonsContainer>
    </StyledHeader>
  );
};

export default CollectionHeader;
