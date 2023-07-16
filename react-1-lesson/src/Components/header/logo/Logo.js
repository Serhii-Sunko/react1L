import React from "react";
import sprite from "../../../assets/header/header.svg";

<logo />;
const Logo = () => {
  return (
    <svg>
      <use href={sprite + "#icon-image"}></use>
    </svg>
  );
};

export default Logo;
