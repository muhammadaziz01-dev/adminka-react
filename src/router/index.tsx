import { createBrowserRouter, Navigate } from "react-router-dom";
import AdminLayout from "../layout/admin-layout";
import {Login , Dashboard , Settings} from "../views"
import {getCookies} from "../utils/cookie"
// import Products from "../views/products/Products";
// import Categories from "../views/categories/Categories";

// Auth'ni tekshirish uchun funksiya
const isAuthenticated = () => {
  return getCookies("token"); // Agar token bo'lsa, foydalanuvchi avtorizatsiyadan o'tgan
};

const router = createBrowserRouter([
//   {
//     path: "/",
//     // element: isAuthenticated() ? <Navigate to="/admin" /> : <Navigate to="/login" />,
//     element: <Login/>
//   },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    // element: isAuthenticated() ? <AdminLayout /> : <Navigate to="/login" />,
    element: <AdminLayout />,
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
