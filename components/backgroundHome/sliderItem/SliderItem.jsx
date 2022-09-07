import React from "react";

function SliderItem({ item }) {
  return (
    <div className="wrapper__backroundHome-item">
      <div className="text">
        <span>*eBook includes iBooks, PDF & ePub versions </span>
        <h2>{item.name}</h2>
        <p>{item.decription}</p>
        <div className="btn__watch-detail">
          <a href="/">About Author</a>
        </div>
      </div>
      <div className="image">
        <img src={item.thumnail} alt={item.name} />
      </div>
    </div>
  );
}

export default SliderItem;
