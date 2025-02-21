import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, Route, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import SetupProfilePage from "./pages/SetupProfilePage";
import ErrorPage from "./pages/ErrorPage";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {faFontAwesome, faTwitter} from "@fortawesome/free-brands-svg-icons";
import LoginBlock from "./components/LoginBlock";
import InitialAuthBlock from "./components/InitialAuthBlock";
import RegisterBlock from "./components/RegisterBlock";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "auth",
        element: <AuthPage/>,
        children: [
            {
                path: "",
                element: <InitialAuthBlock/>
            },
            {
                path: "login",
                element: <LoginBlock/>
            },
            {
                path: "register",
                element: <RegisterBlock/>
            }
        ]
    }, {
        path: "profile-setup",
        element: <SetupProfilePage/>
    }
]);

library.add(fas, faTwitter, faFontAwesome,);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
