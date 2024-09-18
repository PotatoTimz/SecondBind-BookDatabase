import { Link } from "react-router-dom";
import { BookData } from "../Interfaces/BookData";
import BookTableRow from "./BookTableRow";

interface Props {
  bookList: Array<BookData>;
  toggleAdd: () => void;
  toggleDelete: () => void;
  toggleUpdate: () => void;
  setSelectedBook: (book: BookData) => void;
}
function DataTable(props: Props) {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-9 ">
          <div className="text-center my-4">
            <button
              onClick={props.toggleAdd}
              type="button"
              className="btn btn-outline-success"
            >
              Add Book
            </button>
          </div>
          <div className="table-responsive">
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
                {props.bookList.map((book: BookData) => {
                  return (
                    <BookTableRow
                      key={book.isbn}
                      bookData={book}
                      toggleDeleteModal={props.toggleDelete}
                      toggleUpdateModal={props.toggleUpdate}
                      setSelectedBook={props.setSelectedBook}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
