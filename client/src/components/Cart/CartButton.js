import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

import "../../styles/global.css";
import { CartContextProvider } from "../../store/CartContext";

const CartButton = ({ itemsCount, onClick }) => {

  return (
    <CartContextProvider>
          <Link to="/shop/cart" className="cart-btn-icon">
      <button className="cart-btn" onClick={onClick}>
        <AiOutlineShoppingCart />
        <span className="badge">{itemsCount}</span>
      </button>
    </Link>
    </CartContextProvider>
  );
};

export default CartButton;
