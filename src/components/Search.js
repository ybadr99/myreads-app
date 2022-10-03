import React, { useState, useEffect } from "react";
import { getAll, search } from "../BooksAPI";
import { Link } from "react-router-dom";
import BookItem from "./BookItem";
const Search = ({ onChangeShelf }) => {
  const [searchInput, setSearchInput] = useState("");
  const [books, setBooks] = useState([]);

  const searchHandler = (e) => {
    setTimeout(() => {
      setSearchInput(e.target.value);
    }, 100);
  };

  useEffect(() => {
    const searchApi = async () => {
      let data = await search(searchInput, 1);
      // you are going through in right way.
      const mybooks = await getAll();

      if (data && data.length > 0) {
        data.forEach((book1) => {
          mybooks.forEach((book2) => {
            if (book1.id === book2.id) {
              book1.shelf = book2.shelf;
            }
          });
        });
      }

      if (data === undefined || data.error) {
        setBooks([]);
      } else {
        setBooks(data);
      }
    };

    if (searchInput === "") {
      searchApi();
      setBooks([]);
    }

    const timeOut = setTimeout(() => {
      if (searchInput) {
        searchApi();
      }
    }, 300);

    return () => clearTimeout(timeOut);
  }, [searchInput]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={searchHandler}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.length !== 0 &&
            books.map((book) => {
              return (
                <BookItem
                  key={book.id}
                  book={book}
                  onChangeShelf={onChangeShelf}
                />
              );
            })}
        </ol>
      </div>
    </div>
  );
};

export default Search;
