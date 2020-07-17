import React, { useState } from "react";
import cn from "classnames";
import { navigation } from "../../config";
import { NavItem } from "./NavItem";

export const Navigation = ({ contrast }) => {
  const [isMobileNavOpen, toggleMobileNav] = useState(false);
  return (
    <>
      <nav className={cn({ contrast }, "navigation")}>
        <ul className="navigation-list">
          {navigation.map((item) => (
            <NavItem key={item.title} {...item} />
          ))}
        </ul>
      </nav>
      <button
        onClick={toggleMobileNav.bind(null, !isMobileNavOpen)}
        className="mobile-nav-toggler"
      >
        ∞ Menu
      </button>
      <nav className={cn({ "mobile-nav-open": isMobileNavOpen }, "mobile-nav")}>
        <ul className="mobile-nav-list">
          {navigation.map((item) => (
            <li key={item.title} className="mobile-nav-item">
              <a href={item.path}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
