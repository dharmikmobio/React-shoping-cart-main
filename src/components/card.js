import React from "react";

const Cards = ({ item, handleClick }) => {
  const { dishname,dishURL,price,category } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={dishURL} alt="" />
      </div>
      <div className="details">
        <p>{dishname}</p>
        <p>{category}</p>
        <p>Price - {price}Rs</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;

// id, title, autor, price, img
