import React from "react";
import PropTypes from "prop-types";
import { ProductListItemStyled } from "./ProductListItemStyled";

const ProductListItem = ({ name, price }) => (
  <ProductListItemStyled price={price}>
    <p className="listItemName">Name:{name}</p>
    <p className="listItemPrice">Price:{price || 0}</p>
  </ProductListItemStyled>
);

export default ProductListItem;

ProductListItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
};
