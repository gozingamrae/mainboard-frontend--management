import { useState } from "react";
import style from "../../css/NavBar.module.css"
import {NavLink, Outlet, useNavigate} from 'react-router-dom';
import navData from "./NavBar.data.json";

function NavBar() {
  const [ focusNavBar, setFocusNavBar ] = useState(null);

  const navs = navData.navs;
  const results = navData.results;
  const options = navData.options;

    //navbutton 클릭 핸들러
    const onClickNav = (e) => {
      console.log(e.target.id);
      focusNavBar == e.target.id? setFocusNavBar(null):
      setFocusNavBar(e.target.id);
  }

  return (
    <div className={style.navbarBox}>
      {/* 메인 로고 */}
      <h1 className={style.mainlogo}> Mainboard </h1>
      {/* 셀렉트 박스 */}
      <select className={style.selectBox}>
        {options.map((option)=>(<option>{option.name}</option>))}
      </select>
      {/* 검색창 */}
      <div className={style.searchBox}>
        <input type="text" placeholder="검색창"/>
        <button>검색</button>
      </div>
      {/* 네비게이션 바 */}
      <div className={style.navButtonBox}>
        <ul>
          {navs.map((nav, index)=>(
                    <li id = {index} key = {index} className={style.navButton} onClick={onClickNav}>
                      <div id = {index}>{nav.name}</div>
                      <ul>
                        {focusNavBar==index?  
                          results[index].map((result)=>(
                            <li className={style.navButton2}>
                              <NavLink to={result.src}><div>{result.name}</div></NavLink>
                            </li>
                          )):null
                        }
                      </ul>
                    </li>
                ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
