import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import Product from "../components/ui/Product";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductPageSkeleton from "../components/ProductPageSkeleton";
import ProductSkeleton from "../components/ui/ProductSkeleton";

const ProductPage = () => {
  const { products } = useContext(AppContext);
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);

  async function fetchProduct() {
    const { data } = await axios.get(
      `https://ecommerce-samurai.up.railway.app/product/${id}`
    );

    // 2:13:14
    const productData = data.data;

    setSelectedProduct(productData);

    setSelectedImage(productData.images[0]);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <main className="products__main">
      <div className="container">
        <div className="row product-page__row">
          {selectedProduct ? (
            <>
              <div className="selected-product">
                <div className="selected-product__left">
                  <figure className="selected-product__img__wrapper">
                    <img
                      src={`https://ecommerce-samurai.up.railway.app/${selectedImage}`}
                      alt=""
                      className="selected-product__img"
                    />
                  </figure>
                  <div className="selected-product__img__options">
                    {selectedProduct?.images.map((image, index) => (
                      <img
                        key={index}
                        src={`https://ecommerce-samurai.up.railway.app/${image}`}
                        alt=""
                        className="selected-product__img__option"
                        onClick={() =>
                          setSelectedImage(selectedProduct.images[index])
                        }
                      />
                    ))}
                  </div>
                </div>
                <div className="selected-product__right">
                  <h1 className="selected-product__title">
                    {selectedProduct?.name}
                  </h1>
                  <p className="selected-product__para">
                    {selectedProduct?.description}
                  </p>
                  <div className="selected-product__quantity">
                    <span className="selected-product__quantity__span selected-product__quantity__span-1">
                      Quantity
                    </span>
                    <div className="selected-product__quantity__wrapper">
                      <button
                        onClick={() => {
                          if (quantity > 1) {
                            console.log();
                            setQuantity((prevQuantity) => prevQuantity - 1);
                          }
                        }}
                        className="selected-product__quantity__btn"
                      >
                        -
                      </button>
                      <div className="selected-product__quantity__amount">
                        {quantity}
                      </div>
                      <button
                        onClick={() => {
                          if (quantity < 100) {
                            setQuantity((prevQuantity) => prevQuantity + 1);
                          }
                        }}
                        className="selected-product__quantity__btn"
                      >
                        +
                      </button>
                    </div>
                    <span className="selected-product__quantity__span selected-product__quantity__span-2">
                      ${products[0]?.price}
                    </span>
                    <button className="selected-product__add">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="specifications">
                <div className="spec">
                  <h2 className="spec__title">Weight</h2>
                  <span className="spec__detail">{products[0]?.weight}</span>
                </div>
                <div className="spec">
                  <h2 className="spec__title">Texture</h2>
                  <span className="spec__detail">{products[0]?.texture}</span>
                </div>{" "}
                <div className="spec">
                  <h2 className="spec__title">Size</h2>
                  <span className="spec__detail">{products[0]?.size}</span>
                </div>
              </div>
            </>
          ) : (
            <ProductPageSkeleton />
          )}
          <div className="recommendations">
            <h2 className="products__title">Trending Now</h2>
            <div className="products__list">
              {/* {products.length > 0 && loading !== true
                ? products
                    .filter((product) => product.id !== selectedProduct.id)
                    .slice(0, 4)
                    .map((product) => (
                      <Product product={product} key={product.id} />
                    ))
                : new Array(4)
                    .fill(0)
                    .map((_, index) => <ProductSkeleton key={index} />)} */}
              {products.length > 0 &&
                products
                  .filter((product) => product.id !== selectedProduct.id)
                  .slice(0, 4)
                  .map((product) => (
                    <Product product={product} key={product.id} />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
