import { BookData } from "../../Interfaces/BookData";
import DeleteModal from "../Modals/DeleteModal";

interface Props {
  bookData: BookData;
  setSelectedBook: (book: BookData) => void;
  toggleDeleteModal: () => void;
  toggleUpdateModal: () => void;
}
function BookTableRow(props: Props) {
  return (
    <>
      <tr>
        <th scope="row">{props.bookData.entryID}</th>
        <td>{props.bookData.title}</td>
        <td>{props.bookData.author}</td>
        <td>{props.bookData.genre}</td>
        <td>{props.bookData.publicationDate}</td>
        <td>{props.bookData.isbn}</td>
        <td className="text-center">
          <button
            onClick={() => {
              props.setSelectedBook(props.bookData);
              props.toggleDeleteModal();
            }}
            className="btn mx-1 btn-outline-danger"
          >
            <i className="bi bi-trash3-fill"></i>
          </button>
          <button
            onClick={() => {
              props.setSelectedBook(props.bookData);
              props.toggleUpdateModal();
            }}
            className="btn mx-1 btn-outline-primary"
          >
            <i className="bi bi-pencil-fill"></i>
          </button>
        </td>
      </tr>
    </>
  );
}

export default BookTableRow;
