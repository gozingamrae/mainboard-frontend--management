import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";
import Navbar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import style from "./css/Layout.module.css";

function Layout() {
  return (
    <div className={style.layoutBox}>
      {/* <Header /> */}
      <Navbar/>
      <div className = {style.resultBox}>
        <Outlet className ={style.result} />
        <Footer className ={style.result}/>
      </div>
    </div>
  );
}

export default Layout;
