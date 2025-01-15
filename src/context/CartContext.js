import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialCart = [
  { id: 1, name: "Product 1", price: 100, quantity: 1 },
  { id: 2, name: "Product 2", price: 200, quantity: 2 },
];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    case "DECREMENT":
      return state
        .map((item) =>
          item.id === action.id
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0);
    case "REMOVE":
      return state.filter((item) => item.id !== action.id);
    case "CLEAR":
      return []; // Clear cart items
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const incrementQuantity = (id) => dispatch({ type: "INCREMENT", id });
  const decrementQuantity = (id) => dispatch({ type: "DECREMENT", id });
  const removeItem = (id) => dispatch({ type: "REMOVE", id });
  const clearCart = () => dispatch({ type: "CLEAR" });

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        incrementQuantity,
        decrementQuantity,
        clearCart,
        removeItem,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
/*
import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialCart = [
  { id: 1, name: "Product 1", price: 100, quantity: 1 },
  { id: 2, name: "Product 2", price: 200, quantity: 2 },
];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    case "DECREMENT":
      return state
        .map((item) =>
          item.id === action.id
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0);
    case "REMOVE":
      return state.filter((item) => item.id !== action.id);
    case "CLEAR":
      return [];
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const incrementQuantity = (id) => dispatch({ type: "INCREMENT", id });
  const decrementQuantity = (id) => dispatch({ type: "DECREMENT", id });
  const removeItem = (id) => dispatch({ type: "REMOVE", id });
  const clearCart = () => dispatch({ type: "CLEAR" });

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        incrementQuantity,
        decrementQuantity,
        clearCart,
        removeItem,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
/*
import React, { createContext, useReducer } from "react";

const initialState = [
  { id: 1, name: "Product A", price: 100, quantity: 1 },
  { id: 2, name: "Product B", price: 200, quantity: 2 },
];

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    case "DECREMENT":
      return state
        .map((item) =>
          item.id === action.id
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0);
    case "CLEAR":
      return [];
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const incrementQuantity = (id) => dispatch({ type: "INCREMENT", id });
  const decrementQuantity = (id) => dispatch({ type: "DECREMENT", id });
  const clearCart = () => dispatch({ type: "CLEAR" });
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        incrementQuantity,
        decrementQuantity,
        clearCart,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
/*
import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { ...action.payload, quantity: 1 }];
    case "INCREMENT":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    case "DECREMENT":
      return state.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    case "REMOVE":
      return state.filter((item) => item.id !== action.payload);
    case "CLEAR":
      return [];
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
*/