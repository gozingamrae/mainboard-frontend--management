import "../css/cuponregist-style.css";

function cuponRegistTable(){
    return(
        <div className="box">
            <table>
                <tr><th>쿠폰코드</th><th>쿠폰이름</th><th>지급대상</th><th></th><th>할인률</th><th>최소 주문 금액</th></tr>
                <tr><td>값1</td><td>값2</td><td>값3</td><td>값4</td><td>값5</td><td>값6</td></tr>
                <tr><td>값1</td><td>값2</td><td>값3</td><td>값4</td><td>값5</td><td>값6</td></tr>
                <tr><td>값1</td><td>값2</td><td>값3</td><td>값4</td><td>값5</td><td>값6</td></tr>
                <tr><td>값1</td><td>값2</td><td>값3</td><td>값4</td><td>값5</td><td>값6</td></tr>
                <tr><td>값1</td><td>값2</td><td>값3</td><td>값4</td><td>값5</td><td>값6</td></tr>

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
export default cuponRegistTable;