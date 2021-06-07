import React, { useState, useContext, useEffect } from "react";
import { data } from "./data";

// a context for all stuff
const CartContext = React.createContext();

// cart items saver
function save() {
  const list = localStorage.getItem("item");
  if (list) {
    return JSON.parse(localStorage.getItem("item"));
  } else {
    return [];
  }
}

export const Context = ({ children }) => {
  // main cart variable
  const [cart, setCart] = useState(save());
  // list of products
  const [list, setList] = useState(data);

  useEffect(() => {
    // save cart in localHost
    localStorage.setItem("item", JSON.stringify(cart));
  }, [cart]);

  return (
    // returning provider to use in other files
    <CartContext.Provider value={{ cart, setCart, list, setList }}>
      {children}
    </CartContext.Provider>
  );
};

// custom hook to use context in other files
export const useGlobalContext = () => {
  return useContext(CartContext);
};
