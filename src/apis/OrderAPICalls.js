import { GET_ORDERLIST } from "../modules/orderModules/orderModule";

export function callGetOrderListAPI(){

    const requestURL = "http://127.0.0.1:8080/order/list";

    return async function getOrderList(dispatch) {

        const results = await fetch(requestURL).then(res=> res.json());

        console.log("? ? ? 과연 ? ? ? results : " , results);

        dispatch({type: GET_ORDERLIST, payload: results.data});
        
    }
}