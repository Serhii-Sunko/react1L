import React from "react";
import PropTypes from "prop-types"

const ProductListItem = ({ item }) => {
  <li>
    <p>Name:{item.name}</p>
    <p>Price:{item.price}</p>
  </li>;
};

export default ProductListItem;

ProductListItem.proptypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
  }),
}
