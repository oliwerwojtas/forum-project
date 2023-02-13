import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../dist/output.css";
import "./App.css";
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
  return <RouterProvider router={router} />;
  // return <h1 className="text-5xl font-bold underline">xdd</h1>;
}

export default App;
