import style from "../css/Member.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { callGetBlacklistAPI } from "../../apis/MemberAPICalls";
import { callPostBlacklistAPI } from "../../apis/MemberAPICalls";
import { INPUT_INFO } from "../../modules/memberModules/blacklistModule"; 

//스타일 예시
function Member(){

    const dispatch = useDispatch();
    const blacklists = useSelector(state => state.memberAPIReducer);
    const inputBlacklist = useSelector(state => state.blacklistReducer); 

    useEffect(
        ()=>{
            dispatch(callGetBlacklistAPI());
            console.log(blacklists);
        },[]
    )

    const onChangeHandler = (e) => {
        dispatch({
          type: INPUT_INFO,
          payload: {
            name: e.target.name,
            value: e.target.value
          }
        });
        console.log(inputBlacklist);
    }

    const onclickSubmitHandler = () => {
        let body = {
            memberId: inputBlacklist[0].memberId,
            description : inputBlacklist[0].description
        }
    
        dispatch(callPostBlacklistAPI({
            form: body
        }));
        window.location.reload();
    }

    return (
        <div className={style.componentBox}>
            <div className={style.titleBox}>회원 조회</div>
            <div className={[style.box, style.point].join(" ") } >
                <h1> 등록하기 </h1>
                <div className={style.subBox}>
                    <h1>아이디</h1>
                    <div>
                        <input type="text" onChange={onChangeHandler} value={inputBlacklist.memberId} name= "memberId"/>
                    </div>
                </div>
                <div className={style.subBox}>
                    <h1>제한사유</h1>
                    <div>
                        <textarea className={style.blacklistReason}  onChange={onChangeHandler} value={inputBlacklist.description} name= "description"/>
                    </div>
                </div>
                <div className={style.buttonsbox}>
                    <button className={style.searchButton} onClick={ onclickSubmitHandler }>등록하기</button>
                </div>
            </div>
            <div className={style.box}>
            <table>
                <tr><th>회원아이디</th><th>블랙리스트 사유</th><th>등록날짜</th></tr>
                {blacklists.data != null && blacklists.data.map((blacklist)=>(<tr><td>{blacklist.memberId}</td>
                    <td>{blacklist.description}</td><td>{blacklist.registrationDate}</td>
                </tr>))}
            </table>
            <div className={style.pageButtonBox}>
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
        </div>

    )

}

export default Member;