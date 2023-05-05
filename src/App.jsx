import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import HomePage from "./pages/homepage/HomePage";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Details from "./pages/details/Details";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./utilities/ErrorPage";
import ForgotPassword from "./pages/password/ForgotPassword";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <Login /> },
      { path: "/forgotPassword", element: <ForgotPassword /> },
      { path: "/signup", element: <Signup /> },
      { path: "/details/:id", element: <Details /> },
    ],
  },
]);

function App() {
  const { authIsReady } = useAuthContext();

  return (
    <div className="lg:h-screen bg-[#EFF1FD] dark:bg-[#161722] ">
      {authIsReady && <RouterProvider router={router} />}
    </div>
  );
}

export default App;
