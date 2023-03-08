import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import HomePage from "./pages/homepage/HomePage";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Create from "./pages/create/Create";
import Details from "./pages/details/Details";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/create", element: <Create /> },
      { path: "/details/:id", element: <Details /> },
    ],
  },
]);

function App() {
  const { authIsReady } = useAuthContext();

  return <div>{authIsReady && <RouterProvider router={router} />}</div>;
}

export default App;
