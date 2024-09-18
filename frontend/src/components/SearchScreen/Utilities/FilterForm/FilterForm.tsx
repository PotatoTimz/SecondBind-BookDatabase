import { useState } from "react";
import {
  defaultQueryParams,
  QueryParams,
} from "../../../Interfaces/QueryParams";
import BasicSearch from "./BasicSearch";
import AdvanceSearch from "./AdvanceSearch";

interface Props {
  setQuery: (query: QueryParams) => void;
}

function FilterForm(props: Props) {
  const [toggleExtraFilters, setToggleExtraFilters] = useState<boolean>(false);
  const toggleExtra = () => setToggleExtraFilters(!toggleExtraFilters);

  return (
    <>
      <div className="container-fluid my-4">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-11">
            {toggleExtraFilters ? (
              <AdvanceSearch
                toggleExtra={toggleExtra}
                setQuery={props.setQuery}
              />
            ) : (
              <BasicSearch
                toggleExtra={toggleExtra}
                setQuery={props.setQuery}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterForm;
