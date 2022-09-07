import React from "react";

function BookItem({ item }) {
  return (
    <div className="book__item">
      <div className="book__item-img">
        <img src={item.thumnail} alt="" />
      </div>
      <div className="book__item-decription">
        <h3 className="book-name">{item.name}</h3>
        <p className="book-author">{item.author.name}</p>
        <p className="category">
          Thể loại: <span>{item.genres[0]}</span>
        </p>
        <p className="book-price">
          Giá: <span>{item.price}</span>
        </p>
      </div>
      <div className="btn__addtocart">Thêm vào giỏ hàng!</div>
    </div>
  );
}

export default BookItem;
