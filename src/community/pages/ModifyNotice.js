return (
  <div className={style.componentBox}>
      <div className={style.titleBox}>공지사항 등록</div>
      <div className={style.box}>
          <div className={style.sbox}>
            <h1>분류</h1>
            <select>
              <option>일반</option>
              <option>이벤트</option>
              <option>배송지연</option>
              <option>상품</option>
            </select>
            <input type="checkbox"/> 
            <h1>중요 공지사항으로 설정</h1>
          </div>
          <div className={style.ntbox}>
            <h1>제목</h1>
            <input type="text" size="1000"/>
          </div>
          <div className={style.nsbox}>
            <h1>공지사항 상세</h1>
            <textarea cols="50" rows="10"/>
          </div>
          <div className={style.buttonbox}>
            <button>상품 공지사항 등록</button>
            <button>취소</button>
          </div>
      </div>
  </div>
)