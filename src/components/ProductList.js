import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const ProductList = () => {
  const { cart, clearCart, totalAmount } = useContext(CartContext);

  return (
    <div>
      {cart.length === 0 ? (
        <p>Cart is currently empty</p>
      ) : (
        <>
          <ul id="cart-items-list">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
          <button id="clear-all-cart" onClick={clearCart}>
            Clear Cart
          </button>
          <p id="cart-total-amount">Total: ₹{totalAmount}</p>
        </>
      )}
    </div>
  );
};

export default ProductList;
