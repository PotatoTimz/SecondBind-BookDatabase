import { useEffect, useState } from "react";
import { BookData } from "../Interfaces/BookData";
import fetchBooks from "./Utilities/FetchBookData";
import { defaultQueryParams, QueryParams } from "../Interfaces/QueryParams";
import BookCard from "./BookCard";

function SearhScreen() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [bookList, setBookList] = useState<Array<BookData>>([]);

  const [queryParams, setQueryParams] =
    useState<QueryParams>(defaultQueryParams);

  useEffect(() => {
    setIsLoading(true);
    fetchBooks(queryParams).then((bookData: Array<BookData>) => {
      setBookList(bookData);
      setIsLoading(false);
    });
  }, [queryParams]);

  return (
    <>
      {isLoading ? (
        <div>Loading Data</div>
      ) : (
        <div className="container-fluid">
          {bookList.map((book: BookData, index: number) => {
            return <BookCard key={index} bookData={book} />;
          })}
        </div>
      )}
    </>
  );
}

export default SearhScreen;
