import { useEffect } from "react";
import { BookData } from "../../Interfaces/BookData";
import { CSVLink } from "react-csv";

interface Props {
  bookList: Array<BookData>;
}
function ExportData(props: Props) {
  const exportJSON = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(props.bookList)
    )}`;
    console.log(jsonString);
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };
  return (
    <>
      <div className="row justify-content-center p-4 border-bottom border-top">
        <CSVLink
          type="button"
          className="col-4 text-center"
          data={props.bookList}
        >
          Download CSV
        </CSVLink>
        <div className="col-4 text-center">
          <a type="button" className="link-opacity-100" onClick={exportJSON}>
            Download JSON
          </a>
        </div>
      </div>
    </>
  );
}

export default ExportData;
