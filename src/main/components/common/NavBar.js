import style from "../../css/NavBar.module.css"

function NavBar() {
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
                    <li key = {index} className={style.navButton}>
                      <div>{nav.name}</div>
                      <ul>
                        {results[index].map((result)=>(
                          <li className={style.navButton2}>
                            <div>{result.name}</div>
                          </li>
                        ))}
                      </ul>
                    </li>
                ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
