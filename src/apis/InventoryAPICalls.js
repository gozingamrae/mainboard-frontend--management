import { 
    GET_INVENTORYS,
    POST_INVENTORYS,
    GET_PRODUCT
} from '../modules/inventoryModules/addInventoryModule.js';



// 상품 코드로 상품명 검색
export const callDetailProductAPI = ({productCode}) => {
    
    let requestURL;

    if(productCode !== undefined || productCode !== null){
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/products/${productCode}`;
    }else {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/products/${productCode}`;
    }
    
    console.log('[SearchProduceAPICalls] requestURL : ', requestURL);

    return async (dispatch, getState) => {
        console.log("start")
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"                
            }
        })
        .then(response => response.json());
        if(result.status === 200 || result.status === 201){
            console.log('detailProductApi', result)
            dispatch({ type: GET_PRODUCT,  payload: result.data });
        }
        
    };
}


export const callInventoryListAPI = ({currentPage}) => {
    
    let requestURL;

    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/inventorys?offset=${currentPage}&limit=10`;
    }else {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/inventorys?offset=${currentPage}&limit=10`;
    }
    
    console.log('[ProduceAPICalls] requestURL : ', requestURL);

    return async (dispatch, getState) => {
        console.log("start")
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"                
            }
        })
        .then(response => response.json());
        if(result.status === 200 || result.status === 201){
            console.log("get inventory:", result);
            dispatch({ type: GET_INVENTORYS,  payload: result.data });
        }
    };
}


export const callInventoryRegistAPI = ({form}) => {
    console.log('[InventoryAPICalls] callInventoryRegistAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/inventorys`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Accept": "*/*"
            },
            body: form
        })
        .then(response => response.json());

        console.log('[InventoryAPICalls] callInventoryRegistAPI RESULT : ', result);

        dispatch({ type: POST_INVENTORYS,  payload: result });
        
    };    
}
