import style from "../css/cuponreport-style.css";

function SearchBox(){
    return (
        <div className={style.box}>
            <h1>박스 제목</h1>
            <div className={style.subBox}>
                <h1>작은 박스 제목</h1>
                <div>컨텐츠</div>
            </div>
            <div className={style.subBox}>
                <h1>SELECT</h1>
                <div>
                    <select>
                        <option>1번목록</option>
                        <option>2번목록</option>
                    </select>
                </div>
            </div>
            <div className={style.subBox}>
                <h1>체크박스</h1>
                <div> 
                    <div className={style.checkBox}>
                        <input type="checkBox"/>
                        <label>1번</label>
                    </div>
                    <div className={style.checkBox}>
                        <input type="checkBox"/>
                        <label>2번</label>
                    </div>
                    <div className={style.checkBox}>
                        <input type="checkBox"/>
                        <label>3번</label>
                    </div>
                </div>
            </div>
            <div className={style.subBox}>
                <div> 
                    <div className={style.checkBox}>
                        <input type="checkBox"/>
                        <label>1번</label>
                    </div>
                    <div className={style.checkBox}>
                        <input type="checkBox"/>
                        <label>2번</label>
                    </div>
                    <div className={style.checkBox}>
                        <input type="checkBox"/>
                        <label>3번</label>
                    </div>
                </div>
            </div>
            <div className={style.subBox}>
                <h1>input text</h1>
                <div>
                    <input type="text"/>
                </div>
            </div>
            <div>
                <button className={style.searchButton}>검색버튼</button>
            </div>
        </div>
    )
}
export default SearchBox;