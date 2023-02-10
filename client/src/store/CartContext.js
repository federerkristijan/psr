import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const cartItemAddHandler = (id) => {
    setItems(
      items.map((item) => {
        if (item._id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  };

  const cartItemRemoveHandler = (id) => {
    const tempArray = items.map((item) => {
      if (item._id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setItems(
      tempArray.filter((item) => {
        if (item._id === id) {
          if (item.quantity === 0) {
            return false;
          } else {
            return true;
          }
        }
        return true;
      })
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItemRemoveHandler,
        items,
        setItems,
        totalAmount,
        setTotalAmount,
        cartItemAddHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
