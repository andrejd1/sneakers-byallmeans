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
import { useSneakerContext } from "../../../context/SneakerProvider";

const CollectionHeader: React.FC = () => {
  const { windowWidth } = useDeviceSize();
  const isTablet = windowWidth <= breakpointSize.tablet;
  const searchSneakers = state$.searchSneakers.get();
  const { isLoading } = useSneakerContext();

  return (
    <StyledHeader>
      <Typography variant={isTablet ? "h2" : "h1"} style={{ margin: 0 }}>
        Your collection
      </Typography>
      {isTablet && <DropdownButton />}
      {isTablet && <MobileSortPanel />}
      <StyledHeaderButtonsContainer>
        <SearchForm />
        <StyledAddNewSneakersButtonContainer
          whileTap={{ scale: 0.9 }}
          $hasResults={searchSneakers.length > 0}
        >
          <Button
            variant={"primary"}
            size={"large"}
            label={"Add new sneakers"}
            isActive={false}
            disabled={isLoading}
            icon={{
              name: "plus",
              color: isLoading ? "Gray50" : "White",
            }}
            onClick={() => state$.UI.isSneakerFormVisible.set(true)}
          />
        </StyledAddNewSneakersButtonContainer>
      </StyledHeaderButtonsContainer>
    </StyledHeader>
  );
};

export default CollectionHeader;
