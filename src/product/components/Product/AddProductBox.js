import { useState } from "react";
import style from "../../css/Product2.module.css"
import Slider from "./slider";


function SearchBox(){
    const [ product, setProduct] = useState({
        "name" : "",
        "category" : "",
        "brand" :"",
        "manufacturer" : "",
        "price" : 0,
        "grades" : [],
        "rentalPeriod":[],
        "storageLocation" :"",
        "parts" :[],
        "checkList" :[]
    });

    const onChangeName = (e) =>{
        setProduct({...product, "name":e.target.value});
    }
    const onChangeCategory = (e) =>{
        setProduct({...product, "category":e.target.value});
    }
    const onChangePrice = (e) =>{
        setProduct({...product, "price":e.target.value});
        console.log(product.price);
    }
    const onClickGradeAdd = ()=> {
        const grade = document.getElementById("grade");
        const sale = document.getElementById("gradeSale");
        setProduct({...product, "grades": [...product.grades,{ "grade" : grade.value, "sale": sale.value}]});
    }
    const onClickPeriodAdd = ()=> {
        const grade = document.getElementById("period");
        const sale = document.getElementById("periodSale");
        setProduct({...product, "rentalPeriod": [...product.rentalPeriod,{ "period" : grade.value, "sale": sale.value}]});
        console.log(product.rentalPeriod)
    }
    const onClickAddCheckList = ()=> {
        const checkListName = document.getElementById("checkListName");
        const checkListResults = document.getElementById("checkListResults");
        setProduct({...product, "checkList" : [...product.checkList,{ "name" : checkListName.value, "results":checkListResults.value}]});
    }
    const onClickAddParts = () =>{
        const partName = document.getElementById("partName");
        const partNum  = document.getElementById("partNum");
        setProduct({...product, "parts" : [...product.parts ,{ "name" : partName.value, "num" : partNum.value} ]});
    }
    return (
        <div>
            <div className={style.box}>
                <h1>상품 정보 입력</h1>
                <div className={style.subBox}>
                    <h1>상품명</h1>
                    <input type="text" placeholder="상품명을 입력하세요." style={{width:"80%"}} onChange={onChangeName}/>
                </div>
                <div className={style.subBox}>
                    <h1>카테고리</h1>
                    <select style={{width:"80%"}} onChange={onChangeCategory}>
                        <option>전략</option>
                        <option>심리</option>
                        <option>추리</option>
                        <option>파티</option>
                        <option>기타</option>
                    </select>
                </div>
                <div className={style.subBox}>
                    <h1>브랜드</h1>
                    <input type="text" placeholder="상품의 브랜드를 입력하세요." style={{width:"80%"}}/>
                </div>
                <div className={style.subBox}>
                    <h1>제조사</h1>
                    <input type="text" placeholder="상품의 제조사를 입력하세요." style={{width:"80%"}}/>
                </div>
                <div className={style.subBox}>
                    <h1>대표사진 입력</h1>
                    <input type="file"/>
                </div>
                <div className={style.subBox}>
                    <h1>상세설명 입력</h1>
                    <input type="file"/>
                </div>
            </div>
            <div className={style.box}>
                <h1>대여료</h1>
                <div className={style.subBox}>
                    <h1>기본 대여료(일)</h1>
                    <input type="number" min="0" onChange={onChangePrice}/>
                </div>
                <div className={style.borderSubBox}>
                    <table>
                        <tr><th>번호</th><th>등급</th><th>등급별 할인률</th></tr>
                        <tr><td>1</td><td>최상</td><td><input type="number"/></td></tr>
                        <tr><td>1</td><td>상</td><td><input type="number"/></td></tr>
                        <tr><td>1</td><td>중</td><td><input type="number"/></td></tr>
                    </table>
                </div>
            </div>
            <div className={style.box}>
                <h1>재고 정보 입력</h1>
                <div className={style.subBox}>
                    <h1>보관 위치</h1>
                    <input type="text"/>
                </div>
                <div className={style.subBox}>
                    <h1>구성 부품 추가</h1>
                    <input text="text" id="partName"/>
                    <div className={style.space}/>
                    <h1>필수 개수</h1>
                    <input type="number" id="partNum"/>
                    <div className={style.space}/>
                    <button onClick={onClickAddParts}>추가</button>
                </div>
                <div className={style.borderSubBox}>
                    {/* <h1>등급별 할인률을 추가하세요.</h1> */}
                    <table>
                    <tr><th>번호</th><th>부품명</th><th>필수 개수</th></tr>
                    {product.parts.map((part, index)=>(
                            <tr> <td>{index+1}</td>
                                 <td>{part.name}</td><td>{part.num}개</td></tr>
                        ))}
                    </table>
                </div>
            </div>
            <div className={style.box}>
                <h1>검수 정보 입력</h1>
                <div className={style.subBox}>
                    <h1>검수 체크리스트 추가</h1>
                    <input text="text" id="checkListName"/>
                    <div className={style.space}/>
                    <h1>검수 결과값</h1>
                    <select id="checkListResults">
                        <option>네/아니요</option>
                        <option>상/중/하</option>
                        <option>직접 입력</option>
                    </select>
                    <div className={style.space}/>
                    <button onClick={onClickAddCheckList}>추가</button>
                </div>
                <div className={style.borderSubBox}>
                    {/* <h1>등급별 할인률을 추가하세요.</h1> */}
                    <table>
                    <tr><th>번호</th><th>체크리스트</th><th>결과 값</th></tr>
                    {product.checkList.map((check, index)=>(
                            <tr> <td>{index+1}</td>
                                 <td>{check.name}</td><td>{check.results}</td></tr>
                        ))}
                    </table>
                </div>
            </div>
        </div>
        
    )
}

export default SearchBox;