export interface QueryParams {
  title: string;
  author: string;
  startDate: string;
  endDate: string;
  genre: string;
  isbn: string;
}

export const defaultQueryParams: QueryParams = {
  title: "",
  author: "",
  startDate: "",
  endDate: "",
  genre: "",
  isbn: "",
};
