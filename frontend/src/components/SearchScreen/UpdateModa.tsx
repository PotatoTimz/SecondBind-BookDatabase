import Modal from "react-bootstrap/esm/Modal";
import { BookData, defaultBookData } from "../Interfaces/BookData";
import { useEffect, useState } from "react";
import { genres } from "../Utilities/GenreList";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";

interface Props {
  isOpen: boolean;
  bookData: BookData;
  toggleModal: () => void;
}

function UpdateModal(props: Props) {
  const [formBookData, setFormBookData] = useState<BookData>(defaultBookData);
  const [errors, setErrors] = useState<object>({});
  const navigate = useNavigate();

  const [serverError, setServerError] = useState<boolean>(false);

  useEffect(() => {
    setFormBookData(props.bookData);
  }, [props.bookData]);

  const update = () => {
    console.log("test");

    setServerError(false);
    setErrors({});
    axios
      .put("http://localhost:3000/api/books/" + props.bookData.entryID, {
        title: formBookData.title,
        author: formBookData.author,
        genre: formBookData.genre,
        publicationDate: formBookData.publicationDate,
        isbn: formBookData.isbn,
      })
      .then((response) => {
        console.log("successfully updated book!");
        setTimeout(() => {
          navigate(0);
        }, 400);
      })
      .catch((err: AxiosError) => {
        if (err.response?.status === 400) {
          console.log("400 error");
          setErrors(err.response?.data!);
        } else {
          setServerError(true);
          console.log("500 error");
        }
      });
  };

  return (
    <>
      <Modal show={props.isOpen} onHide={props.toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title className="fs-3 w-100 text-center">
            Update "{props.bookData.title}"
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className={``}>
          <form>
            <div className="form-group my-3">
              <label className="">Book Title</label>
              <input
                min={1}
                max={50}
                value={formBookData.title}
                onChange={(e) =>
                  setFormBookData({ ...formBookData, title: e.target.value })
                }
                type="text"
                className={`form-control ${
                  "title" in errors ? "is-invalid" : ""
                }`}
                placeholder="Enter the book's title"
              ></input>
              <div className="invalid-feedback">
                {"title" in errors ? (errors.title as string) : ""}
              </div>
            </div>

            <div className="form-group my-3">
              <label className="">Author Name</label>
              <input
                min={1}
                max={50}
                value={formBookData.author}
                onChange={(e) =>
                  setFormBookData({ ...formBookData, author: e.target.value })
                }
                type="text"
                className={`form-control ${
                  "author" in errors ? "is-invalid" : ""
                }`}
                placeholder="Enter the book's author"
              ></input>
              <div className="invalid-feedback">
                {"author" in errors ? (errors.author as string) : ""}
              </div>
            </div>

            <div className="form-group my-3">
              <label className="">Genre</label>
              <select
                className={`custom-select form-control ${
                  "genre" in errors ? "is-invalid" : ""
                }`}
                onChange={(e) => {
                  setFormBookData({ ...formBookData, genre: e.target.value });
                }}
                defaultValue={formBookData.genre}
              >
                <option>Select a Genre</option>
                {genres.map((genreName, index) => {
                  return (
                    <option key={index} value={genreName}>
                      {genreName}
                    </option>
                  );
                })}
              </select>
              <div className="invalid-feedback">
                {"genre" in errors ? (errors.genre as string) : ""}
              </div>
            </div>

            <div className="form-group my-3">
              <label className="">Publication Date</label>
              <input
                type="date"
                className={`form-control ${
                  "publicationDate" in errors ? "is-invalid" : ""
                }`}
                value={formBookData.publicationDate}
                onChange={(e) => {
                  setFormBookData({
                    ...formBookData,
                    publicationDate: e.target.value,
                  });
                }}
                placeholder="Enter a book title"
              ></input>
              <div className="invalid-feedback">
                {"publicationDate" in errors
                  ? (errors.publicationDate as string)
                  : ""}
              </div>

              <div className="form-group my-3">
                <label className="">ISBN</label>
                <input
                  min={10}
                  max={13}
                  value={formBookData.isbn}
                  onChange={(e) => {
                    setFormBookData({
                      ...formBookData,
                      isbn: e.target.value,
                    });
                  }}
                  type="text"
                  className={`form-control ${
                    "isbn" in errors ? "is-invalid" : ""
                  }`}
                  placeholder="Enter the book's ISBN"
                ></input>
                <div className="invalid-feedback">
                  {"isbn" in errors ? (errors.isbn as string) : ""}
                </div>
              </div>
            </div>
          </form>
          {serverError ? (
            <div className="alert alert-danger">
              <h3 className="fs-5">Server Error!</h3>
              <p>
                Book title or ISBN number has already been entered. Please make
                sure you are inputing a unique book.
              </p>
            </div>
          ) : null}
        </Modal.Body>

        <Modal.Footer>
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              update();
            }}
          >
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateModal;
