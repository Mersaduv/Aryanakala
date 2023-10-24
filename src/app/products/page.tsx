import ProductCard from "@/components/products/components/ProductCard";
import { IProduct } from "@/types";
import React from "react";
import db from "../../db.json";

const Products = () => {
  const productList: IProduct[] = db.products;
  return (
    <div>
      {" "}
      {productList
        ? productList.map((product: IProduct) => {
            return <ProductCard key={product.slug} product={product} />;
          })
        : null}
    </div>
  );
};

export default Products;
