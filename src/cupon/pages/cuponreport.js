import "./SearchBox"
import CuponReportTable from "./cuponreportTable.js";
import { useState, useEffect } from "react";
import "../css/cuponreport-style.css"
import { useSelector, useDispatch } from 'react-redux';
import { callGetCuponListAPI } from "../apis/CuponAPICalls";

function CuponReport(){

    const dispatch = useDispatch();

    const [isChecked, setisChecked] =  useState(false);

    const cupons = useSelector(state => state.cuponReducer);
    console.log("cupons : ", cupons);


    const onClickHandler = (e) => {
        console.log("쿠폰이름 : " , document.getElementById('cuponName').value);
        console.log("지급대상 : ", document.querySelector('input[id="client"]:checked').value);
        console.log("시작 기간 : ", document.getElementById('startDate').value);
        console.log("끝나는 기간 : ", document.getElementById('endDate').value);
        console.log("cupons : ", cupons);
        dispatch(callGetCuponListAPI(document.getElementById('cuponName').value,
        document.querySelector('input[id="client"]:checked').value,
        document.getElementById('startDate').value,
        document.getElementById('endDate').value
        ));
        console.log("쿠폰이르으음 : ", cupons.cuponName.value);
        //setisChecked(true);
    }

    useEffect(
        () => { console.log("cupons : ", cupons); },
        [cupons],
    );


    return (
        <div className="componentBox">
            <div className="box">쿠폰리포트</div>

            <div className="box" style={{backgroundColor: "#F8F5FF"}}>
                <div className="subBox">
                <h1>쿠폰이름</h1>
                <input id="cuponName" type="text" />
                </div>

                <div className="subBox">
                    <h1>지급 대상</h1>
                    <input id="client" type="radio" value="ALL" name="cuponReportRadio"/> 전체고객 &nbsp;&nbsp;&nbsp;
                    <input id="client" type="radio" value="FIRST" name="cuponReportRadio"/> 첫구매고객 &nbsp;&nbsp;&nbsp;
                    {/* <input type="radio" value="again" name="cuponReportRadio"/> 재구매고객 &nbsp;&nbsp;&nbsp; */}
                </div>
{/* 
                <div className="subBox">
                    <h1>쿠폰 종류</h1>
                    <input type="radio" value="productDiscount" name="cuponReportTypeRadio"/> 상품할인 &nbsp;&nbsp;&nbsp;
                    <input type="radio" value="deliveryFeeDiscount" name="cuponReportTypeRadio"/> 배송비 할인 &nbsp;&nbsp;&nbsp;
                </div> */}

                <div className="subBox">
                    <h1>쿠폰 조회 기간</h1>

                    {/* <input className="dateInput" type="date" value="productDiscount" name="cuponReportTypeRadio"/>  &nbsp; ~ &nbsp; */}

                    <img src="/common/calendar.png" alt="ERROR" />
                    <input id="startDate" className="dateInput" type="date" name="cuponReportTypeRadio"/>  &nbsp; ~ &nbsp;
                    <img src="/common/calendar.png" alt="ERROR" />
                    <input id="endDate" className="dateInput" type="date" name="cuponReportTypeRadio"/>

                </div>

                <div className="subBox" style={{justifyContent: "center"}}>
                {/* <button className="searchButton" style={{backgroundColor: "#EBE9F9", color: "gray"}}>초기화</button> &nbsp; &nbsp; */}
                <button className="searchButton" onClick={onClickHandler} >완료</button>


                </div>

            </div>

            <div className="box">
                <table>
                <tr><th>쿠폰코드</th><th>쿠폰이름</th><th>지급대상</th><th>할인률</th><th>최소 주문 금액</th><th>쿠폰 유효 기간</th><th>수정 / 삭제</th></tr>
                {isChecked?cupons.map(cupon => <tr><td>{cupon.target}</td></tr>):<div/>}
            


                </table>
            </div>



        </div>
    )
}

export default CuponReport;