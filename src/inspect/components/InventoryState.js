import { useState } from "react";
import style from "./InventoryState.module.css";

function InventoryState() {
  return (
    <div className={style.box}>
      <div className={style.deliveryStateBox}>
      <div className={style.deliveryState}>
          <div className={style.deliveryPreparingIcon} />
          <div className={style.deliveryStateText}>보유중 5건</div>
        </div>
        <div className={style.deliveryState}>
          <div className={style.deliveryPreparingIcon} />
          <div className={style.deliveryStateText}>배송준비중 1건</div>
        </div>
        <div className={style.deliveryState}>
          <div className={style.deliveryCompletedIcon} />
          <div className={style.deliveryStateText}>검수 중 1건</div>
        </div>
        <div className={style.deliveryState}>
          <div className={style.deliveryPreparingIcon} />
          <div className={style.deliveryStateText}>대여중 2건</div>
        </div>
        <div className={style.deliveryState}>
          <div className={style.deliveryProceedingIcon} />
          <div className={style.deliveryStateText}>배송중 1건</div>
        </div>
      </div>
    </div>
  );
}
export default InventoryState;
