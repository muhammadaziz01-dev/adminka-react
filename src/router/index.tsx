import { createBrowserRouter, Navigate } from "react-router-dom";
import AdminLayout from "../layout/admin-layout";
import {Login , Dashboard , Settings} from "../views"
import {getCookies} from "../utils/cookie"

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthCheck />, 
    children: [
      { path: "tour", element: <Dashboard /> },
      {path:"hotel", element: <div>Hotels</div>},
      {path:"new", element: <div>News</div>},
      {path:"blog", element: <div>Blogs</div>},
      {path:"product", element: <div>Products</div>},
      {path:"category", element: <div>Categoris</div>},
      { path: "settings", element: <Settings /> },
      { path: "", element: <Navigate to="tour" /> },
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
