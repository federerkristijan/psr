const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="cart-item">
      <div className="summary">
        <h2>{props.name}</h2>
        <span className="price">{price}</span>
        <span className="amount">x {props.amount}</span>
      </div>
      <div className="cart-item-actions">
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
