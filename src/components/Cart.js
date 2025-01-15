import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, dispatch } = useCart();

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      {cart.length > 0 ? (
        <>
          <ul id="cart-items-list">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
          <div id="cart-total-amount">Total: ₹{totalAmount}</div>
          <button
            id="clear-all-cart"
            onClick={() => dispatch({ type: "CLEAR" })}
          >
            Clear Cart
          </button>
        </>
      ) : (
        <p>Cart is currently empty</p>
      )}
    </div>
  );
};

export default Cart;
