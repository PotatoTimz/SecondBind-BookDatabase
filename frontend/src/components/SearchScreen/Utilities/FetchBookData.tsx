import axios from "axios";
import { QueryParams } from "../../Interfaces/QueryParams";

const fetchBooks = async (queryParams: QueryParams) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/books?title=${queryParams.title}&author=${queryParams.author}&startDate=${queryParams.startDate}&endDate=${queryParams.endDate}&genre=${queryParams.genre}&isbn=${queryParams.isbn}&pageLimit=1000&page=0`
    );

    if (!response.status) {
      throw new Error("Could not fetch data");
    }

    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default fetchBooks;
