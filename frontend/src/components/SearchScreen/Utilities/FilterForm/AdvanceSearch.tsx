import { useEffect, useState } from "react";
import {
  defaultQueryParams,
  QueryParams,
} from "../../../Interfaces/QueryParams";
import { genres } from "../../../Utilities/GenreList";

interface Props {
  setQuery: (query: QueryParams) => void;
  toggleExtra: () => void;
}
function AdvanceSearch(props: Props) {
  const [queryForm, setQueryForm] = useState<QueryParams>({
    ...defaultQueryParams,
  });
  const updateSearchParams = () => {
    props.setQuery(queryForm);
  };

  const clearFilter = () => {
    setQueryForm({ ...defaultQueryParams });
    props.setQuery(defaultQueryParams);
  };

  const clickEnter = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      updateSearchParams();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", clickEnter);
    return () => {
      document.removeEventListener("keydown", clickEnter);
    };
  }, [clickEnter]);

  return (
    <div className="bg-light rounded p-2">
      <div className="text-end">
        <i
          onClick={props.toggleExtra}
          className="bi bi-x-circle fs-5 text-danger"
        ></i>
      </div>

      <label>Book Title</label>
      <div className="input-group mb-2">
        <div className="input-group-text">
          <i className="bi bi-book"></i>
        </div>
        <input
          className="form-control"
          placeholder="Enter a title filter"
          value={queryForm.title}
          onChange={(e) =>
            setQueryForm({ ...queryForm, title: e.target.value })
          }
        />
      </div>

      <label>Author Name</label>
      <div className="input-group mb-2">
        <div className="input-group-text">
          <i className="bi bi-person-circle"></i>
        </div>
        <input
          className="form-control"
          placeholder="Enter a author filter"
          value={queryForm.author}
          onChange={(e) =>
            setQueryForm({ ...queryForm, author: e.target.value })
          }
        />
      </div>

      <label>Genre</label>
      <div className="input-group mb-2">
        <div className="input-group-text">
          <i className="bi bi-card-checklist"></i>{" "}
        </div>
        <select
          value={queryForm.genre}
          onChange={(e) => {
            setQueryForm({ ...queryForm, genre: e.target.value });
          }}
          className={`custom-select form-control`}
          defaultValue={"Select a Genre"}
        >
          <option></option>
          {genres.map((genreName, index) => {
            return (
              <option key={index} value={genreName}>
                {genreName}
              </option>
            );
          })}
        </select>
      </div>

      <div className="row mb-2">
        <div className="col-6">
          <label>Start Date</label>
          <div className="input-group">
            <div className="input-group-text">
              <i className="bi bi-calendar-check"></i>{" "}
            </div>
            <input
              className="form-control"
              placeholder="Enter a ISBN filter"
              type="date"
              value={queryForm.startDate}
              onChange={(e) =>
                setQueryForm({ ...queryForm, startDate: e.target.value })
              }
            />
          </div>
        </div>
        <div className="col-6">
          <label>End Date</label>
          <div className="input-group">
            <div className="input-group-text">
              <i className="bi bi-calendar-check-fill"></i>{" "}
            </div>
            <input
              className="form-control"
              placeholder="Enter a ISBN filter"
              type="date"
              value={queryForm.endDate}
              onChange={(e) =>
                setQueryForm({ ...queryForm, endDate: e.target.value })
              }
            />
          </div>
        </div>
      </div>

      <label>ISBN Number</label>
      <div className="input-group mb-4">
        <div className="input-group-text">
          <i className="bi bi-upc-scan"></i>
        </div>
        <input
          className="form-control"
          placeholder="Enter a ISBN filter"
          value={queryForm.isbn}
          onChange={(e) => setQueryForm({ ...queryForm, isbn: e.target.value })}
        />
      </div>

      <div className="text-end">
        <div className="btn-group mx-1">
          <button
            onClick={updateSearchParams}
            className="btn btn-outline-primary col-1"
          >
            <i className="bi bi-search"></i>
          </button>
          <button
            onClick={clearFilter}
            className="btn btn-outline-danger col-1"
          >
            <i className="bi bi-trash"></i>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdvanceSearch;
