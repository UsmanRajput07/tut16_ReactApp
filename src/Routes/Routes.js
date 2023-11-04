import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";

export const RoutesArry = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
];
