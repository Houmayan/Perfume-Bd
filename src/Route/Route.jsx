import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "../Error/ErrorPage";
import Root from "../Root/Root";
import Home from "../Components/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
        element: <Home></Home>,
        }
      ]
    },
  ]);

  export default router;