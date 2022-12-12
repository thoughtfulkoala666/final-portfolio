import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";

import PLEASEDEARGOD from "./components/PLEASEDEARGOD";

const router = createHashRouter([
    { errorElement: <PLEASEDEARGOD /> },
    { path: "/", element: <App /> },
    { path: "/rachel", element: <App /> },
]);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        {/* Have to use HashRouter because we are deploying on GitHub Pages */}
        {/* <HashRouter>
            <App />
        </HashRouter> */}
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
