import React from "react";
import PropTypes from "prop-types"

const ProductListItem = ({ name, price }) => {
  <li>
    <p>Name:{name}</p>
    <p className={price>20 ?"blueStyle" : "redStyle"} > Price : {price || 0} </p>
  </li>;
};

export default ProductListItem;

ProductListItem.proptypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
}
