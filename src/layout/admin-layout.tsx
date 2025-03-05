import { Outlet, Link } from "react-router-dom";
function Index() {
  return (
    <div className="flex">
    {/* Sidebar */}
    <nav className="w-64 bg-gray-800 text-white h-screen p-4">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        {/* <li><Link to="/admin/products">Products</Link></li>
        <li><Link to="/admin/categories">Categories</Link></li> */}
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </nav>

    {/* Main Content */}
    <div className="flex-1 p-6">
      <Outlet /> {/* Bu yerda bolalar sahifalar render bo‘ladi */}
    </div>
  </div>
  )
}

export default Index