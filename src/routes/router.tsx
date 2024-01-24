import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Prediction from "@/components/NavBar/Services/Prediction";
import Contact from "@/components/NavBar/Services/Contact";
import Transportation from "@/components/NavBar/Services/Transportation";
import ComunityForum from "@/components/NavBar/ComunityForum/ComunityForum";
import Home from "@/components/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [

      //Home Page
      {
        path: "/",
        element: <Home />,
      },
      //services routing
      {
        path: "/prediction",
        element: <Prediction />,
      },
      {
        path: "transportaion",
        element: <Transportation />,
      },
      // website contact route
      {
        path: "/contacts",
        element: <Contact />,
      },
      // community
      {
        path: "community",
        element: <ComunityForum />,
      },
    ],
  },
]);