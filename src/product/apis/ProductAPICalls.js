import { 
    GET_PRODUCTS,
} from '../modules/ProductModule.js';

export const callProductListAPI = ({currentPage}) => {
    
    let requestURL;

    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/products`;
    }else {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/products`;
    }
    
    console.log('[ProduceAPICalls] requestURL : ', requestURL);

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"                
            }
        })
        .then(response => response.json());
        if(result.status === 200){
            console.log('[ProduceAPICalls] callProductAPI RESULT : ', result);
            dispatch({ type: GET_PRODUCTS,  payload: result.data });
        }
        
    };
}
