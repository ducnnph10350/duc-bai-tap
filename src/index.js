import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bai1 from "./components/bai1/Bai1";
import Bai2 from "./components/bai2/Bai2";
import Bai3 from "./components/bai3/Bai3";
import Bai4 from "./components/bai4/Bai4";
import Bai5 from "./components/bai5/Bai5";
import Bai6 from "./components/bai6/Bai6";
import Bai7 from "./components/bai7/Bai7";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/bai1",
    element: <Bai1 />,
  },
  {
    path: "/bai2",
    element: <Bai2 />,
  },
  {
    path: "/bai3",
    element: <Bai3 />,
  },
  {
    path: "/bai4",
    element: <Bai4 />,
  },
  {
    path: "/bai5",
    element: <Bai5 />,
  },
  {
    path: "/bai6",
    element: <Bai6 />,
  },
  {
    path: "/bai7",
    element: <Bai7 />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
