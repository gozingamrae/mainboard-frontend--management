import OrderReportTable from "./orderreportTable";
import "../css/orderreport-style.css";
import { callSearchOrderAPI } from "../../apis/OrderSearchAPICalls";
import { useSelector, useDispatch } from "react-redux";
import { 
    SEARCH_OPTION,
    SEARCH_TEXT,
    SEARCH_ORDER
} from "../../modules/orderModules/orderSearchModule";

//스타일 예시
function OrderReport(){

    const result = useSelector(state => state.orderSearchReducer);

    const dispatch = useDispatch();

    const onOptionChangeHandler = (e) => {
        dispatch({ type: SEARCH_OPTION, payload: e.target.value });
    }

    const onChangeHandler = (e) => {
        dispatch({ type: SEARCH_TEXT, payload: e.target.value});
    }

    const onClickHandler = () => {
        dispatch(callSearchOrderAPI(result.text, result.option));
        console.log("검색 최종결과!!", result);
    }

    return result && (
        <div className="componentBox">
            <div className="box">주문조회</div>

                <div className="box" style={{backgroundColor: "#F8F5FF"}}>

                    <div className="subBox">
                        <h1> 주문 조회 기간</h1>
                        <img src="/common/calendar.png" alt="ERROR" />
                        <input className="dateInput" type="date" name="cuponReportTypeRadio"/>  &nbsp; ~ &nbsp;
                        <img src="/common/calendar.png" alt="ERROR" />
                        <input className="dateInput" type="date" name="cuponReportTypeRadio"/>
                    </div>

                    <div className="subBox">
                    <h1>검색</h1>
                    <input type="text" placeholder="내용을 입력하세요" onChange={onChangeHandler} />
                    &nbsp; &nbsp;
                    <select onChange={onOptionChangeHandler}>
                        <option value="orderId" id="select">선택</option>
                        <option value="orderId" id="orderId">주문번호</option>
                        <option value="productName" id="productName">상품명</option>
                    </select> &nbsp;

                    </div>
                    <div className="subBox" style={{justifyContent: "center"}}>
                    <button className="searchButton" style={{backgroundColor: "#EBE9F9", color: "gray"}}>초기화</button> &nbsp; &nbsp;
                    <button className="searchButton" onClick={onClickHandler}>검색</button>
                    </div>
                </div>
                <div className="box">
                    <OrderReportTable/>
                </div>
        </div>
    )
}
export default OrderReport;