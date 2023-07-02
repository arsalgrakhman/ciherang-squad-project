import React from "react";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";

export default function Layout({ Children }) {
  return (
    <>
      <NavbarComp />
      {<Children />}
      <Footer />
    </>
  );
}
