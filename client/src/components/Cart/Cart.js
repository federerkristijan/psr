import { Fragment, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { CartContext } from "../../store/CartContext";
import Checkout from "./Checkout";
import sanityClient from "../../lib/client";
import { GraphQLContext } from "../GraphQLContext";
import { convertShopping } from "../../helper/convertAndFetch";

const Cart = (props) => {
  const navigate = useNavigate();
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const {
    items,
    setItems,
    totalAmount,
    setTotalAmount,
    cartItemRemoveHandler,
    cartItemAddHandler,
  } = useContext(CartContext);

  const { userData } = useContext(GraphQLContext);

  const hasItems = items.length > 0;

  useEffect(() => {
    (async () => {
      const shoppingList = await convertShopping(
        userData.shoppingCart,
        sanityClient
      );
      setItems(shoppingList);
      const sum = shoppingList.reduce(
        (accumulator, currentItem) =>
          accumulator + currentItem.price * currentItem.quantity,
        0
      );
      setTotalAmount(sum);
    })();
  }, [userData.shoppingCart.length]);

  useEffect(() => {
    (async () => {
      const sum = items.reduce(
        (accumulator, currentItem) =>
          accumulator + currentItem.price * currentItem.quantity,
        0
      );
      setTotalAmount(sum);
    })();
  }, [items]);

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = () => {};

  const cartItems = (
    <ul className="cart-items">
      {items.map((item) => (
        <CartItem
          key={item._id}
          name={item.artist}
          amount={item.quantity}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item._id)}
          onAdd={cartItemAddHandler.bind(null, item._id)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className="actions">
      <button className="cart-btn" onClick={() => navigate(-1)}>
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
      {isCheckout && (
        <Checkout onSubmit={submitOrderHandler} onCancel={props.onClose} />
      )}
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>€{totalAmount.toFixed(2)}</span>
      </div>
      {!isCheckout && modalActions}
    </Fragment>
  );

  const isSubmittingModalContent = <p>Placing your order...</p>;

  const didSubmitModalContent = (
    <Fragment>
      <p>Your order has been placed!</p>
      <div className="actions">
        <button className="cart-btn" onClick={() => navigate(-1)}>
          Close
        </button>
      </div>
    </Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && CartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );

};

export default Cart;
