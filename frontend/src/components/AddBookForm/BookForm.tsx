import { useState } from "react";
import { BookData, defaultBookData } from "../Interfaces/BookData";
import { genres } from "../Utilities/GenreList";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

function BookForm() {
  const [formBookData, setFormBookData] = useState<BookData>(defaultBookData);
  const [errors, setErrors] = useState<object>({});
  const navigate = useNavigate();

  const [serverError, setServerError] = useState<boolean>(false);

  const uploadBook = (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(false);
    setErrors({});

    axios
      .post("http://localhost:3000/api/books", {
        title: formBookData.title,
        author: formBookData.author,
        genre: formBookData.genre,
        publicationDate: formBookData.publicationDate,
        isbn: formBookData.isbn,
      })
      .then((response) => {
        console.log("successfully added a book!");
        setTimeout(() => {
          navigate("/", {});
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
    console.log(formBookData);
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-9 col-xs-11">
          <div className="text-end my-3">
            <i
              onClick={() => {
                navigate("/", {});
              }}
              className="bi bi-x-circle fs-4 text-danger"
            ></i>
          </div>
          <div className="bg-light mt-3 rounded p-3">
            <form onSubmit={uploadBook}>
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
                  defaultValue={"Select a Genre"}
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

                <div className="form-group my-3">
                  <button type="submit" className="btn btn-primary">
                    Create Challenge
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {serverError ? (
        <div className="row justify-content-center my-4">
          <div className="col-lg-4 col-md-6 col-sm-9 col-xs-11">
            <div className="alert alert-danger">
              <h3 className="fs-5">Server Error!</h3>
              <p>
                Book title or ISBN number has already been entered. Please make
                sure you are inputing a unique book.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default BookForm;
