import style from "../css/Member.module.css";

//스타일 예시
function Member(){
    return (
        <div className={style.componentBox}>
            <div className={style.titleBox}>회원 조회</div>
            <div className={[style.box, style.point].join(" ") } >
                <h1> 등록하기 </h1>
                <div className={style.subBox}>
                    <h1>아이디</h1>
                    <div>
                        <input type="text"/>
                    </div>
                </div>
                <div className={style.subBox}>
                    <h1>제한사유</h1>
                    <div>
                        <textarea className={style.blacklistReason} />
                    </div>
                </div>
                <div className={style.buttonsbox}>
                    <button className={style.searchButton}>등록하기</button>
                </div>
            </div>
            <div className={style.box}>
            <table>
                <tr><th>회원아이디</th><th>블랙리스트 사유</th><th>등록날짜</th></tr>
                <tr><td>lyr426</td><td>널 너무나 많이 사랑한 죄 </td><td>2022.04.26</td></tr>
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