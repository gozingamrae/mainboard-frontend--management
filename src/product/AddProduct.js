import { useState } from "react";
import { useNavigate } from "react-router-dom";

import style from "./css/Product.module.css"
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
        nav("/");
    }

    return (
        <div className={style.productBox}>
            <div className={style.title}>
                상품 등록
            </div>
            <div className={style.box}>
                <div>상품데이터를 입력하세요.</div>
                <div className={style.subBox}>
                    <h4>보드게임 카테고리</h4>
                    <select>
                        {categorys.map((category)=>(<option>{category.type}</option>))}
                    </select>
                </div>
                <div className={style.subBox}>
                    <h4>보드게임 종류 검색</h4>
                    <input type="text" onChange={onChangeHandle}/><button>검색</button>
                        
                 </div>
                <div>
                    {types.filter((type)=>{if(type.name.indexOf(searchText) != -1 && searchText != ""){return true}}).map((type)=>(<div>{type.name}</div>)) == ""?
                        <div className={style.subBox}>
                            <h4></h4>검색결과가 없습니다.
                            <button> 새로 입력하기</button>    
                        </div>
                        : types.filter((type)=>{if(type.name.indexOf(searchText) != -1){return true}}).map((type)=>(
                            <div className={style.subBox}>
                                <h4></h4>
                                {type.name}
                                <button id={type.name} onClick={onClickHandle}>선택</button>
                            </div>
                            ))
                        }
                    <div className={style.subBox}>
                        <h4>선택한 보드게임 :</h4> <span> {selectType}</span>
                    </div>
                </div>
                <div className={style.subBox}>
                    <h4> 등급  </h4>
                    <select>
                        <option>상</option>
                        <option>중</option>
                        <option>하</option>
                    </select>
                </div>
                <div className={style.subBox}>
                    <h4> 보관위치  </h4>
                        <input type="text" placeholder="보관 위치를 입력하세요."/>
                </div>
                    
                <div className={style.subBox}>
                        <h4>상품 정보 등록</h4>
                        <input type="file"/>
                </div>
        </div>
        <button style={{width : "100%" , height : "50px", margin : "10px"}} onClick={onClickSubmit}>
            상품 등록 하기
        </button>
        </div>
    )
}

export default AddProduct;