import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
import ProductImg from"../../assets/product-img.jpg"

const Cart = ({ cartOpen, setCartOpen}) => {


    return (
        <div className={`cart__wrapper ${cartOpen && "cart-open"}`}>
        <nav className="cart">
            <div className="cart__header">
                <h3 className="cart__header__title">
                    Your Shopping Cart
                </h3>
                <button className="cart__header__close" onClick={() => setCartOpen(false)}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
            <div className="cart__items">
                <div className="cart__item__left">
                    <img src={ProductImg} alt="" className="cart__item__img" />
                </div>
                <div className="cart__item__mid">
                    <h4 className="cart__item__title">
                        Pulp Unit - 5 Compartments
                    </h4>
                    <span className="cart__item__price">
                        $254
                    </span>
                    <div className="cart__item__quantity">
                        <button className="cart__item__quantity">
                            -
                        </button>
                        <button className="cart__item__quantity">
                            1
                        </button>
                        <button className="cart__item__quantity">
                            +
                        </button>
                    </div>
                    <FontAwesomeIcon icon={faTimes} className="cart__item__remove" />
                </div>
            </div>
            <div className="cart__footer">
                <div className="cart__footer__details">
                    <h4 className="cart__footer__title">
                        Subtotal
                    </h4>
                    <span className="cart__footer__subtotal">
                        $254
                    </span>
                </div>
                <button className="cart__footer__button">
                    Go to checkout
                </button>
            </div>
        </nav>
    </div>
    )}

export default Cart;
