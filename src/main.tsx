import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Uses from "./pages/Uses";
import Article from "./pages/Article";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "articles", element: <Articles /> },
      { path: "articles/:articleId", element: <Article /> },
      {
        path: "projects",
        element: <Projects />,
        children: [{ path: "*", element: <Article /> }],
      },
      { path: "uses", element: <Uses /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
