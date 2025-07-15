import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Doctors from "../pages/Doctors";
import Booking from "../pages/Booking";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },{
    path: "/Doctors",
    element: <Doctors />,
  },{
    path: "/Booking",
    element: <Booking />,
  }
]);


export default function AppRouter() {
  return <RouterProvider router={router} />;
}