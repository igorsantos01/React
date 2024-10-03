import { Link, useLoaderData } from "react-router-dom";

const Product = () => {
  const product = useLoaderData();

  return (
    <section>
      <Link to="/products">
        <button>Voltar</button>
      </Link>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>R${product.price}</p>
      <button>Comprar</button>
    </section>
  );
};

export default Product;
