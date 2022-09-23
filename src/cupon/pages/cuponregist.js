import { useState } from "react";
import "../css/cuponregist-style.css";
import CuponRegistTable from "./cuponregistTable";




function CuponRegist(){

    const [focusData, setFocusData]  = useState({"subButton" : 0 , "pageNum" : 1});
    const [focusDataA, setFocusDataA]  = useState({"subButton" : 0 , "pageNum" : 1});
    const [focusDataB, setFocusDataB]  = useState({"subButton" : 0 , "pageNum" : 1});

    const onClickButton = (e) => {
        setFocusData({ ...focusData, "subButton" : e.target.id});
    }

    const onClickButtonA = (e) => {
        setFocusDataA({ ...focusDataA, "subButton" : e.target.id});
    }

    const onClickButtonB = (e) => {
        setFocusDataB({ ...focusDataB, "subButton" : e.target.id});
    }

    return(
        <div className='componentBox'>

            <div className="box">쿠폰등록</div>

            <div className="box" style={{backgroundColor: "#F8F5FF"}}>
                <div className="subBox">
                <h1>쿠폰이름</h1>
                <input type="text" />
                </div>

                <div className="subBox"  style={{backgroundColor: "#EBE9F2"}}>
                    <h1>재구매 고객 조건</h1>   
                    <div>
                        {focusData.subButton === "subButton1"? 
                        <div id="subButton" onClick={onClickButton} className="clickedSubButton">1개월</div> : <div id="subButton1" onClick={onClickButton} className="subButton">1개월</div>}
                        {focusData.subButton ==="subButton2"? 
                        <div id="subButton" onClick={onClickButton} className="clickedSubButton">3개월</div> : <div id="subButton2" onClick={onClickButton} className="subButton">3개월</div>}
                        {focusData.subButton ==="subButton3"? 
                        <div id="subButton" onClick={onClickButton} className="clickedSubButton">6개월</div> : <div id="subButton3" onClick={onClickButton} className="subButton">6개월</div>}
                         {focusData.subButton ==="subButton4"? 
                        <div id="subButton" onClick={onClickButton} className="clickedSubButton">직접입력</div> : <div id="subButton4" onClick={onClickButton} className="subButton">직접입력</div>}
                        
                        &nbsp;&nbsp;
                        <img src="/common/calendar.png" alt="제발돼라" />&nbsp;<input type="date"/>&nbsp;
                        &nbsp; ~ &nbsp;
                        <img src="/common/calendar.png" alt="제발돼라" />&nbsp;<input type="date"/>&nbsp;
                    </div>
                </div>

                <div className="subBox">
                    <h1>지급 대상</h1>
                    <input type="radio" value="all" name="cuponReportRadio"/> 전체고객 &nbsp;&nbsp;&nbsp;
                    <input type="radio" value="first" name="cuponReportRadio"/> 첫구매고객 &nbsp;&nbsp;&nbsp;
                    <input type="radio" value="again" name="cuponReportRadio"/> 재구매고객 &nbsp;&nbsp;&nbsp;
                </div>

                <div className="subBox">
                    <h1>쿠폰 종류</h1>
                    <input type="radio" value="productDiscount" name="cuponReportTypeRadio"/> 상품할인 &nbsp;&nbsp;&nbsp;
                    <input type="radio" value="deliveryFeeDiscount" name="cuponReportTypeRadio"/> 배송비 할인 &nbsp;&nbsp;&nbsp;
                </div>

                <div className="subBox">
                    <h1>발급 건수 제한</h1>   
                    <div>
                        {focusDataA.subButton ==="subButton5"? 
                        <div id="subButtonA" onClick={onClickButtonA} className="clickedSubButton">있음</div> : <div id="subButton5" onClick={onClickButtonA} className="subButton">있음</div>}
                        {focusDataA.subButton ==="subButton6"? 
                        <div id="subButtonA" onClick={onClickButtonA} className="clickedSubButton">없음</div> : <div id="subButton6" onClick={onClickButtonA} className="subButton">없음</div>}
                    </div>
                </div>

                <div className="subBox" style={{backgroundColor: "#EBE9F2"}}>
                <h1>제한 개수</h1>
                <input type="text" />
                </div>

                <div className="subBox">
                    <h1>할인 설정</h1>   
                    <div>
                        {focusDataB.subButton ==="subButton7"? 
                        <div id="subButton1" onClick={onClickButtonB} className="clickedSubButton">비율(%)</div> : <div id="subButton7" onClick={onClickButtonB} className="subButton">비율(%)</div>}
                        {focusDataB.subButton ==="subButton8"? 
                        <div id="subButton2" onClick={onClickButtonB} className="clickedSubButton">금액(W)</div> : <div id="subButton8" onClick={onClickButtonB} className="subButton">금액(W)</div>}
                    </div>
                </div>

                <div className="subBox" style={{backgroundColor: "#EBE9F2"}}>
                <h1>비율(%)</h1>
                <input type="text" /> &nbsp; %
                </div>
                <div className="subBox" style={{backgroundColor: "#EBE9F2"}}>
                <h1>금액(W)</h1>
                <input type="text" /> &nbsp; 원
                </div>

                <div className="subBox" >
                <h1>최소 주문 금액</h1>
                <input type="text" />
                </div>

                <div className="subBox">
                    <h1>쿠폰 발급 기간</h1>
                    <img src="/common/calendar.png" alt="제발돼라" />
                    <input className="dateInput" type="date" name="cuponReportTypeRadio"/>  &nbsp; ~ &nbsp;
                    <img src="/common/calendar.png" alt="제발돼라" />
                    <input className="dateInput" type="date" name="cuponReportTypeRadio"/>
                </div>
            </div>

            <div className="box">
                <CuponRegistTable/>
            </div>


        </div>
    );
}

export default CuponRegist;