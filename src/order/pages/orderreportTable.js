import "../css/orderreport-style.css";


function orderReportTable(){
    return(
        <div className="box">
            <table>
                <tr><th>주문번호</th><th>주문 일자</th><th>대여자명</th><th>결제 상태</th><th>결제일자</th><th>금액</th><th>상세보기</th></tr>
                <tr><td>1</td><td>2022.02.02</td><td>박지희</td><td>결제완료</td><td>2022.02.03</td><td>5</td><td>상세보기</td></tr>
                <tr><td>2</td><td>2022.02.02</td><td>권용희</td><td>결제완료</td><td>2022.02.03</td><td>6</td><td>상세보기</td></tr>
                <tr><td>3</td><td>2022.02.05</td><td>이유리</td><td>결제미완료</td><td>결제미완료</td><td>1</td><td>상세보기</td></tr>
                <tr><td>4</td><td>2022.02.12</td><td>조동후</td><td>배송 중</td><td>2022.02.15</td><td>2</td><td>상세보기</td></tr>
                <tr><td>5</td><td>2022.02.16</td><td>손준형</td><td>결제완료</td><td>2022.02.20</td><td>3</td><td>상세보기</td></tr>

            </table>
            <div className="pageButtonBox">
                <img src="/common/left_arrow.png"/>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <img src="/common/right_arrow.png"/>
            </div>
            
        </div>
    )


}
export default orderReportTable;