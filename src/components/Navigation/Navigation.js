import React from "react";
import cn from "classnames";
import { navigation } from "../../config";
import { NavItem } from "./NavItem";

export const Navigation = ({ contrast }) => (
  <nav className={cn({ contrast }, "navigation")}>
    <ul className="navigation-list">
      {navigation.map((item) => (
        <NavItem key={item.title} {...item} />
      ))}
    </ul>
  </nav>
);
