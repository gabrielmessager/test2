import { useState } from "react";
import { Navbar } from "../Navbar";
import { Menu } from "../Menu";
import { Cart } from "../Cart";

export const Nav = ({ setProductsInCart }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar setCartOpen={setCartOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Cart
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        setProductsInCart={setProductsInCart}
      />
    </>
  );
};
