import SearchScreen from "./components/SearchScreen/SearchScreen";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SearchScreen />} />
      </Routes>
    </>
  );
}

export default App;
