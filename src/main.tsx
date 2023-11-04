import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About } from "./components/About";
import { Home } from "./components/Home";
import { Menu } from "./components/Menu";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route index path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
