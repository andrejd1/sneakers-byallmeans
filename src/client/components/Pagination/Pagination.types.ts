export type PaginationTypes = {
  totalPages: number;
  currentPage: number;
  handlePageChange: (newPage: number) => void;
};
