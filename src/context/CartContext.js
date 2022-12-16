import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export const CartContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantites, setTotalQuantites] = useState(0);
  const [qty, setQty] = useState(1);

  // updated Product
  let foundProduct;
  let index;

  // add button
  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    // adding new item to the price
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.quantity);

    // adjusting total quantity
    setTotalQuantites(
      (prevTotalQuantites) => prevTotalQuantites + product.quantity
    );
    if (checkProductInCart) {
      // addinng an existing item
      // eslint-disable-next-line array-callback-return
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product.id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
  };

  // remove button
  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setCartItems(newCartItems);
  };

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id);

    if (value === "increase") {
      // updating the current cart items and adding a new element
      setCartItems([
        ...newCartItems,
        {
          ...foundProduct,
          quantity: foundProduct.quantity + 1,
        },
      ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantites((prevTotalQuantites) => prevTotalQuantites + 1);
    } else if (value === "decrease") {
      // stops the counter at 0
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantites((prevTotalQuantites) => prevTotalQuantites - 1);
      }
    }
  };

  // increasing quantity
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  // descreasing quantity
  const decQty = () => {
    setQty((prevQty) => {
      // setting the minQty to 1
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };
};

export const useCartContext = () => useContext(CartContext);
