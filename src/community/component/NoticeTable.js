import style from "../css/community.module.css"

function NoticeTable() {


  return(
    <div className={style.box}>
      <h1></h1>
      <div>
        <table className={style.NoticeTable}>
          <tr><th><input type="checkbox"/></th>
              <th><button className={style.clickedSubButton}>수정</button></th>
              <th>번호</th>
              <th>분류</th>
              <th>전시상태</th>
              <th>제목</th>
              <th>전시 시작일</th>
              <th>전시 종료일</th>
              <th>등록일</th>
              <th><button className={style.clickedSubButton}>삭제</button></th>
          </tr>
        </table>
      </div>
    </div>
  );
}



export default NoticeTable;