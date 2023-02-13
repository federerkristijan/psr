import { createContext, useState, useContext } from "react";
import { GraphQLContext } from "../components/GraphQLContext";

export const CartContext = createContext();

export const CartContextProvider = (props) => {
  const { GraphQLHandler, userData, setUserData } = useContext(GraphQLContext);
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [fetchTImeoutID, setFetchTImeoutID] = useState("");

  const cartItemAddHandler = async (id) => {
    clearTimeout(fetchTImeoutID);

    let temp = await userData.shoppingCart;
    temp.push(id);
    console.log(temp);
    setFetchTImeoutID(
      setTimeout(() => {
        GraphQLHandler(2, { ...userData, shoppingCart: temp });
      }, 400)
    );
  };

  const cartItemRemoveHandler = async (id) => {
    clearTimeout(fetchTImeoutID);

    let temp = await userData.shoppingCart;
    console.log(temp.length);
    if (temp.length === 1) {
      setUserData({ ...userData, shoppingCart: [] });
    } else {
      const index = temp.indexOf(id);
      temp.splice(index, 1);
      console.log(temp);
      await setUserData({ ...userData, shoppingCart: temp });
    }

    setFetchTImeoutID(
      setTimeout(() => {
        console.log(userData);
        GraphQLHandler(
          2,
          temp.length === 1 ? { ...userData, shoppingCart: [] } : userData
        );
      }, 400)
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
