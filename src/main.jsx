import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "tailwindcss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Component/Error.jsx";
import Videopage from "./Component/Videopage.jsx";
import Login from "./Component/Login.jsx";
import MyChannel from "./Component/MyChannel.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/videopage/:id",
    element: <Videopage />,
  },
  {
    path: "/userloginpage",
    element: <Login />,
  },
  {
    path: "/mychannel",
    element: <MyChannel />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
