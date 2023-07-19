import React from "react";
import { NavigationWrapper } from "./NavigationStyled";
import { mainRoutes } from "../../routes/mainRoutes";

const Navigation = () => {
  return (
    <NavigationWrapper>
      <ul className="navigationList">
        {mainRoutes.map((route) => (
          <li className="navigationListItem" key={route.path}>
            <a className="headerListLink" href={route.path}>
              {route.name}
            </a>
          </li>
        ))}
      </ul>
    </NavigationWrapper>
  );
};

export default Navigation;
