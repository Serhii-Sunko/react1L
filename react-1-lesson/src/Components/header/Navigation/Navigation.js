import React from "react";
import { mainRoutes } from "../../../routes/mainRutes";

const Navigation = () => {
  return (
    <nav>
      <ul className="headerList">
        {mainRoutes.map(({ name, path }) => (
          <li key={name}>
            <a href={path}>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
