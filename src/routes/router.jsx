import { createHashRouter } from "react-router-dom";
import Root from "./Root.jsx";
import ToysList from "../components/ToysList.jsx";
import StartPage from "../components/StartPage.jsx";
const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      //   {
      //     path: "/",
      //     element: <StartPage />,
      //   },
      {
        path: "/toymeny",
        element: <ToysList />,
      },
      //   {
      //     path: ,
      //     element: ,
      //   },
      //   {
      //     path: ,
      //     element: ,
      //   },
      {
        path: "/",
        element: <StartPage />,
      },
    ],
  },
]);

export { router };
