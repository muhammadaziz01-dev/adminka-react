import { createBrowserRouter, Navigate } from "react-router-dom";
import AdminLayout from "../layout/admin-layout";
import {Login , Dashboard , Settings} from "../views"
import {getCookies} from "../utils/cookie"
// import Products from "../views/products/Products";
// import Categories from "../views/categories/Categories";

// Auth'ni tekshirish uchun funksiya
const isAuthenticated = () => {
  return getCookies("access_token"); 
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: isAuthenticated() ? <AdminLayout /> : <Navigate to="/login" />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
    //   { path: "products", element: <Products /> },
    //   { path: "categories", element: <Categories /> },
      { path: "settings", element: <Settings /> },
      { path: "", element: <Navigate to="dashboard" /> }, // Default sahifa
    ],
  },
]);

export default router;
