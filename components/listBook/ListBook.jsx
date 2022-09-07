import React from "react";
import BookItem from "./bookItem/BookItem";

function ListBook({ listBook }) {
  return (
    <section className="list__book">
      <div className="container">
        <div className="list__book-title">
          <h2>List Book For You..!</h2>
          <p>
            This book is concerned with creating typography and is essential for
            professionals who regularly work for clients.
          </p>
        </div>
        <div className="list__book-content">
          {listBook.map((item, idx) => (
            <BookItem key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ListBook;
