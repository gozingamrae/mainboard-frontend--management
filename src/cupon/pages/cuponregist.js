import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/cuponregist-style.css";


function Warehousing(){
    const [searchText , setSearchText ] = useState("");

    const nav = useNavigate();
    //카테고리 타입 옵션 데이터
    const categorys = [{ type : "전략"},{ type : "파티"},{ type : "심리"},{ type : "추리"}];
    const types = [{ name : "부루마블"},{ name : "스플랜더"},{ name : "할리갈리"},{ name : "로보77"},{ name : "루미큐브"},{ name : "루미큐브"},{ name : "루미큐브"},{ name : "루미큐브"}];
    
    const onChangeHandle = (e) => {
        setSearchText(e.target.value);
        console.log("hello");
    };
    const onClickHandler = (e) => {
        console.log("hello");
       
    }
    const onClickSubmit = () => {
        nav("/");
    }

    return (
        <div className= "inventoryBox">
            <div className="title">
                쿠폰등록
            </div>

            <div className="box">
                <label className="cuponRegistLabel">쿠폰 이름</label> 
                <input className="cuponRegistInputBox" type="text" id="cuponName"/> 
                <br/>

                <lablel  className="cuponRegistLabel">지급 대상 </lablel>
                <input type="radio" name="target" value="all"/><p className="targetRadioText">전체고객 </p> &nbsp;
                <input type="radio" name="target" value="first"/><p className="targetRadioText">첫구매고객 </p> &nbsp;
                <input type="radio" name="target" value="again"/><p className="targetRadioText">재구매고객 </p> &nbsp;
                <br/>

                {/*재구매고객 선택시 화면에 출력  */}
                <div className="selectiveBox"> 
                <label  className="cuponRegistLabel">재구매 고객 조건</label> &nbsp;
                <table className="cuponRegistTable"> 
                <tr><td className="cuponRegistTableTD"onClick={onClickHandler}>1개월</td>
                <td className="cuponRegistTableTD">3개월</td>
                <td className="cuponRegistTableTD">6개월</td>
                <td className="cuponRegistTableTD">직접입력</td>
                </tr>
                </table>
                <br/>
                {/* 직접입력태그 선택 시 화면에 출력 */}
                <input type="date" name="cuponCondition"/>~<input type="date" name="cuponCondition"/>
                </div>

                <labe className="cuponRegistLabel">쿠폰 종류</labe>
                <input type="radio" name="cuponType" value="productDiscount"/><p className="targetRadioText">상품할인</p> &nbsp;
                <input type="radio" name="cuponType" value="productDiscount"/><p className="targetRadioText">배송비할인</p> &nbsp;
                <br/>

                <label className="cuponRegistLabel">발급 건수 제한</label>
                <table className="cuponRegistTable"> 
                <tr>
                    <td className="cuponRegistTableTD">있음</td>
                    <td className="cuponRegistTableTD">없음</td>
                </tr>
                </table>
                <br/>{/* 발급 건수 제한 있음 선택 시 화면에 출력 */}
                <label className="cuponRegistLabel">제한 개수</label> 
                <input className="cuponRegistInputBox" type="text" id="cuponQuantity"/> 개
                <br/>


                <label className="cuponRegistLabel">할인 설정</label>
                    <table className="cuponRegistTable"> 
                    <tr>
                        <td className="cuponRegistTableTD">비율(%)</td>
                        <td className="cuponRegistTableTD">금액(원)</td>
                    </tr>
                    </table>
                <br/>

                <div>{/* 비율 혹은 금액 선택에 따라 화면에 출력 */}
                    <label className="cuponRegistLabel">비율(%)</label> 
                    <input className="cuponRegistInputBox" type="text" id="discountRate"/> %
                </div>
                <div>
                    <label className="cuponRegistLabel">금액(원)</label> 
                    <input className="cuponRegistInputBox" type="text" id="discountRate"/> 원
                </div>
                <br/>


                <label className="cuponRegistLabel">최소주문금액</label> 
                <input className="cuponRegistInputBox" type="text" id="minAmount"/> 원
                <br/>

                <label className="cuponRegistLabel">쿠폰발급기간</label> 
                <input type="date"/> ~ <input type="date"/>
                <br/>

                <label className="cuponRegistLabel">쿠폰유효기간(기준)</label>
                <table className="cuponRegistTable">
                    <tr>
                        <td className="cuponRegistTableTD">기간</td>
                        <td className="cuponRegistTableTD">발급일</td>
                    </tr>
                </table>
                <br/>
                <input type="date" name="cuponCondition"/>~<input type="date" name="cuponCondition"/>




            </div>
            
            <button style={{width : "100%" , height : "50px", margin : "10px"}} onClick={onClickSubmit}>
                완료
            </button>
        </div>
    )
}

export default Warehousing;