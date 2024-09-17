import SearchScreen from "./components/SearchScreen/SearchScreen";
import { Routes, Route } from "react-router-dom";
import BookForm from "./components/AddBookForm/BookForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SearchScreen />} />
        <Route path="/form" element={<BookForm />} />
      </Routes>
    </>
  );
}

export default App;
