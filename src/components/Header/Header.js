import React, { useEffect, useState } from "react";
import cn from "classnames";
import { Navigation } from "../Navigation/Navigation";
import throttle from "lodash.throttle";

export const Header = () => {
  const [scrolled, setScrolledState] = useState(window.scrollY > 96);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 96 && !scrolled) {
        setScrolledState(true);
      } else {
        setScrolledState(false);
      }
    };

    document.addEventListener(
      "scroll",
      throttle(listener, 1, { trailing: true, leading: true })
    );
  }, []);

  return (
    <header className={cn({ scrolled }, "header")}>
      <Navigation contrast={scrolled} />
    </header>
  );
};
