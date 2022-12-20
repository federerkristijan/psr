// fetch Sanity products

const productsArray = (id, title, price) => {};

const getProductData = (id) => {
  let ProductData = productsArray.find(product => product.id === id);

  if (ProductData === undefined) {
    console.log("Product data doesn not exist for ID: " + id);
    return undefined;
  }

  return ProductData;
}

export { productsArray, getProductData };
