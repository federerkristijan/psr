import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import { urlFor } from "../lib/client";

const Product = ({ products }) => {
  const { addItem, removeItem } = useShoppingCart();

  return (
    <section>
      {products.map((product) => (
        <div key={product.id}>
          <img src={urlFor(product.image).width(200)} alt={product.name} />
          <h2>{product.name}</h2>
          <p>
            {formatCurrencyString({
              value: product.price,
              currency: "eur",
            })}
          </p>
          <button onClick={() => addItem(product)}>Add to Cart</button>
          <button onClick={() => removeItem(product.id)}>Remove from Cart</button>
        </div>
      ))}
    </section>
  )
}
