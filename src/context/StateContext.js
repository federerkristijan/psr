import {createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export const StateContext = ({children}) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantites, setTotalQuantites] = useState(0);
  const [qty, setQty] = useState(1);
};
