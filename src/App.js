import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import ListMember from "./pages/ListMember";

function App() {
  return (
    <Routes>
      <Route element={<Layout Children={Home} />} path="/" />
      <Route element={<Layout Children={ListMember} />} path="/list-member" />
    </Routes>
  );
}

export default App;
