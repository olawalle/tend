import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Signin from "./pages/Signin";
import DashboardHome from "./pages/DashboardHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "dashboard",
    element: <DashboardHome />,
  },
  {
    path: "auth/signin",
    element: <Signin />,
  },
]);

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
