import SearchBox from "./SearchBox"
import PointReportTable from "./pointreportTable"
import "../css/pointreport-style.css"

//스타일 예시
function cuponRegist(){
    return (
        <div className="componentBox">
            <div className="box">포인트 지급</div>

                <div className="box" style={{backgroundColor: "#F8F5FF"}}>

                    <div className="subBox">
                        <h1>포인트 조회 기간</h1>
                        <img src="/common/calendar.png" alt="ERROR" />
                        <input className="dateInput" type="date" name="cuponReportTypeRadio"/>  &nbsp; ~ &nbsp;
                        <img src="/common/calendar.png" alt="ERROR" />
                        <input className="dateInput" type="date" name="cuponReportTypeRadio"/>
                    </div>

                    <div className="subBox">
                        <h1>적립구분</h1>
                        <input type="radio" value="all" name="cuponReportRadio"/> 리뷰 작성 &nbsp;&nbsp;&nbsp;
                        <input type="radio" value="first" name="cuponReportRadio"/> 구매 적립 &nbsp;&nbsp;&nbsp;
                        <input type="radio" value="again" name="cuponReportRadio"/> 구매 취소 &nbsp;&nbsp;&nbsp;
                    </div>

                    <div className="subBox">
                        <h1>적립상태</h1>
                        <input type="radio" value="all" name="cuponReportRadio"/> 적립 예정 &nbsp;&nbsp;&nbsp;
                        <input type="radio" value="first" name="cuponReportRadio"/> 적립 완료 &nbsp;&nbsp;&nbsp;
                        <input type="radio" value="again" name="cuponReportRadio"/> 적립 취소 &nbsp;&nbsp;&nbsp;
                    </div>

                    <div className="subBox">
                    <h1>상품 번호</h1>
                    <input type="text" />
                    </div>

                    

                    <div className="subBox" style={{justifyContent: "center"}}>
                    <button className="searchButton" style={{backgroundColor: "#EBE9F9", color: "gray"}}>초기화</button> &nbsp; &nbsp;
                    <button className="searchButton">완료</button>
                    </div>

                </div>

                <div className="box">
                    <PointReportTable/>
                </div>



        </div>
    )
}

export default cuponRegist;