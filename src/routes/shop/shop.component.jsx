import ProductCard from "components/product-card/product-card.component";
import { ProductsContext } from "contexts/shop.context";
import React, { useContext } from "react";

import "./shop.styles.scss";
function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Shop;
