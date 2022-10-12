import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router';
import qs from "query-string"; 
import UpdateProductBox from "./components/Product/UpdateProductBox"
import style from "./css/Product2.module.css"
function AddProduct(){
    
    //쿼리 스트링 추출
    const searchParams = useLocation().search;
    const query = qs.parse(searchParams);

    const nav = useNavigate();
    //카테고리 타입 옵션 데이터

    const onClickSubmit = () => {
        alert(query.productCode + "번 상품이 수정되었습니다.")
        nav("/product");
    }

    return (
        <div className={style.componentBox}>
        <div className={style.titleBox}>상품 수정</div>
        <UpdateProductBox/>
        <button style={{width : "100%" , height : "50px", margin : "10px"}} onClick={onClickSubmit}>
            상품 수정하기
        </button>
        </div>
    )
}

export default AddProduct;