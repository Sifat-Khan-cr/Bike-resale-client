import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import DashBorad from "../Pages/Dashboard/DashBorad";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PostAdd from "../Pages/PostAdd/PostAdd";
import Error404 from "../Pages/Shared/Error404/Error404";
import ShowCategory from "../Pages/ShowCategory/ShowCategory";
import Signup from "../Pages/SignUp/Signup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch("http://localhost:5000/category"),
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/products/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`),
                element: <PrivateRoute><ShowCategory></ShowCategory></PrivateRoute>
            },
            {
                path: '*',
                element: <Error404></Error404>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]

    }, {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <DashBorad></DashBorad>,
            },
            {
                path: '/dashboard/postadd',
                element: <PrivateRoute><PostAdd></PostAdd></PrivateRoute>
            }
        ]
    },
])
export default router;