import axios from "axios";
import { BookData } from "../../Interfaces/BookData";

export const updateBook = (databaseNumber: string, updatedData: BookData) => {
  axios
    .put("http://localhost:3000/api/books/" + databaseNumber)
    .then((res) => {
      console.log("Succesfully Deleted Book!");
    })
    .catch((err) => {
      console.log(err);
    });
};
