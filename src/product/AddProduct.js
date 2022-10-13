import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AddProductBox from "./components/Product/AddProductBox"
import style from "./css/Product2.module.css"
function AddProduct(){
    const nav = useNavigate();

    return (
        <div className={style.componentBox}>
        <div className={style.titleBox}>새 상품 등록</div>
        <AddProductBox/>
        </div>
    )
}

export default AddProduct;