import { createBrowserRouter } from "react-router-dom";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import Category from "../Category/Category";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import Profile from "../Pages/Shared/Others/Profile/Profile";
import TermsnCond from "../Pages/Shared/Others/TermsnConditions/TermsnCond";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://news-daily-server.vercel.app/news"),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/terms", element: <TermsnCond /> },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            {" "}
            <Profile />
          </PrivateRoute>
        ),
      },

      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`https://news-daily-server.vercel.app/category/${params.id}`),
      },

      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <News />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://news-daily-server.vercel.app/news/${params.id}`),
      },
    ],
  },
]);
