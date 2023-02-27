import { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

import { CartContext } from "../../store/CartContext";
import { GraphQLContext } from "../GraphQLContext";
import "../../styles/global.css";

const CartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const { userData } = useContext(GraphQLContext);
  const items = userData.shoppingCart.length;

  const btnClasses = `${"cart-btn-icon"} ${btnIsHighlighted} ? ${"bump"} : ''}`;

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
      <Link to="/shop/cart" className="cart-btn-icon">
        <AiOutlineShoppingCart />
        <span className="badge">{items}</span>
      </Link>
    </button>
  );
};

export default CartButton;
