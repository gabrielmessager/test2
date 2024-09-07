export const ProductSkeleton = () => {
  return (
    <div className="product product--skeleton">
      <div className="product__img skeleton"></div>
      <div className="product__details">
        <div className="product__price--skeleton skeleton"></div>
      </div>
    </div>
  );
};
