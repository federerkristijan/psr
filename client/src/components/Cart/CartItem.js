const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="cart-item">
        <h2 className="cart-item-name">{props.name}</h2>
      <div className="summary">
        <span className="price">{price}</span>
        <span className="amount">x{props.amount}</span>
      </div>
      <div className="cart-item-actions">
        <button onClick={props.onAdd}>+</button>
        <button onClick={props.onRemove}>−</button>
      </div>
    </li>
  );
};

export default CartItem;
