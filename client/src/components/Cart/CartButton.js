import { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

import { CartContext } from "../../store/CartContext";
import "../../styles/global.css";

const CartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const { items } = useContext(CartContext);

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${"cart-btn"} ${btnIsHighlighted} ? ${"bump"} : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <Link to="/shop/cart"className="cart-btn-icon">
        <AiOutlineShoppingCart />
        <span className="badge">{numberOfCartItems}</span>
      </Link>
    </button>
  );
};

export default CartButton;
