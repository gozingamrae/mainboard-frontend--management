import style from "../css/community.module.css"
import { useState } from "react";


function SearchBox() {
  const options = [{"option": "제목"}, {"option": "번호"}]

  return (
    <div className={style.box}>
        <h1>공지사항 조회</h1>
        <div className={style.subBox}>
          <h1>검색어</h1>
          <select>
            <option>제목</option>
            <option>번호</option>
          </select>
          <input style={{height : "20px"}} type="text"/>
        </div>
        <div className={style.subBox}>
          
        </div>
        <button className={style.searchButton}>검색하기</button>
    </div>
  )
}

export default SearchBox;