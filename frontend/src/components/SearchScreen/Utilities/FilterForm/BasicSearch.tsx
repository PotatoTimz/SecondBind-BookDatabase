import { useEffect, useState } from "react";
import {
  defaultQueryParams,
  QueryParams,
} from "../../../Interfaces/QueryParams";

interface Props {
  setQuery: (query: QueryParams) => void;
  toggleExtra: () => void;
}

function BasicSearch(props: Props) {
  const [queryForm, setQueryForm] = useState<QueryParams>(defaultQueryParams);
  const updateSearchParams = () => {
    props.setQuery(queryForm);
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
    <div className="input-group col-5">
      <input
        value={queryForm.title}
        onChange={(e) => setQueryForm({ ...queryForm, title: e.target.value })}
        type="text"
        className="form-control"
      ></input>
      <button
        onClick={updateSearchParams}
        className="btn btn-outline-primary col-2"
      >
        <i className="bi bi-search"></i>
      </button>
      <button
        onClick={props.toggleExtra}
        className="btn btn-outline-primary col-2"
      >
        <i className="bi bi-funnel-fill"></i>{" "}
      </button>
    </div>
  );
}

export default BasicSearch;
