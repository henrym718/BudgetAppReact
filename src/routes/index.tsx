import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Budget from "../pages/budget";
import Welcome from "../pages/welcome";
import Share from "../pages/share";

export const router = createBrowserRouter([
  { path: "/", element: <Welcome /> },
  { path: "/home", element: <Home /> },
  { path: "/budget", element: <Budget /> },
  { path: "/share/:id", element: <Share /> },
]);
