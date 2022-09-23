import { useState } from "react";
import style from "./Common.module.css"

function SearchBox(){
    const [focusData, setFocusData]  = useState({"subButton" : 0 , "pageNum" : 1});
    
    const onClickButton = (e) => {
        setFocusData({ ...focusData, "subButton" : e.target.id});
    }
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
            <div className={style.subBox}>
                <h1>작은 버튼</h1>
                <div>
                    {focusData.subButton =="subButton1"? 
                        <div id="subButton1" onClick={onClickButton} className={style.clickedSubButton}>1개월</div> : <div id="subButton1" onClick={onClickButton} className={style.subButton}>1개월</div>}
                        {focusData.subButton =="subButton2"? 
                        <div id="subButton2" onClick={onClickButton} className={style.clickedSubButton}>2개월</div> : <div id="subButton2" onClick={onClickButton} className={style.subButton}>2개월</div>}
                        {focusData.subButton =="subButton3"? 
                        <div id="subButton3" onClick={onClickButton} className={style.clickedSubButton}>3개월</div> : <div id="subButton3" onClick={onClickButton} className={style.subButton}>3개월</div>}
                </div>
            </div>
            <div className={style.borderSubBox}>
                <h1>작은 버튼</h1>
                <div>
                    {focusData.subButton =="subButton1"? 
                        <div id="subButton1" onClick={onClickButton} className={style.clickedSubButton}>1개월</div> : <div id="subButton1" onClick={onClickButton} className={style.subButton}>1개월</div>}
                        {focusData.subButton =="subButton2"? 
                        <div id="subButton2" onClick={onClickButton} className={style.clickedSubButton}>2개월</div> : <div id="subButton2" onClick={onClickButton} className={style.subButton}>2개월</div>}
                        {focusData.subButton =="subButton3"? 
                        <div id="subButton3" onClick={onClickButton} className={style.clickedSubButton}>3개월</div> : <div id="subButton3" onClick={onClickButton} className={style.subButton}>3개월</div>}
                </div>
            </div>
            <div className={style.subBox}>
                <img src="/common/calendar.png"/>
                <input type="date" min="2022-01-01" max="2039-12-31"  className={style.calendar}/>
            </div>
                <div><button className={style.searchButton}>검색버튼</button>
            </div>

        </div>
    )
}
export default SearchBox;