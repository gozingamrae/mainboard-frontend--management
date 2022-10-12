import style from "./css/Main.module.css";

function Main() {
  return (
    <div className={style.mainBox}>
      <div className={style.box}>
        <div className={style.title}>
          <h2>주문/배송</h2>
        </div>
        <div className={style.contentsBox}>
          <div>
            <p>결제 대기</p>
            <p>신규 주문</p>
            <p>오늘출발</p>
            <p>배송준비</p>
          </div>
        </div>
      </div>
      <div className={style.box}>
        <div className={style.title}>
          <h2>클레임/정산</h2>
        </div>
      </div>
      <div className={style.bigBox}>
        <div className={style.title}>
          <h2>매출 통계</h2>
        </div>
        <div className={style.contentsBox}>
          <div>
            <p>결제 대기</p>
            <p>신규 주문</p>
            <p>오늘출발</p>
            <p>배송준비</p>
          </div>
        </div>
      </div>
      <div className={style.box}>
        <div className={style.title}>
          <h2>주문/배송</h2>
        </div>
        <div>
          <p>결제 대기</p>
          <p>신규 주문</p>
          <p>오늘출발</p>
          <p>배송준비</p>
        </div>
      </div>
      <div className={style.box}>
        <div className={style.title}>
          <h2>클레임/정산</h2>
        </div>
      </div>
      <div className={style.bigBox}>
        <div className={style.title}>
          <h2>고객 현황</h2>
        </div>
        <div>
          <h1>리뷰</h1>
          <p>
            {/* 최근 작성된 리뷰: <span className={style2.result}>1건</span> */}
          </p>
          <p>
            {/* 평점 낮은 리뷰 : <span className={style2.result}> 2건</span> */}
          </p>
        </div>
        <div>
          <h1>혜택</h1>
          <p>
            {/* 진행중인 쿠폰: <span className={style2.result}>1건</span> */}
          </p>
          <p>
            {/* 보유 포인트 : <span className={style2.result}> 5,000P</span> */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
