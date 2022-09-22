import style from "../../css/Product.module.css"
import data from "../../data/Product.data.json"
function ProductTable(){
    const totalProductNum = 1;
    const products = data.products;
    return (
        <div className={style.box}>
                <div className={style.subTitle}>상품 목록 (총 <span style={{color : "rgb(195, 115, 219)"}}>{products.length}</span>개)</div>
                <div> 
                    버튼 모음
                </div>
                <div>
                    <table className={style.productTable}>
                        <tr><th><input type="checkbox"/></th><th>수정</th><th>복사</th><th>상품번호</th><th>상품명</th><th>등급</th><th>재고수량</th><th>대여료</th><th>대여기간</th></tr>
                        {products.map((product, index)=>(
                        <tr><td><input type="checkbox"/></td>
                            <td><button>수정</button></td>
                            <td><button>복사</button></td>
                            <td>{product.상품코드}</td>
                            <td>{product.상품명}</td>
                            <td>{product.등급}</td>
                            <td>2개</td>
                            <td>{product["할인이 적용된 대여료"]}</td>
                            <td>{product.대여기간}</td></tr>
                            ))}
                    </table>
                </div>
            </div>
    )
}
export default ProductTable;