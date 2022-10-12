import "../css/cuponreport-style.css";
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { callDeleteCuponAPI } from "../apis/CuponAPICalls";
import { useNavigate } from "react-router-dom";

function CuponReportTable(){

    const dispatch = useDispatch();

    const cupons = useSelector(state => state.cuponReducer);
    console.log("cuppppppppppppp : ", cupons);

    const nav = useNavigate();

    // useEffect(
    //     () => { console.log("cupons : ", cupons); },
    //     [cupons],
    // );

    const onClickHandler = (e) => {
        console.log("삭제 코드 : ", cupons.coupon.couponCode);
        dispatch(callDeleteCuponAPI(cupons.coupon.couponCode));
        alert("쿠폰 삭제가 완료되었습니다.");
        window.location.reload();
    }

    

    return cupons && (
        <div className="box">
            <table>
                <tr><th>쿠폰코드</th><th>쿠폰이름</th><th>지급대상</th><th>할인률</th><th>최소 주문 금액</th><th>쿠폰 유효 기간</th><th>수정 / 삭제</th></tr>
                {/* {isChecked?cupons.map(cupon => <tr><td>{cupon.cuponName}</td></tr>):<div/>} */}
                {/* {cupons.map(cupon => <tr><td>{cupon.cuponName}</td></tr>)} */}
                <tr><td>{cupons.coupon.couponCode}</td><td>{cupons.coupon.couponName}</td><td>{cupons.coupon.target}</td><td>{cupons.coupon.discountRate}</td><td>{cupons.coupon.minOrderPrice}</td><td>{cupons.coupon.expirationPeriod}</td>
                <td><button>수정</button><button onClick={onClickHandler}>삭제</button></td>
                </tr>

                </table>

            {/* <div className="pageButtonBox">
                <img src="/common/left_arrow.png"/>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <img src="/common/right_arrow.png"/>
            </div> */}
            
        </div>
    )


}
export default CuponReportTable;