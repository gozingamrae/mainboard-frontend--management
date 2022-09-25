import style from "./delivery.module.css";

function DeliveryTable() {
  return (
    <div className={style.box}>
      <h3>목록 (총 1개)</h3>
      <table>
        <tr>
          <th>상품번호</th>
          <th>주문번호</th>
          <th>발송처리일</th>
          <th>주문상태</th>
          <th>택배사</th>
          <th>송장번호</th>
          <th>배송완료일</th>
        </tr>
        <tr>
          <td>12345678</td>
          <td>202209220001</td>
          <td>2022.09.23</td>
          <td>배송중</td>
          <td>우체국택배</td>
          <td>89898989</td>
          <td>-</td>
        </tr>
      </table>
      <div className={style.pageButtonBox}>
        <img src="/common/left_arrow.png" />
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <img src="/common/right_arrow.png" />
      </div>
    </div>
  );
}
export default DeliveryTable;
