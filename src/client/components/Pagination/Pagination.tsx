import React from "react";
import { PaginationTypes } from "./Pagination.types";
import {
  PaginationButtonContainer,
  PaginationContainer,
} from "./Pagination.styled";
import Button from "../Button/Button";

const Pagination: React.FC<PaginationTypes> = ({
  currentPage,
  totalPages,
  handlePageChange,
}) => {
  const maxVisiblePages = 2;
  const ellipsis = "...";

  const visiblePages = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  const renderPages = () => {
    if (totalPages <= maxVisiblePages * 2 + 1) {
      return visiblePages.map((page, index) => (
        <Button
          key={index}
          variant={"secondary"}
          isActive={page === currentPage}
          label={page.toString()}
          size="large"
          onClick={() => handlePageChange(page)}
        />
      ));
    }

    const firstPages = visiblePages.slice(0, maxVisiblePages);
    const lastPages = visiblePages.slice(-maxVisiblePages);

    // Check if current page is close to the beginning
    if (currentPage <= maxVisiblePages) {
      const visiblePagesSubset = visiblePages.slice(0, maxVisiblePages);
      return [
        ...visiblePagesSubset.map((page, index) => (
          <Button
            key={index}
            variant={"secondary"}
            isActive={page === currentPage}
            label={page.toString()}
            size="large"
            onClick={() => handlePageChange(page)}
          />
        )),
        <span key="ellipsis">{ellipsis}</span>,
        ...lastPages.map((page, index) => (
          <Button
            key={index}
            variant={"secondary"}
            isActive={page === currentPage}
            label={page.toString()}
            size="large"
            onClick={() => handlePageChange(page)}
          />
        )),
      ];
    }

    // Check if current page is close to the end
    if (currentPage > totalPages - maxVisiblePages) {
      const visiblePagesSubset = visiblePages.slice(-maxVisiblePages);
      return [
        ...firstPages.map((page, index) => (
          <Button
            key={index}
            variant={"secondary"}
            isActive={page === currentPage}
            label={page.toString()}
            size="large"
            onClick={() => handlePageChange(page)}
          />
        )),
        <span key="ellipsis">{ellipsis}</span>,
        ...visiblePagesSubset.map((page, index) => (
          <Button
            key={index}
            variant={"secondary"}
            isActive={page === currentPage}
            label={page.toString()}
            size="large"
            onClick={() => handlePageChange(page)}
          />
        )),
      ];
    }

    // If current page is in the middle
    const startPage = currentPage - maxVisiblePages;
    const endPage = currentPage + maxVisiblePages;

    return [
      ...firstPages.map((page, index) => (
        <Button
          key={index}
          variant={"secondary"}
          isActive={page === currentPage}
          label={page.toString()}
          size="large"
          onClick={() => handlePageChange(page)}
        />
      )),
      <span key="ellipsis">{ellipsis}</span>,
      ...visiblePages
        .slice(startPage, endPage)
        .map((page, index) => (
          <Button
            key={index}
            variant={"secondary"}
            isActive={page === currentPage}
            label={page.toString()}
            size="large"
            onClick={() => handlePageChange(page)}
          />
        )),
      <span key="ellipsis">{ellipsis}</span>,
      ...lastPages.map((page, index) => (
        <Button
          key={index}
          variant={"secondary"}
          isActive={page === currentPage}
          label={page.toString()}
          size="large"
          onClick={() => handlePageChange(page)}
        />
      )),
    ];
  };

  return (
    <PaginationContainer>
      <PaginationButtonContainer>
        <Button
          variant={"primary"}
          isActive={false}
          label={"<"}
          disabled={currentPage === 1}
          size="large"
          onClick={() => handlePageChange(currentPage - 1)}
        />
      </PaginationButtonContainer>
      <PaginationButtonContainer>{renderPages()}</PaginationButtonContainer>
      <PaginationButtonContainer>
        <Button
          variant={"primary"}
          isActive={false}
          label={">"}
          disabled={currentPage === totalPages}
          size="large"
          onClick={() => handlePageChange(currentPage + 1)}
        />
      </PaginationButtonContainer>
    </PaginationContainer>
  );
};

export default Pagination;
