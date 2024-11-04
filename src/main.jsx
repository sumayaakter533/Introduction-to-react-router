import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import PostDetails from "./components/PostDetails/PostDetails";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import StatefulForm from "./components/StatefulForm/StatefulForm";
// import App from "./App.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: "/posts",
                loader: () =>
                    fetch("https://jsonplaceholder.typicode.com/posts"),
                element: <Posts></Posts>,
            },
            {
                path: "/post/:postId",
                loader: ({ params }) =>
                    fetch(
                        `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
                    ),
                element: <PostDetails></PostDetails>,
            },
            {
                path: "/form",
                element: <StatefulForm></StatefulForm>,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </StrictMode>,
);
