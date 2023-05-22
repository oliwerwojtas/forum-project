import { useAuthContext } from "./hooks/useAuthContext";
//components
import HomePage from "./pages/homepage/HomePage";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Details from "./pages/details/Details";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "../src/components/reusable/ErrorPage";
import ForgotPassword from "./pages/password/ForgotPassword";
import ProtectedRoute from "./pages/ProtectedRoute";
//utilities
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      { path: "/login", element: <Login /> },
      { path: "/forgotPassword", element: <ForgotPassword /> },
      { path: "/signup", element: <Signup /> },
      {
        path: "/details/:id",
        element: (
          <ProtectedRoute>
            <Details />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const App = () => {
  const { authIsReady } = useAuthContext();

  return <div className="h-screen">{authIsReady && <RouterProvider router={router} />}</div>;
};

export default App;
