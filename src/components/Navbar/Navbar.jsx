import { useContext } from "react";
import NavLogo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { ProductsInCartContext } from "../../context/AppContext";

export const Navbar = ({ setCartOpen, setMenuOpen }) => {
  const { productsInCart } = useContext(ProductsInCartContext);
  const itemCount = productsInCart.length || 0;

  return (
    <nav className="nav">
      <div className="nav__container">
        <Link to="/">
          <img src={NavLogo} alt="" className="nav__logo" />
        </Link>
        <div className="nav__links">
          <Link to="/products" className="nav__link">
            Products
          </Link>
          <button className="nav__cart" onClick={() => setCartOpen(true)}>
            <FontAwesomeIcon
              icon={faCartShopping}
              className="nav__cart__icon"
            />
            {itemCount > 0 && <span className="cart__length">{itemCount}</span>}
          </button>
          <button className="nav__menu" onClick={() => setMenuOpen(true)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </nav>
  );
};
