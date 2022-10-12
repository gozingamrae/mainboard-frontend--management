import "./SearchBox"
import CuponReportTable from "./cuponreportTable.js";
import { useState, useEffect, useCallback } from "react";
import "../css/cuponreport-style.css"
import { useSelector, useDispatch } from 'react-redux';
import { callGetCuponListAPI } from "../apis/CuponAPICalls";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function CuponReport(){

    const dispatch = useDispatch();

    const [isChecked, setisChecked] =  useState(false);

    const cupons = useSelector(state => state.cuponReducer);
    const nav = useNavigate();
    // console.log("쿠폰이르으음 : ", cupons);

    const onClickHandler = (e) => {
        // setisChecked(false);
        console.log("쿠폰이름 : " , document.getElementById('cuponName').value);
        console.log("지급대상 : ", document.querySelector('input[id="client"]:checked').value);
        console.log("시작 기간 : ", document.getElementById('startDate').value);
        console.log("끝나는 기간 : ", document.getElementById('endDate').value);
        // console.log("cupons : ", cupons);
        dispatch(callGetCuponListAPI(document.getElementById('cuponName').value,
        document.querySelector('input[id="client"]:checked').value,
        document.getElementById('startDate').value,
        document.getElementById('endDate').value
        ));
        // console.log("쿠폰이르으음 : ", cupons);
        //nav("/");
        console.log("현재코드 : ", cupons.coupon.couponCode)
        if(cupons.coupon.couponCode)
            setisChecked(true);
        else{
            alert("조건에 맞는 쿠폰이 없습니다.");
            // window.location.reload();
        }
                    // setisChecked(true);
    }
    
    // const mounted = useRef(false);

    // useEffect(() => {
    //     if(!mounted.current){
    //         mounted.current=true;
    //     }else{
    //         console.log("ddddddddddddd");
    //     }
    // }, cupons.coupon.couponCode)


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


            {isChecked?<div className="box"><CuponReportTable/></div>:<div/>}


        </div>
    )
}

export default CuponReport;