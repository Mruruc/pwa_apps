import AppLayout from "../layouts/AppLayout";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Settings from "../pages/settings/Settings";
import Error from "../pages/Error";

const appRoutes = {
  path: "/",
  element: <AppLayout />,
  errorElement: <Error />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "setting",
      element: <Settings />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
};

export default appRoutes;
