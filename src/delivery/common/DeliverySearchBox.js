import { useState } from "react";
import style from "./deliverySearchBox.module.css";

function DeliverySearchBox() {
  const [focusData, setFocusData] = useState({ subButton: 0, pageNum: 1 });

  const onClickButton = (e) => {
    setFocusData({ ...focusData, subButton: e.target.id });
  };
  return (
    <div className={style.box}>
      <div className={style.title} style={{ fontSize: "20px" }}>
        배송 내역 조회
      </div>
      <div className={style.subBox}>
        <div className={style.interval}>
          <label className={style.intervalLabel}>조회기간</label>
          <div className={style.inputBox}>
            <div>
              <select className={style.intervalStandard}>
                <option>결제완료일</option>
                <option>배송출발일</option>
                <option>배송완료일</option>
              </select>
            </div>
            <div className={style.intervalLine2}>
              <div className={style.intervalSize}>
                <div className={style.intervalButton}>오늘</div>
                <div className={style.intervalButton}>1주일</div>
                <div className={style.intervalButton}>1개월</div>
                <div className={style.intervalButton}>3개월</div>
                <div className={style.intervalButton}>직접선택</div>
              </div>
              <div>
                <div className={style.calendarBox}>
                  <div className={style.calendarIcon} />
                  <input
                    className={style.calendar}
                    type="date"
                    min="2022-01-01"
                    max="2039-12-31"
                  />
                </div>
                <p className={style.align}>~</p>
                <div className={style.calendarBox}>
                  <div className={style.calendarIcon} />
                  <input
                    className={style.calendar}
                    type="date"
                    min="2022-01-01"
                    max="2039-12-31"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.idBox}>
        <label className={style.idLabel}>구매자 ID</label>

        <div className={style.inputBox}>
          <input className={style.idInput} type="text" />
        </div>
      </div>
      <div className={style.subBox}>
        <div className={style.checkBoxContainer}>
          <div className={style.checkBox}>
            <input type="checkBox" />
            <label>배송준비중</label>
          </div>
          <div className={style.checkBox}>
            <input type="checkBox" />
            <label>배송중</label>
          </div>
          <div className={style.checkBox}>
            <input type="checkBox" />
            <label>배송완료</label>
          </div>
        </div>
      </div>
      <div>
        <button className={style.searchButton}>검색</button>
      </div>
    </div>
  );
}
export default DeliverySearchBox;
