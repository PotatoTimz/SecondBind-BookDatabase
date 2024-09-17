import axios from "axios";

export const deleteBook = (databaseNumber: string) => {
  axios
    .delete("http://localhost:3000/api/books/" + databaseNumber)
    .then((res) => {
      console.log("Succesfully Deleted Book!");
    })
    .catch((err) => {
      console.log(err);
    });
};
