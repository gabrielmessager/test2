import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import ProductImg from "../../assets/product-img.jpg";
const BASE_URL = "https://ecommerce-samurai.up.railway.app/";

export const CartItem = ({
  imagePath,
  title,
  price,
  quantity,
  removeProduct,
}) => {
  return (
    <div className="cart__item">
      <div className="cart__item__left">
        <img
          src={`${BASE_URL}/${imagePath}`}
          alt=""
          className="cart__item__img"
        />
      </div>
      <div className="cart__item__mid">
        <h4 className="cart__item__title">{title}</h4>
        <span className="cart__item__price">${price}</span>
        <div className="cart__item__quantity">
          <button className="cart__item__quantity__btn">-</button>
          <button className="cart__item__quantity cart__item__quantity__amount">
            {quantity}
          </button>
          <button className="cart__item__quantity__btn">+</button>
        </div>
        <FontAwesomeIcon
          icon={faTimes}
          className="cart__item__remove"
          onClick={removeProduct}
        />
      </div>
    </div>
  );
};

// export default Cart;
