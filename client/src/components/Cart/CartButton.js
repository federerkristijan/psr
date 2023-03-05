import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

import "../../styles/global.css";
import { CartContextProvider } from "../../store/CartContext";

const CartButton = (props) => {
  const { onClick, count } = props;

  return (
    <CartContextProvider>
      <Link to="/shop/cart" className="cart-btn-icon">
        <button className="cart-btn" onClick={onClick}>
          <AiOutlineShoppingCart />
          {/* {count > 0 && <span className="badge">{count}</span>} */}
          <span className="badge">{count}</span>
        </button>
      </Link>
    </CartContextProvider>
  );
};

export default CartButton;
