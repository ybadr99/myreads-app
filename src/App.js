import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import BookList from "./components/BookList";
import "./App.css";

function App() {
  const [shelfChanger, setShelfChanger] = useState({});

  const onChangeShelfHandler = (obj) => {
    setShelfChanger(obj);
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <BookList
              onChangeShelf={onChangeShelfHandler}
              shelfChanger={shelfChanger}
            />
          }
        />
        <Route
          path="/search"
          element={<Search onChangeShelf={onChangeShelfHandler} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
