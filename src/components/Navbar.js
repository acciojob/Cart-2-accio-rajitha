import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav>
      <h1>Shopping Cart</h1>
      <p id="nav-cart-item-count">Cart Items: {totalItems}</p>
    </nav>
  );
};

export default Navbar;
/*
import React from "react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  const totalCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav>
      <h1>Shopping Cart</h1>
      <div id="nav-cart-item-count">Cart Items: {totalCount}</div>
    </nav>
  );
};

export default Navbar;
*/