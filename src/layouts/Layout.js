import { Outlet } from "react-router-dom";
import Header from "../main/components/common/Header";
import Navbar from "../main/components/common/NavBar";
import Footer from "../main/components/common/Footer";
import style from "./Layout.module.css";

function Layout() {
  return (
    <div className={style.layoutBox}>
      {/* <Header /> */}
      <Navbar/>
      <div className = {style.resultBox}>
        <Outlet/>
        <Footer/>
      </div>
    </div>
  );
}

export default Layout;
