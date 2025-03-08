import { createBrowserRouter, Navigate } from "react-router-dom";
import AdminLayout from "../layout/admin-layout";
import {Login , Dashboard , Settings} from "../views"
import {getCookies} from "../utils/cookie"

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthCheck />, 
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "settings", element: <Settings /> },
      { path: "", element: <Navigate to="dashboard" /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function AuthCheck() {
  const token = getCookies("access_token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <AdminLayout />;
}

export default router;
