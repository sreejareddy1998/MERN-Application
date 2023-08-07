import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  DashboardLayout,
  HomeLayout,
  Register,
  Login,
  Error,
  Landing,
} from "./pages";
const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};
const isDarkThemeEnabled = checkDefaultTheme();
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    //whenever no route present errorElement will navigate t0 the custome error page
    children: [
      {
        index: true,
        element: <Landing />,
        // this index page will be displayed when '/' is displayed
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled} />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
