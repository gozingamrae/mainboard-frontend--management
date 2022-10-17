import {
    GET_BLACKLIST,
    GET_MEMBERS,
    POST_BLACKLIST,
    GET_SEARCH
} from '../modules/memberModules/memberAPIModule'

export const callGetMembersAPI = () => {
    const requestURL = `http://192.168.0.64:8080/members/lists`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL,{
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*",
            }
        })
        .then(res => res.json());
        
        console.log('[MemberAPICalls] callGetMembersAPI RESULT : ', result);
        
        dispatch({ type: GET_MEMBERS,  payload: result });
    };
}

export const callGetBlacklistAPI = () => {
    const requestURL = `http://192.168.0.64:8080/members/blacklist`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL,{
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*",
            }
        })
        .then(res => res.json());
        
        console.log('[MemberAPICalls] callGetBlacklistAPI RESULT : ', result);
        
        dispatch({ type: GET_BLACKLIST,  payload: result });
    };
}

export const callPostBlacklistAPI = ({form}) => {
    const requestURL = `http://192.168.0.64:8080/members/blacklist`;
    console.log(form);

    return async (dispatch, getState) => {
        const result = await fetch(requestURL,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                memberId: form.memberId,
                description: form.description
            })
        })
        .then(res => res.json());
        
        console.log('[MemberAPICalls] callPostBlacklistAPI RESULT : ', result);
        
        dispatch({ type: POST_BLACKLIST,  payload: result });
    };
}

export const callGetSearchMember = ({form}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8080/members/condition`;

    console.log("form:::", form);

    return async (dispatch, getState) => {
        const result = await fetch(requestURL,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                memberId: form.memberId,
                memberName: form.memberName,
                withdrawalMember: form.withdrawalMember,
                joinDate: form.joinDate
            })
        })
        .then(res => res.json());
        
        console.log('[MemberAPICalls] callPostBlacklistAPI RESULT : ', result);
        
        dispatch({ type: GET_SEARCH,  payload: result });
    };
}