import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AddProductBox from "./components/Product/AddProductBox"
import style from "./css/Product2.module.css"
function AddProduct(){
    const [searchText , setSearchText ] = useState("");
    const [selectType , setSelectType ] = useState("");
    const nav = useNavigate();
    //카테고리 타입 옵션 데이터
    const categorys = [{ type : "전략"},{ type : "파티"},{ type : "심리"},{ type : "추리"}];
    const types = [{ name : "부루마블"},{ name : "스플랜더"},{ name : "할리갈리"},{ name : "로보77"},{ name : "루미큐브"},{ name : "루미큐브"},{ name : "루미큐브"},{ name : "루미큐브"}];
    
    const onChangeHandle = (e) => {
        setSearchText(e.target.value);
        console.log("hello")
    };
    const onClickHandle = (e) => {
        setSelectType(e.target.id);
    }
    const onClickSubmit = () => {
        alert(selectType + " 상품이 등록되었습니다.")
        nav("/product");
    }

    return (
        <div className={style.componentBox}>
        <div className={style.titleBox}>새 상품 등록</div>
        <AddProductBox/>
        <button style={{width : "100%" , height : "50px", margin : "10px"}} onClick={onClickSubmit}>
            상품 등록 하기
        </button>
        </div>
    )
}

export default AddProduct;