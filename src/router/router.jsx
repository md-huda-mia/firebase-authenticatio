import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Profile from "../Pages/Profile";
import ErrorPage from "../Pages/ErrorPage";
import Wallet from "../Pages/Wallet";
import PrivetRouter from "./PrivetRouter";
import ForgetPassword from "../Pages/ForgetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: (
          <PrivetRouter>
            {" "}
            <Profile />{" "}
          </PrivetRouter>
        ),
      },
      {
        path: "/wallet",
        element: (
          <PrivetRouter>
            <Wallet />
          </PrivetRouter>
        ),
      },
      {
        path: "/forgetpassword",
        element: <ForgetPassword />,
      },
    ],
  },
]);
export default router;
