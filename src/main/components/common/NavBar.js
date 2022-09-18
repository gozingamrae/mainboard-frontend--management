import { useState } from "react";
import style from "../../css/NavBar.module.css"

function NavBar() {
  const [ focusNavBar, setFocusNavBar ] = useState(null);
  const navs = [{name: "상품관리", src : "/produc"},
                {name: "판매관리", src : "/produc"},
                {name: "정산관리", src : "/produc"},
                {name: "문의/리뷰 관리", src : "/produc"}];
  const results = [[{name : "상품 등록", src : "/produc"},
                   {name : "상품 조회/수정", src : "/produc"},
                   {name : "상품 조회/수정", src : "/produc"},
                   {name : "상품 조회/수정", src : "/produc"}],
                  [{name : "상품 조회/수정", src : "/produc"},
                   {name : "상품 조회/수정", src : "/produc"},
                   {name : "상품 조회/수정", src : "/produc"},
                   {name : "상품 조회/수정", src : "/produc"}],
                  [{name : "상품 조회/수정", src : "/produc"},
                  {name : "상품 조회/수정", src : "/produc"}],
                  [{name : "상품 조회/수정", src : "/produc"},
                  {name : "상품 조회/수정", src : "/produc"}],
                  [{name : "상품 조회/수정", src : "/produc"}]];
  
  //select 옵션 값
  const options = [{value : 1, name :"수취인명"},
                  {value : 1, name :"구매자명"},
                  {value : 1, name :"구매자 연락처"},
                  {value : 1, name :"구매자 ID"},
                  {value : 1, name :"주문번호"},
                  {value : 1, name :"상품번호"},
                  {value : 1, name :"운송장번호"}]

    //navbutton 클릭 핸들러
    const onClickNav = (e) => {
      console.log(e.target.id);
      focusNavBar == e.target.id? setFocusNavBar(null):
      setFocusNavBar(e.target.id);
  }

  return (
    <div className={style.navbarBox}>
      <h1 className={style.mainlogo}> Mainboard </h1>
      <select className={style.selectBox}>
        {options.map((option)=>(<option>{option.name}</option>))}
      </select>
      <div className={style.searchBox}>
        <input type="text" placeholder="검색창"/>
        <button>검색</button>
      </div>
      <div className={style.navButtonBox}>
        <ul>
          {navs.map((nav, index)=>(
                    <li id = {index} key = {index} className={style.navButton} onClick={onClickNav}>
                      <div id = {index}>{nav.name}</div>
                      <ul>
                        {focusNavBar==index?  
                          results[index].map((result)=>(
                            <li className={style.navButton2}>
                              <div>{result.name}</div>
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
