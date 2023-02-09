import { Fragment, useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/CartContext";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `€${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  // const submitOrderHandler = async (userData) => {
  //   setIsSubmitting(true);
  //   const response = await fetch(
  //     "https://udemy-react-21466-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
  //     {
  //       method: "POST",
  //       body: JSON.stringify({
  //         user: userData,
  //         orderedItems: cartCtx.items,
  //       }),
  //     }
  //   );
  //   // v. 1
  //   const responseData = await response.json();

  //   const submittedOrder = [];

  //   for (const key in responseData) {
  //     submittedOrder.push({
  //       id: key,
  //       user: responseData.user,
  //       orderedItems: responseData.orderedItems,
  //     });
  //   }
  //   setIsSubmitting(false);
  //   setDidSubmit(true);
  //   cartCtx.clearCart();
  // };

  const submitOrderHandler = () => {};

  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className="actions">
      <button className="cart-btn" onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className="cart-btn" onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const CartModalContent = (
    <Fragment>
      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onSubmit={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
      {cartItems}
    </Fragment>
  );

  const isSubmittingModalContent = <p>Placing your order...</p>

  const didSubmitModalContent = (
  <Fragment>
    <p>Your order has been placed!</p>
    <div className="actions">
      <button className="cart-btn" onClick={props.onClose}>
        Close
      </button>
    </div>
  </Fragment>)

  return <Modal onClose={props.onClose}>
    {!isSubmitting && !didSubmit && CartModalContent}
    {isSubmitting && isSubmittingModalContent}
    {!isSubmitting && didSubmit && didSubmitModalContent}
  </Modal>;
};

export default Cart;
