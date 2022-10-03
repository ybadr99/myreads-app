import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import { getAll, update } from "../BooksAPI";

const BookList = ({ shelfChanger, onChangeShelf }) => {
  const [books, setBooks] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  let currentBooks = [],
    wantBooks = [],
    readBooks = [];

  //get all books
  useEffect(async () => {
    const data = await getAll();
    setBooks(data);
    setIsLoad(false);
  }, [isLoad]);

  const fetchBooks = () => {
    if (books.length > 0) {
      books.forEach((book) => {
        if (book.shelf === "currentlyReading") {
          currentBooks.push(book);
        } else if (book.shelf === "wantToRead") {
          wantBooks.push(book);
        } else if (book.shelf === "read") {
          readBooks.push(book);
        }
      });
    }
  };
  fetchBooks();

  useEffect(() => {
    // effect;
    if (shelfChanger.shelf) {
      // console.log("shelfChanger", shelfChanger);
      update(shelfChanger.book, shelfChanger.shelf);
      setIsLoad(true);
    }
  }, [shelfChanger]);

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {currentBooks.length !== 0 && (
            <BookShelf
              shelfTitle="Currently Reading"
              books={currentBooks}
              onChangeShelf={onChangeShelf}
            />
          )}
          {wantBooks.length !== 0 && (
            <BookShelf
              shelfTitle="Want To Read"
              books={wantBooks}
              onChangeShelf={onChangeShelf}
            />
          )}
          {readBooks.length !== 0 && (
            <BookShelf
              shelfTitle="Read"
              books={readBooks}
              onChangeShelf={onChangeShelf}
            />
          )}
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
  );
};

export default BookList;
