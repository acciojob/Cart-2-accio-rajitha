import React from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import { CartProvider } from "../context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <div id="main">
        <Navbar />
        <ProductList />
      </div>
    </CartProvider>
  );
};

export default App;
/*
import React from "react";
import Navbar from "./Navbar";
import Cart from "./Cart";
import { CartProvider } from "../context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <div id="main">
        <Navbar />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
/*
<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

*/