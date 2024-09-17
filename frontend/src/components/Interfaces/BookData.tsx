export interface BookData {
  entryID: number;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  isbn: string;
}

export const defaultBookData = {
  entryID: 0,
  title: "",
  author: "",
  genre: "",
  publicationDate: "",
  isbn: "",
};
