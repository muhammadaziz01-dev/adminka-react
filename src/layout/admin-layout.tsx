import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Aside from "../components/aside";
import "./style.scss"
function Index() {
  return (
    <>
      <Header />
      <div className="wrapper-layout">
        <Aside />
        <Outlet />
      </div>
    </>
  );
}

export default Index;
