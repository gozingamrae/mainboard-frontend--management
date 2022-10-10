import "../css/cuponreport-style.css";
import { useSelector, useDispatch } from 'react-redux';

function CuponReportTable(){

    const cupons = useSelector(state => state.cuponReducer);

    return(
        <div className="box">
            <table>
                <tr><th>쿠폰코드</th><th>쿠폰이름</th><th>지급대상</th><th>할인률</th><th>최소 주문 금액</th><th>쿠폰 유효 기간</th><th>수정 / 삭제</th></tr>
                {/* {cupons.map(cupon => 
                    <tr><td></td><td>값2</td><td>값3</td><td>값4</td><td>값5</td><td>값6</td><td><button>수정</button><button>삭제</button></td></tr>
                )} */}


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