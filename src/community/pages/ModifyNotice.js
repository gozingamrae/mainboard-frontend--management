import style from "../css/community.module.css"

function ModifyNotice() {
  return(
    <div className={style.componentBox}>
    <div className={style.titleBox}>공지사항 등록</div>
    <div className={style.box}>
        <div className={style.subbox}>
          <h1>분류</h1>
          <select>
            <option>일반</option>
            <option>이벤트</option>
            <option>배송지연</option>
            <option>상품</option>
          </select>
          <input type="checkbox"/> <h1>중요 공지사항으로 설정</h1>
        </div>
        <div className={style.subbox}>
          <h1>제목</h1>
          <input type="text"/>
        </div>
        <div className={style.subbox}>
          <h1>공지사항 상세</h1>
          <input type="text"/>
        </div>
        <div className={style.subbox}>
          <h1>전시위치</h1>
          <select>
            <option>전체</option>
            <option>웹</option>
            <option>모바일</option>
          </select>
          <input type="checkbox"/> <h1>모든 상품에 공지사항 노출</h1>
        </div>
        <div className={style.subbox}>
          <h1>전시기간 설정</h1>
          <button>설정함</button><button>설정안함</button>
        </div>
        <div className={style.subbox}>
          <h1>팝업사용</h1>
          <button>설정함</button><button>설정안함</button>
        </div>
        <div className={style.subbox}>
          <button>상품 공지사항 수정</button>
          <button>취소</button>
        </div>
    </div>
</div>
  )
}

export default ModifyNotice;