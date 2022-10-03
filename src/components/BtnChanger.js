import React from "react";

const BtnChanger = ({ book, onChangeShelf }) => {
  const changeHandler = (e) => {
    onChangeShelf({ book: { id: book.id }, shelf: e.target.value });
  };

  const shelf = book.shelf ? book.shelf : "none";

  return (
    <div className="book-shelf-changer">
      <select id="shelfValue" onChange={changeHandler} value={shelf}>
        <option value="" disabled>
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
