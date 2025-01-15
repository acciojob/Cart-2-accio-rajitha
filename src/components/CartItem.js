import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { incrementQuantity, decrementQuantity } = useContext(CartContext);

  return (
    <li>
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
    </li>
  );
};

export default CartItem;
/*

import React from "react";
import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { dispatch } = useCart();

  return (
    <li className="product-card">
      <h3>{item.name}</h3>
      <div id={`cart-item-price-${item.id}`}>Price: ₹{item.price}</div>
      <div>
        <button
          id={`decrement-btn-${item.id}`}
          onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}
        >
          -
        </button>
        <span id={`cart-amount-${item.id}`}>{item.quantity}</span>
        <button
          id={`increment-btn-${item.id}`}
          onClick={() => dispatch({ type: "INCREMENT", payload: item.id })}
        >
          +
        </button>
      </div>
      <button
        onClick={() => dispatch({ type: "REMOVE", payload: item.id })}
      >
        Remove
      </button>
    </li>
  );
};

export default CartItem;
*/