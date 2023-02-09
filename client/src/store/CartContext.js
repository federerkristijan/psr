import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // const addItem = (item) => {
  //   console.log(item);
  // };
  // const removeItem = (id) => {
  //   console.log(id);
  // };
  // const clearCart = (all) => {
  //   console.log(all);
  // };

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        totalAmount,
        setTotalAmount,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
