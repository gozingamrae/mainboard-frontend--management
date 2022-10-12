import { INSERT_CUPONS } from "../../modules/cuponModules/cuponinsertModules";
import { GET_CUPONS } from "../../modules/cuponModules/cuponModules";


export function callInsertCuponAPI(couponName, target, explanation, discountRate, minOrderPrice, expirationPeriod){

    const requestURL = "http://127.0.0.1:8080/cupons/";

    return async function InsertCupon(dispatch) {

        const results = await fetch(requestURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                couponName: couponName,
                explanation: explanation,
                expirationPeriod: expirationPeriod,
                minOrderPrice: minOrderPrice,
                discountRate: discountRate,
                target: target
            })
        }).then(res => res.json());

        // console.log("results.data : " , results.data);
        console.log("results.message : " , results.message);

        dispatch({type: INSERT_CUPONS, payload: results.data});
        
    }
}

export function callGetCuponListAPI(couponName, target, startDate, endDate){
    const requestURL = "http://127.0.0.1:8080/cupons/lists/";

    return async function GetCupons(dispatch) {

        const results = await fetch(requestURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                couponName: couponName,
                target: target,
                startDate: startDate,
                endDate : endDate
            })
        }).then(res => res.json());

        console.log("results.data : " , results.data);
        console.log("results.message : " , results.message);

        dispatch({type: GET_CUPONS, payload: results.data});

    }
}

export function callDeleteCuponAPI(couponCode){

    const requestURL = "http://127.0.0.1:8080/cupons/delete";

    return async function DeleteCupon(dispatch) {

        const results = await fetch(requestURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                couponCode : couponCode
            })
        }).then(res => res.json());

        // console.log("results.data : " , results.data);
        console.log("results.message : " , results.message);

        dispatch({type: INSERT_CUPONS, payload: results.data});
        
    }
}