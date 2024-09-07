import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Product from "./ui/Product";
import ProductSkeleton from "./ui/ProductSkeleton";

const TrendingProducts = () => {
  const { products } = useContext(AppContext);
  console.log("products", products);

  return (
    <section id="trending-products">
      <div className="container">
        <div className="row products__row">
          <h2 className="products__title">Trending Now</h2>
          <div className="products__list">
            {products.length > 0
              ? products
                  .slice(8, 12)
                  .map((product) => <Product product={product} />)
              : new Array(4).fill(0).map(() => <ProductSkeleton />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
