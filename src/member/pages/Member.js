import style from "../css/Member.module.css";

//스타일 예시
function Member(){
    return (
        <div className={style.componentBox}>
            <div className={style.titleBox}>회원 조회</div>
            <div className={[style.box, style.point].join(" ") } >
                <div className={style.subBox}>
                    <h1>회원이름</h1>
                    <div>
                        <input type="text"/>
                    </div>
                </div>
                <div className={style.subBox}>
                    <h1>아이디</h1>
                    <div>
                        <input type="text"/>
                    </div>
                </div>
                <div className={style.subBox}>
                    <h1>블랙리스트 여부</h1>
                    <div>
                        <input type="radio" id="black_true" name="blacklist" value="black_true"/>
                        <label for="black_true"> O </label>
                        <input type="radio" id="black_false" name="blacklist" value="black_false"/>
                        <label for="black_false"> X </label>
                    </div>
                </div>
                <div className={style.subBox}>
                    <h1>가입날짜</h1>
                    <div>
                        <input type="date" id="regist_date" />
                    </div>
                </div>

                    <button className={style.searchButton}>전체보기</button>
                    <button className={style.searchButton}>검색</button>
            </div>
            <div className={style.box}>
            <table>
                <tr><th>이름</th><th>아이디</th><th>블랙리스트 여부</th><th>가입날짜</th><th>상세정보</th></tr>
                <tr><td>이유리</td><td>leeyr426</td><td>N</td><td>2022.04.26</td><td><button className={style.searchButton}>상세정보</button></td></tr>
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