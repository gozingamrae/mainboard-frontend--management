import style from "../css/community.module.css"


function AddNotice() {


    return (
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
                  <input type="text" size="1000"/>
                </div>
                <div className={style.subbox}>
                  <h1>공지사항 상세</h1>
                  <input type="text"/>
                </div>
                <div className={style.subbox}>
                  <button>상품 공지사항 등록</button>
                  <button>취소</button>
                </div>
            </div>
        </div>
    )



}

export default AddNotice;