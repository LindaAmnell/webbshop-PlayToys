import { createHashRouter } from "react-router-dom";
import Root from "./Root.jsx";
import ToysList from "../components/ToysList.jsx";
import StartPage from "../components/StartPage.jsx";
import CheckoutPage from "../components/CheckoutPage.jsx";
import ToysEmployee from "../components/ToysEmployee.jsx";
const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/toymeny",
        element: <ToysList />,
      },
      {
        path: "/Chekout",
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
