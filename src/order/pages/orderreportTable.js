import "../css/orderreport-style.css";

import { useEffect, useState } from 'react';
import { callGetOrderListAPI } from '../../apis/OrderAPICalls';
import { useSelector, useDispatch } from 'react-redux';
import { GET_ORDERLIST } from "../../modules/orderModules/orderModule";

function OrderReportTable() {

    const orderList = useSelector(state => state.orderReducer);
    const dispatch = useDispatch();
    
    useEffect(
        ()=>
        {
             dispatch(callGetOrderListAPI());
        },
        []
    );

    console.log("orderList : " , orderList)


    return orderList && (
        <div className="box">
            <table>
                <tr><th>주문번호</th><th>주문금액</th><th>쿠폰사용금액</th><th>포인트사용금액</th><th>주문날짜</th><th>결제여부</th></tr>
                <tr><td>a</td><td>a</td><td>a</td><td>a</td><td>a</td><td>a</td></tr>
                {orderList.map(order => {
                    return (
                    <tr>
                        <td>{order.orderCode}</td>
                        <td>{order.orderAmount}</td>
                        <td>{order.couponUsedAmount}</td>
                        <td>{order.pointsUsedAmount}</td>
                        <td>{order.orderDate}</td>
                        <td>{order.whetherPay}</td>
                    </tr>
                    )
                })}

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
export default OrderReportTable;