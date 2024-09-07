import { useContext } from "react";
import { Product } from "../Product";
import { ProductSkeleton } from "../ProductSkeleton";
import { FetchedProductsContext } from "../../context/AppContext";

export const ProductsList = ({ title }) => {
  const { products } = useContext(FetchedProductsContext);
  return (
    <section id="products">
      <div className="container">
        <div className="row products__row">
          <h2 className="products__title">{title}</h2>
          <div className="products__list">
            {products.length > 0
              ? products
                  .slice(0, 8)
                  .map((product) => (
                    <Product key={product.id} product={product} />
                  ))
              : new Array(8)
                  .fill(0)
                  .map((_, index) => <ProductSkeleton key={index} />)}
          </div>
        </div>
      </div>
    </section>
  );
};
