import { useAuthContext } from "./hooks/useAuthContext";
//components
import ErrorPage from "../src/components/reusable/ErrorPage";
import ProtectedRoute from "./pages/ProtectedRoute";
//utilities
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./index.css";

const HomePage = lazy(() => import("./pages/homepage/HomePage"));
const Login = lazy(() => import("./pages/login/Login"));
const Signup = lazy(() => import("./pages/signup/Signup"));
const Details = lazy(() => import("./pages/details/Details"));
const RootLayout = lazy(() => import("./pages/RootLayout"));
const ForgotPassword = lazy(() => import("./pages/password/ForgotPassword"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <RootLayout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/forgotPassword",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ForgotPassword />
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Signup />
          </Suspense>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute>
              <Details />
            </ProtectedRoute>
          </Suspense>
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
