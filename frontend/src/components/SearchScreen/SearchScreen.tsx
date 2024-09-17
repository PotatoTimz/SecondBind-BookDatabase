import { useEffect, useState } from "react";
import { BookData, defaultBookData } from "../Interfaces/BookData";
import fetchBooks from "./Utilities/FetchBookData";
import { defaultQueryParams, QueryParams } from "../Interfaces/QueryParams";
import BookTableRow from "./BookTableRow";
import { deleteBook } from "./Utilities/DeleteBookData";
import DeleteModal from "./DeleteModal";
import { useNavigate } from "react-router-dom";

function SearhScreen() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [bookList, setBookList] = useState<Array<BookData>>([]);
  const [selectedBook, setSelectedBook] = useState<BookData>(defaultBookData);
  const setSelected = (book: BookData) => setSelectedBook(book);

  const [queryParams, setQueryParams] =
    useState<QueryParams>(defaultQueryParams);

  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const toggleDeleteModal = () => setDeleteModal(!deleteModal);
  const deleteCurrentBook = () => {
    deleteBook(String(selectedBook.entryID));
    navigate(0);
  };

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
        <>
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-9 ">
                <table className="table table-striped table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Database No</th>
                      <th scope="col">Title</th>
                      <th scope="col">Author</th>
                      <th scope="col">Genre</th>
                      <th scope="col">Publication Date</th>
                      <th scope="col">ISBN</th>
                      <th scope="col" className="text-center">
                        <i className="bi bi-gear"></i>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookList.map((book: BookData) => {
                      return (
                        <BookTableRow
                          key={book.isbn}
                          bookData={book}
                          toggleDeleteModal={toggleDeleteModal}
                          setSelectedBook={setSelected}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <DeleteModal
            isOpen={deleteModal}
            toggleModal={toggleDeleteModal}
            bookTitle={selectedBook.title}
            deleteBook={deleteCurrentBook}
          />
        </>
      )}
    </>
  );
}

export default SearhScreen;
