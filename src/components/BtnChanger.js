import React from "react";

const BtnChanger = ({ book, onChangeShelf }) => {
  const changeHandler = (e) => {
    console.log(e.target.value);
    onChangeShelf({ book: { id: book.id }, shelf: e.target.value });
  };

  return (
    <div className="book-shelf-changer">
      <select
        id="shelfValue"
        onChange={changeHandler}
        value={book.shelf ? book.shelf : "none"}
      >
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BtnChanger;
