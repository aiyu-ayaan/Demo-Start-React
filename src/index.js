import React from "react";
import ReactDom from "react-dom";
//css
import "./index.css";
// List
import { books } from "./books";
import Book from "./Book";


const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        const {img,title,authar} = book;
        return (
        <Book
        key={book.id}
        img={img}
        title={title}
        authar={authar}
         />
        );
      })}
    </section>
  );
};



ReactDom.render(<BookList />, document.getElementById("root"));
