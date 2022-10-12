import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./css/Inventory.module.css"

import AddInventoryBox from "./components/Warehousing/AddInventoryBox"

function Warehousing(){
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
        alert(selectType + "입고를 완료했습니다.")
        nav("/inventory");
    }

    return (
        <div className={style.componentBox}>
            <div className={style.titleBox}>
                재고 입고
            </div>
            <AddInventoryBox/>
            <button style={{width : "100%" , height : "50px", margin : "10px"}} onClick={onClickSubmit}>
                입고하기
            </button>
        </div>
    )
}

export default Warehousing;