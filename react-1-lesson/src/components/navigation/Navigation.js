import React from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import { NavigationWrapper } from "./NavigationStyled";

const Navigation = () => {
  return (
    <NavigationWrapper>
      <ul className="navigationList">
        {mainRoutes.map((route) => (
          <li key={route.path} className="navigationListItem">
            { route.name}</li>
        ))}
      </ul>
    </NavigationWrapper>
  );
};

export default Navigation;
