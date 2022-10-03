import React from "react";
import BtnChanger from "./BtnChanger";

const BookItem = ({ book, onChangeShelf }) => {
  const bookThumbnail = book.imageLinks ? book.imageLinks : "";

  const authors = book.authors ? book.authors.join("") : "";
  // const bookThumbnail = "";
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${bookThumbnail.thumbnail})`,
            }}
          ></div>
          <BtnChanger onChangeShelf={onChangeShelf} book={book} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    </li>
  );
};

export default BookItem;
