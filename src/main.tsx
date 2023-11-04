import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About } from "./components/About";
import { Home } from "./components/Home";
import { Menu } from "./components/Menu";
import { Page404 } from "./components/Page404";
import { Post } from "./components/Post";
import { Posts } from "./components/Posts";
import { Redirect } from "./components/Redirect";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/posts/:id" element={<Posts />}></Route>*/}
        <Route path="/posts" element={<Posts />}>
          <Route path=":id" element={<Post /> } />
        </Route>
        <Route path="/posts" element={<Posts />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
