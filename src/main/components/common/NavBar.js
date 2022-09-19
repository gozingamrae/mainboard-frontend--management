import { useEffect, useState } from "react";
import style from "../../css/NavBar.module.css"
import {NavLink, Outlet, useNavigate} from 'react-router-dom';
import navData from "../../data/NavBar.data.json";

function NavBar() {
  const [ focusNavBar, setFocusNavBar ] = useState(null);
  const [ beforeNavBar, setBeforeNavBar ] = useState(null);

  const options = navData.options;
  const navs = navData.navs;
  const results = navData.results;

  //navbutton 클릭 핸들러
  const onClickNav = (e) => {
    
    //버튼 클릭하며 포커스 버튼 변경
    setFocusNavBar(e.target.id);

    //같은 버튼 누르면 접기
    if(beforeNavBar == e.target)
    {
        setFocusNavBar(null);
        setBeforeNavBar(null);
    }  
    else{
       (setBeforeNavBar(e.target))
    }
  }

  return (
    <div className={style.navbarBox}>
      {/* 메인 로고 */}
      <NavLink  to={"/"}><h1 className={style.mainlogo}> Mainboard </h1></NavLink>
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
                              <NavLink id={index} to={result.src}><div id={index}>{result.name}</div></NavLink>
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
