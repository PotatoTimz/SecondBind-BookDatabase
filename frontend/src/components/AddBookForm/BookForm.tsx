import { useState } from "react";
import { BookData, defaultBookData } from "../Interfaces/BookData";
import { genres } from "../Utilities/GenreList";

function BookForm() {
  const [formBookData, setFormBookData] = useState<BookData>(defaultBookData);

  return (
    <div className="container">
      <form>
        <div className="form-group m-3">
          <label className="mb-2">Book Title</label>
          <input
            min={1}
            max={50}
            type="text"
            className={`form-control`}
            placeholder="Enter the book's title"
          ></input>
          <div className="invalid-feedback"></div>

          <label className="mb-2">Author Name</label>
          <input
            min={1}
            max={50}
            type="text"
            className={`form-control`}
            placeholder="Enter the book's author"
          ></input>
          <div className="invalid-feedback"></div>

          <label className="mb-2">Genre</label>
          <select className="custom-select form-control">
            <option selected>Select a Genre</option>
            {genres.map((genreName, index) => {
              return (
                <option key={index} value={genreName}>
                  {genreName}
                </option>
              );
            })}
          </select>
          <div className="invalid-feedback"></div>

          <label className="mb-2">Publication Date</label>
          <input
            type="date"
            className={`form-control`}
            placeholder="Enter a book title"
          ></input>
          <div className="invalid-feedback"></div>

          <label className="mb-2">ISBN</label>
          <input
            min={10}
            max={13}
            type="text"
            className={`form-control`}
            placeholder="Enter the book's ISBN"
          ></input>
          <div className="invalid-feedback"></div>

          <button type="submit" className="btn btn-primary">
            Create Challenge
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookForm;
