import { INSERT_CUPON } from "../modules/cuponModules/cuponModules";

export function callInsertCuponAPI(){


    const requestURL = "http://127.0.0.1:8080/cupons/";

    return async function InsertCupon(dispatch) {

        const results = await fetch(requestURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                
            })
        }).then(res => res.json());

        // console.log("results.data : " , results.data);
        // console.log("results.message : " , results.message);

        dispatch({type: INSERT_CUPON, payload: results.data});
        
    }
}