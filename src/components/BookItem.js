import React from "react";
import BtnChanger from "./BtnChanger";

const BookItem = ({ book, onChangeShelf }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          ></div>
          <BtnChanger onChangeShelf={onChangeShelf} book={book} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  );
};

export default BookItem;
