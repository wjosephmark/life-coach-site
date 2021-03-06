import React from "react";
import ReactDOM from "react-dom";
import { useRoutes, A } from "hookrouter"

import App from "./components/app";
import Work from "./components/pages/work"
import Blog from "./components/pages/blog"
import About from "./components/pages/about"
import "./style/main.scss"

import "./style/main.scss";

const routes = {
  "/": () => <App />,
  "/about": () => <About />,
  "/work-with-me": () => <Work />,
  "/blog": () => <Blog />
}

function Main() {
  return(
    <div className="bootstrap-wrapper">
      <div className="navbar">
        <A href="/">Home</A>
        <A href="/about">About</A>
        <A href="/work-with-me">Work With Me</A>
        <A href="/blog">Blog</A>
      </div>
      {useRoutes(routes)}
    </div>
  )
}

ReactDOM.render(<Main />, document.querySelector(".app-wrapper"))
