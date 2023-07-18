import React from "react";
import { mainRoutes } from "../../../routes/mainRutes";
import { NavigationStyled } from "./NavigationStyled";

const Navigation = () => {
  return (
    <NavigationStyled>
      <ul className="headerList">
        {mainRoutes.map(({ name, path }) => (
          <li key={name} className="headerListItem">
            <a className="headerListLink" href={path}>{name}</a>
          </li>
        ))}
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
