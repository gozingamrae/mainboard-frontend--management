import style from "../../common/Common.module.css";
import SearchBox from "../../common/SearchBox";
import CommonTable from "../../common/CommonTable";

//스타일 예시
function DeliveryTest() {
  return (
    <div className={style.componentBox}>
      <div className={style.titleBox}>페이지 제목</div>
      <SearchBox />
      <CommonTable />
    </div>
  );
}

export default DeliveryTest;
