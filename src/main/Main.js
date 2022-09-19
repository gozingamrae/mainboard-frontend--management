import style from "./css/Main.module.css";

function Main() {
  return (
    <div clasName={style.meinBox}>
      <div>
         <div>
            <h2>주문/배송</h2>
            <h2>클레임/정산</h2>
         </div>
      </div>
      <div>
        <div>
            <h2>    
                매출 통계
            </h2>
        </div>
        <div>
            <h2>문의</h2>
        </div>
        <div>
            <h2>공지 사항</h2>
        </div>
      </div>
    </div>
  );
}

export default Main;
