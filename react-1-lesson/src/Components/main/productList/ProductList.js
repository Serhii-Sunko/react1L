import React from "react";
import ProductListItem from "./ProductListItem";

const ProductList = ({ arr }) => {
  return (
    <ul className="toolsList">
      {arr.map((item) => (
        <ProductListItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default ProductList;
