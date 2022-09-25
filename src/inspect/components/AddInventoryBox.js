import { useState } from "react";
import style from "../../css/Inventory.module.css";


function SearchBox(){
    const options = [{ "option": "상품번호"}, { "option": "상품명"},{ "option": "카테고리명"},{ "option": "브랜드명"}]
    const categorys = [{"name" : "전략"}, {"name" : "심리"},{"name" : "추리"},{"name":"파티"},{"name":"마피아"}]
    const gameName = [{"name" : "스플랜더"}, {"name" : "부루마블"},{"name" : "할리갈리"},{"name":"어쩌고"},{"name":"저쩌고"}]
    const [searchText, setSearchText] = useState("");
    const [click, setClick] =useState(false); 
    const onChangeSearchText = (e) =>{
        setSearchText(e.target.value);
    }
    const onClickButton = () =>{
        setClick(true);
    }
    const onClickSearch = () =>{
        setSearchText("부루마블");
    }
    return (
        <div>
            <div className={style.box}>
                <h1>재고 정보 입력</h1>
                <div className={style.subBox}>
                    <h1>상품 검색</h1>
                    <input type="text" placeholder="상품을 검색하세요"/>
                    <button className={style.subButton} onClick={onClickSearch}>검색하기</button>
                </div>
                <div className={style.borderSubBox}>
                    {searchText == "부루마블"? 
                        <div className={style.subBox} style={{width : "100%"}}>
                            <h1 style={{width : "60%"}}>부루마블</h1>
                            <button onClick={onClickButton}>선택하기</button>
                        </div>:
                        null
                    }
                </div>
            </div>
            <div className={style.box}>
                <h1>재고 상태</h1>
                <div className={style.subBox}>
                    <h1>등급</h1>
                    <select>
                        <option>최상</option>
                        <option>상</option>
                        <option>중</option>
                    </select>
                </div>
            </div>
            <div className={style.box}>
                <h1>보유 부품 입력</h1>
                <div className={style.borderSubBox}>
                    {click? <table>
                        <tr><th style={{width:"50%"}}>부품명</th><th>필수개수</th><th>보유 개수</th></tr>
                        <tr><td>바닥판</td><td>1개</td><td><input type="number"/>개</td></tr>
                        <tr><td>이동말</td><td>1개</td><td><input type="number"/>개</td></tr>
                        <tr><td>5천원권지폐</td><td>30개</td><td><input type="number"/>개</td></tr>
                        <tr><td>1만원권지폐</td><td>50개</td><td><input type="number"/>개</td></tr>
                        <tr><td>5만원권지폐</td><td>30개</td><td><input type="number"/>개</td></tr>
                    </table> :
                    <div>상품을 선택하세요.</div>}
                    
                </div>
            </div>
        </div>
        
    )
}

export default SearchBox;