import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
// import App from "./App.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/users",
                loader: () =>
                    fetch("https://jsonplaceholder.typicode.com/users"),
                element: <Users></Users>,
            },
            {
                path: "/user/:userId",
                loader: ({ params }) =>
                    fetch(
                        `https://jsonplaceholder.typicode.com/users/${params.userId}`,
                    ),
                element: <UserDetails></UserDetails>,
            },
            {
                path: "/contact",
                element: <Footer></Footer>,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </StrictMode>,
);
