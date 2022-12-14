import {createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export const StateContext = ({children}) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantites, setTotalQuantites] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.quantity);
    if (checkProductInCart) {
      // eslint-disable-next-line array-callback-return
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product.id)
        return {
          ...cartProduct, quantity: cartProduct.quantity + quantity
        };
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
  };
};
