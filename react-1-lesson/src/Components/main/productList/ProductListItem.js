import React from "react";
import PropTypes from "prop-types"
import { ProductListItemStyled } from "./ProductListItemStyled";

const ProductListItem = ({ name, price }) => (
  <ProductListItemStyled price={price}>
    <p className="ListItemName">Name:{name}</p>
    <p className="ListItemPrice">Price:{price}</p>
  </ProductListItemStyled>
);

export default ProductListItem;

ProductListItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
}
