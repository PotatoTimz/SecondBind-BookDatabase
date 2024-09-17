import { BookData } from "../Interfaces/BookData";

interface Props {
  bookData: BookData;
}

function BookCard(props: Props) {
  return (
    <div className="container m-2">
      <h3>{props.bookData.title}</h3>
      <div>{props.bookData.author}</div>
      <div>{props.bookData.genre}</div>
      <div>{props.bookData.publicationDate}</div>
      <div>{props.bookData.isbn}</div>
    </div>
  );
}

export default BookCard;
