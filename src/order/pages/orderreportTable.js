import "../css/orderreport-style.css";

import { useEffect, useState } from 'react';
import { callGetOrderListAPI } from '../../apis/OrderAPICalls';
import { callSearchOrderAPI } from '../../apis/OrderSearchAPICalls';
import { useSelector, useDispatch } from 'react-redux';

function OrderReportTable() {

    const orderList = useSelector(state => state.orderReducer);
    const orderSearch = useSelector(state => state.orderSearchReducer);
    const dispatch = useDispatch();
    console.log("=====state===")
    console.log()

    useEffect(
        ()=>
        {
             dispatch(callGetOrderListAPI());
             console.log("==effect")
             console.log(orderList);

             dispatch(callSearchOrderAPI());
             console.log("==eserch")
             console.log(orderSearch);
        },
        []
    );


    console.log("orderList : " , orderList);
    console.log("=========")
    console.log("orderSearch : " , orderSearch['0'].order.length);


    return orderSearch && (
        <div className="box">
            <table>
                <tr><th>주문번호</th><th>주문금액</th><th>쿠폰사용금액</th><th>포인트사용금액</th><th>주문날짜</th><th>회원번호</th></tr>
                {orderSearch.order == undefined ? 
                (orderList.map (list => {
                    return (
                        <tr>
                            <td>{list.orderId}</td>
                            <td>{list.orderAmount}</td>
                            <td>{list.couponUsedAmount}</td>
                            <td>{list.pointsUsedAmount}</td>
                            <td>{list.orderDate}</td>
                            <td>{list.memberCode}</td>
                        </tr>
                    )
                })) : 
                
                (orderSearch.order.map (search => {
                    return (
                        <tr>
                            <td>{search.orderId}</td>
                            <td>{search.orderAmount}</td>
                            <td>{search.couponUsedAmount}</td>
                            <td>{search.pointsUsedAmount}</td>
                            <td>{search.orderDate}</td>
                            <td>{search.memberCode}</td>
                        </tr>
                    )
                }))}

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