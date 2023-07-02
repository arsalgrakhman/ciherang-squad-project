import React from "react";

import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import Gallery from "../components/Gallery";
import Events from "../components/Event";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Gallery />
      <Events />
    </>
  );
}
