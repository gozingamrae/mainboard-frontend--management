import "./SearchBox"
import CuponRegistTable from "./cuponregistTable.js";
import "../css/cuponreport-style.css"

function cuponRegist(){
    return (
        <div className="componentBox">
            <div className="box">쿠폰리포트</div>

            <div className="box" style={{backgroundColor: "#F8F5FF"}}>
                <div className="subBox">
                <h1>쿠폰이름</h1>
                <input type="text" />
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
                    <h1>쿠폰 조회 기간</h1>

                    <img src="/common/calendar.png" alt="ERROR" />
                    <input className="dateInput" type="date" name="cuponReportTypeRadio"/>  &nbsp; ~ &nbsp;
                    <img src="/common/calendar.png" alt="ERROR" />
                    <input className="dateInput" type="date" name="cuponReportTypeRadio"/>
                </div>

                <div className="subBox" style={{justifyContent: "center"}}>
                <button className="searchButton" style={{backgroundColor: "#EBE9F9", color: "gray"}}>초기화</button> &nbsp; &nbsp;
                <button className="searchButton">완료</button>


                </div>

            </div>

            <div className="box">
                <CuponRegistTable/>
            </div>



        </div>
    )
}

export default cuponRegist;