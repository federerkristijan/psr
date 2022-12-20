/* eslint-disable array-callback-return */
import { createContext, useState } from "react";
// import { toast } from "react-hot-toast";
import { getProductData } from "../store/ProductsStore";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {}
});

const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const getProductQuantity = (id) => {
    const quantity = cartProducts.find(product => product.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  const addItemToCart = (id) => {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      setCartProducts(
        [
          ...cartProducts,
          {
            id: id,
            quantity: 1
          }
        ]
      )
    } else {
      setCartProducts(
        cartProducts.map(
          product => product.id === id ? {...product, quantity: product.quantity + 1 } : product
        )
      )
    }
  }

  const removeItemFromCart = (id) => {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map(
          product => product.id ===id ? { ...product, product: quantity - 1 } : product
        )
      )
    }
  }

  const deleteFromCart = (id) => {
    setCartProducts(
      cartProducts => cartProducts.filter(currentProduct => {
        return currentProduct.id !== id;
      })
    )
   }

  const getTotalCost = (id) => {
    let totalCost = 0;

    cartProducts.map(cartItem => {
      const productData = getProductData(cartItem.id);
      totalCost += (productData.price * cartItem.quantity);
    })
    return totalCost;
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addItemToCart,
    removeItemFromCart,
    deleteFromCart,
    getTotalCost
  }

  // add button
  // const onAdd = (product, quantity) => {
  //   const checkProductInCart = cartItems.find(
  //     (item) => item._id === product._id
  //   );

    // adding new item to the price
    // setTotalPrice((prevTotalPrice) => prevTotalPrice + product.quantity);

    // adjusting total quantity
  //   setTotalQuantites(
  //     (prevTotalQuantites) => prevTotalQuantites + product.quantity
  //   );
  //   if (checkProductInCart) {
  //     const updatedCartItems = cartItems.map((cartProduct) => {
  //       if (cartProduct._id === product.id)
  //         return {
  //           ...cartProduct,
  //           quantity: cartProduct.quantity + quantity,
  //         };
  //     });

  //     setCartItems(updatedCartItems);
  //   } else {
  //     product.quantity = quantity;
  //     setCartItems([...cartItems, { ...product }]);
  //   }
  //   toast.success(`${qty} ${product.name} added to the cart.`);
  // };

  // remove button
  // const onRemove = (product) => {
  //   foundProduct = cartItems.find((item) => item._id === product._id);
  //   const newCartItems = cartItems.filter((item) => item._id !== product._id);

  //   setTotalPrice(
  //     (prevTotalPrice) =>
  //       prevTotalPrice - foundProduct.price * foundProduct.quantity
  //   );
  //   setCartItems(newCartItems);
  // };

  // const toggleCartItemQuantity = (id, value) => {
  //   foundProduct = cartItems.find((item) => item._id === id);
  //   index = cartItems.findIndex((product) => product._id === id);
  //   const newCartItems = cartItems.filter((item) => item._id !== id);

  //   if (value === "inc") {
  //     setCartItems([
  //       ...newCartItems,
  //       {
  //         ...foundProduct,
  //         quantity: foundProduct.quantity + 1,
  //       },
  //     ]);
  //     setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
  //     setTotalQuantites((prevTotalQuantites) => prevTotalQuantites + 1);
  //   } else if (value === "dec") {
  //     // stops the counter at 0
  //     if (foundProduct.quantity > 1) {
  //       setCartItems([
  //         ...newCartItems,
  //         { ...foundProduct, quantity: foundProduct.quantity - 1 },
  //       ]);
  //       setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
  //       setTotalQuantites((prevTotalQuantites) => prevTotalQuantites - 1);
  //     }
  //   }
  // };

  // increasing quantity
  // const incQty = () => {
  //   setQty((prevQty) => prevQty + 1);
  // };

  // descreasing quantity
  // const decQty = () => {
  //   setQty((prevQty) => {
  //     // setting the minQty to 1
  //     if (prevQty - 1 < 1) return 1;
  //     return prevQty - 1;
  //   });
  // };

  return (
    <CartContext.Provider
      value={contextValue}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

// export const useCartContext = () => useContext(CartContextProvider);
