import React from "react";
import { Header } from "../Header/Header";
import { Scroller } from "../Scroller/Scroller";

export const MainSection = () => {
  console.log("test");
  return (
    <section className="section section-main">
      <Header />
      <Scroller>SCROLL DOWN TO SEE MORE</Scroller>
    </section>
  );
};
