import { useState } from "react";
import style from "./deliveryState.module.css";

function DeliveryState() {
  return (
    <div className={style.box}>
      <div className={style.deliveryStateBox}>
        <div className={style.deliveryState}>
          <div className={style.deliveryPreparingIcon} />
          <div className={style.deliveryStateText}>배송준비중 0건</div>
        </div>
        <div className={style.deliveryState}>
          <div className={style.deliveryProceedingIcon} />
          <div className={style.deliveryStateText}>배송중 1건</div>
        </div>
        <div className={style.deliveryState}>
          <div className={style.deliveryCompletedIcon} />
          <div className={style.deliveryStateText}>배송완료 0건</div>
        </div>
      </div>
    </div>
  );
}
export default DeliveryState;
