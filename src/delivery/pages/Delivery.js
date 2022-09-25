import style from "../common/delivery.module.css";
import SearchBox from "../common/DeliverySearchBox";
import DeliveryState from "../common/DeliveryState";
import DeliveryTable from "../common/DeliveryTable";

function Delivery() {
  return (
    <div className={style.componentBox}>
      <div className={style.titleBox}>배송 내역 조회</div>
      <DeliveryState />
      <SearchBox />
      <DeliveryTable />
    </div>
  );
}

export default Delivery;
