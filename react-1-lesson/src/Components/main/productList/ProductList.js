import React from "react";
import ProductListItem from "./ProductListItem";
import PropTypes from "prop-types"
import sprite from "../../../assets/header/header.svg"


const ProductList = ({arr}) => {
  return (
    <> 
     <svg className="logo">
      <use href={sprite + "#icon-image"}></use>
      </svg>
    <ul className="toysList test">
        {arr.map((item) => (
          <ProductListItem name={item.name} price={item.price} key={item.id} />
          ))}
      </ul>
    </>
  );
};

export default ProductList;

ProductList.propTypes = {
  arr: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.any.isRequired,
  })),
}
