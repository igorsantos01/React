import products from "../database.json";
const loadProduct = ({ params }) => {
  const { productId } = params;
  const product = products.find((p) => p.id === +productId);
  if (!product) {
    throw new Response("404 Not found", { status: 404 });
  }
  return product;
};

export default loadProduct;
