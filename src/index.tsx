import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";

import PLEASEDEARGOD from "./components/PLEASEDEARGOD";
import Header from "./components/Header";
import ProjectPersonas from "./components/ProjectPersonas";
import ProjectRedesign from "./components/ProjectRedesign";

const router = createHashRouter([
    { errorElement: <PLEASEDEARGOD /> },
    { path: "/", element: <App /> },
    {
        path: "/personas",
        element: (
            <div>
                <ProjectPersonas />
            </div>
        ),
    },
    {
        path: "/redesign",
        element: (
            <div>
                <ProjectRedesign />
            </div>
        ),
    },
    {
        path: "/development",
        element: (
            <div>
                <ProjectPersonas />
            </div>
        ),
    },
    {
        path: "/iterative",
        element: (
            <div>
                <ProjectPersonas />
            </div>
        ),
    },
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
        <Header />
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
