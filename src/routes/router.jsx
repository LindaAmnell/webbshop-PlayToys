import { createHashRouter } from "react-router-dom";
import Root from "./Root.jsx";

import StartPage from "../components/StartPage.jsx";
import CheckoutPage from "../components/CheckoutPage.jsx";
import ToysEmployee from "../components/ToysEmployee.jsx";
import LogIn from "../components/LogIn.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/toLogin",
        element: <LogIn />,
      },

      {
        path: "/Checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/toyEmployee",
        element: <ToysEmployee />,
      },
      {
        path: "/",
        element: <StartPage />,
      },
    ],
  },
]);

export { router };
