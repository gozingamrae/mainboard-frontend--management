import style from "../../css/Product.module.css";
import data from "../../data/Product.data.json";
function ProductTable() {
  const totalProductNum = 1;
  const products = data.products;
  return (
    <div className={style.box}>
      <div className={style.subTitle}>
        상품 목록 (총{" "}
        <span style={{ color: "rgb(195, 115, 219)" }}>{products.length}</span>
        개)
      </div>
      <div>버튼 모음</div>
      <div>
        {/* <table className={style.productTable}>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th style={{ width: "5%" }}>상품번호</th>
            <th>상품명</th>
            <th>기본 대여료(일)</th>
            <th>브랜드</th>
            <th>제조사</th>
            <th>카테고리</th>
            <th style={{ width: "5%" }}>수정</th>
            <th style={{ width: "5%" }}>복사</th>
            <th style={{ width: "5%" }}>옵션보기</th> */}
        {/* </tr> */}
        {/* 테이블 값 출력 */}
        {/* {products.map((product, index) =>
            focusGame == index ? (
              <tr style={{ backgroundColor: "#DDDDDD" }}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{product.상품코드}</td>
                <td>{product.상품명}</td>
                <td>{product["할인이 적용된 대여료"]}</td>
                <td>{product["브랜드"]}</td>
                <td>{product["제조사"]}</td>
                <td>{product["카테고리"]}</td>
                <td>
                  <button>수정</button>
                </td>
                <td>
                  <button>복사</button>
                </td>
                <td>
                  <div id={index} onClick={onClickGame}>
                    더보기
                  </div>
                </td>
              </tr>
            ) : (
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{product.상품코드}</td>
                <td>{product.상품명}</td>
                <td>{product["할인이 적용된 대여료"]}</td>
                <td>{product["브랜드"]}</td>
                <td>{product["제조사"]}</td>
                <td>{product["카테고리"]}</td>
                <td>
                  <button>수정</button>
                </td>
                <td>
                  <button>복사</button>
                </td>
                <td>
                  <div id={index} onClick={onClickGame}>
                    더보기
          //         </div> */}
        {/* //       </td>
          //     </tr>
          //   )
          // )} */}
        {/* </table> */}
      </div>
    </div>
  );
}
export default ProductTable;
