import React from "react";

export const NavItem = ({ title, path }) => (
  <li className="navigation-list-item">
    <a href={path}>{title}</a>
  </li>
);
