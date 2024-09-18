import { useEffect, useState } from "react";
import { BookData, defaultBookData } from "../Interfaces/BookData";
import fetchBooks from "./Utilities/FetchBookData";
import { defaultQueryParams, QueryParams } from "../Interfaces/QueryParams";
import { deleteBook } from "./Utilities/DeleteBookData";
import DeleteModal from "./DeleteModal";
import { useNavigate } from "react-router-dom";
import UpdateModal from "./UpdateModa";
import ExportData from "./ExportData";
import DataTable from "./DataTable";
import FilterForm from "./Utilities/FilterForm/FilterForm";

function SearhScreen() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [bookList, setBookList] = useState<Array<BookData>>([]);
  const [selectedBook, setSelectedBook] = useState<BookData>(defaultBookData);
  const setSelected = (book: BookData) => setSelectedBook(book);

  const [queryParams, setQueryParams] =
    useState<QueryParams>(defaultQueryParams);
  const setQuery = (query: QueryParams) => setQueryParams(query);

  // Delete Procedure
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const toggleDeleteModal = () => setDeleteModal(!deleteModal);
  const deleteCurrentBook = () => {
    deleteBook(String(selectedBook.entryID));
    navigate(0);
  };

  // Update Procedure
  const [updateModal, setUpdateModal] = useState<boolean>(false);
  const toggleUpdateModal = () => setUpdateModal(!updateModal);

  useEffect(() => {
    setIsLoading(true);
    fetchBooks(queryParams).then((bookData: Array<BookData>) => {
      setBookList(bookData);
      setIsLoading(false);
    });
  }, [queryParams]);

  return (
    <>
      <FilterForm setQuery={setQuery} />

      {isLoading ? (
        <div>Loading Data</div>
      ) : (
        <>
          <ExportData bookList={bookList} />
          <DataTable
            bookList={bookList}
            toggleDelete={toggleDeleteModal}
            toggleUpdate={toggleUpdateModal}
            setSelectedBook={setSelectedBook}
          ></DataTable>
          <DeleteModal
            isOpen={deleteModal}
            toggleModal={toggleDeleteModal}
            bookTitle={selectedBook.title}
            deleteBook={deleteCurrentBook}
          />
          <UpdateModal
            isOpen={updateModal}
            toggleModal={toggleUpdateModal}
            bookData={selectedBook}
          />
        </>
      )}
    </>
  );
}

export default SearhScreen;
