import React, { useContext } from "react";
import { ProductsInCartContext } from "../../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { CartItem } from "./CartItem";

const Cart = ({ cartOpen, setCartOpen, setProductsInCart }) => {
  const { productsInCart } = useContext(ProductsInCartContext);

  function getSubtotal() {
    return productsInCart.reduce((currentSubtotal, productInCart) => {
      const subtotalForProduct =
        productInCart.product.price * productInCart.quantity;
      return currentSubtotal + subtotalForProduct;
    }, 0);
  }

  function removeProduct(productId) {
    const updatedProductsInCart = productsInCart.filter((productInCart) => {
      return productInCart.product.id !== productId;
    });
    setProductsInCart(updatedProductsInCart);
  }

  function updateProductQuantity(productId, quantity) {
    console.log("productId", productId);
    console.log("quantity", quantity);

    const updatedProductsInCart = productsInCart.map((productInCart) => {
      if (productInCart.product.id === productId) {
        return { ...productInCart, quantity };
      }
      return productInCart;
    });
    setProductsInCart(updatedProductsInCart);
  }

  return (
    <div className={`cart__wrapper ${cartOpen && "cart-open"}`}>
      <nav className="cart">
        <div className="cart__header">
          <h3 className="cart__header__title">Your Shopping Cart</h3>
          <button
            className="cart__header__close"
            onClick={() => setCartOpen(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="cart__items">
          {productsInCart?.map((productInCart, index) => {
            return (
              <CartItem
                key={index}
                imagePath={productInCart.product.images[0]}
                title={productInCart.product.name}
                price={productInCart.product.price}
                quantity={productInCart.quantity}
                removeProduct={() => removeProduct(productInCart.product.id)}
                updateProductQuantity={(quantity) =>
                  updateProductQuantity(productInCart.product.id, quantity)
                }
              />
            );
          })}
        </div>
        <div className="cart__footer">
          <div className="cart__footer__details">
            <h4 className="cart__footer__title">Subtotal</h4>
            <span className="cart__footer__subtotal">${getSubtotal()}</span>
          </div>
          <button className="cart__footer__button">Go to checkout</button>
        </div>
      </nav>
    </div>
  );
};

export default Cart;
