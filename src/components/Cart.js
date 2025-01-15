import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, clearCart, totalAmount } = useContext(CartContext);

  return (
    <div>
      {cart.length === 0 ? (
        <p id="cart-empty-message">Cart is currently empty</p>
      ) : (
        <>
          <ul id="cart-items-list">
            {cart.map((item) => (
              <li key={item.id} id={`cart-item-${item.id}`}>
                <p>{item.name}</p>
                <p id={`cart-item-price-${item.id}`}>Price: ₹{item.price}</p>
                <p id={`cart-amount-${item.id}`}>Quantity: {item.quantity}</p>
                <button
                  id={`increment-btn-${item.id}`}
                  onClick={() => incrementQuantity(item.id)}
                >
                  +
                </button>
                <button
                  id={`decrement-btn-${item.id}`}
                  onClick={() => decrementQuantity(item.id)}
                >
                  -
                </button>
                <button
                  id={`cart-item-remove-${item.id}`}
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button id="clear-all-cart" onClick={clearCart}>
            Clear Cart
          </button>
          <p id="cart-total-amount">Total Amount: ₹{totalAmount}</p>
          <p id="cart-item-count">Cart Items: {cart.length}</p> {/* Added this */}
        </>
      )}
    </div>
  );
};

export default Cart;
/*
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
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
          <p id="cart-total-amount">Total Amount: ₹{totalAmount}</p>
        </>
      )}
    </div>
  );
};

export default Cart;
/*
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
*/