import { useState } from "react";
import style from "../css/Inspect.module.css"
import Slider from "./slider";


function SearchBox(){
    const [data , setData] = useState({"a1" : 0, "a2": 0, "a3": 0, "a4": 0, "a5": 0, "B1": 0, "B2": 0, "B3": 0, "B4": 0, "B5": 0});
   
const onChangeA1 =(e)=>{
    setData({...data,"a1":e.target.value})
    console.log(data.a1)};


    return (
        <div>
            <div className={style.box}>
                <h1>상품정보</h1>
                <div className={style.subBox}>
                    <h1>상품명</h1>
                    <div>부루마블</div>
                </div>
                <div className={style.subBox}>
                    <h1>카테고리</h1>
                    <div>전략</div>
                </div>
                <div className={style.subBox}>
                    <h1>브랜드</h1>
                    <div>코리아보드게임즈</div>
                </div>
                <div className={style.subBox}>
                    <h1>제조사</h1>
                    <div>코리아보드게임즈</div>
                </div>
            </div>
            <div className={style.box}>
                <h1>보유 부품 입력</h1>
                <div className={style.borderSubBox}>
                    <table>
                        <tr><th style={{width:"50%"}}>부품명</th><th>기존개수</th><th>필수개수</th><th>보유 개수</th><th>확인</th></tr>
                        <tr><td>바닥판</td><td>1개</td><td>1개</td><td><input type="number" onChange={onChangeA1}/>개</td>
                        <td>{data.a1 < 1? <div style={{color:"red"}}>분실</div>:<div>합격</div>}</td></tr>
                        <tr><td>이동말</td><td>6개</td><td>4개</td><td><input type="number" onChange={(e)=>{setData({...data,"a2":e.target.value})}}/>개</td>
                        <td>{data.a2 < 6? <div style={{color:"red"}}>분실</div>:<div>합격</div>}</td></tr>
                        <tr><td>5천원권지폐</td><td>30개</td><td>20개</td><td><input type="number" onChange={(e)=>{setData({...data,"a3":e.target.value})}}/>개</td>
                        <td>{data.a3 < 30? <div style={{color:"red"}}>분실</div>:<div>합격</div>}</td></tr>
                        <tr><td>1만원권지폐</td><td>50개</td><td>40개</td><td><input type="number" onChange={(e)=>{setData({...data,"a4":e.target.value})}}/>개</td>
                        <td>{data.a4 < 50? <div style={{color:"red"}}>분실</div>:<div>합격</div>}</td></tr>
                        <tr><td>5만원권지폐</td><td>33개</td><td>20개</td><td><input type="number" onChange={(e)=>{setData({...data,"a5":e.target.value})}}/>개</td>
                        <td>{data.a5 < 30? <div style={{color:"red"}}>분실</div>:<div>합격</div>}</td></tr>
                    </table>
                    
                </div>
            </div>
            <div className={style.box}>
                <h1>검수목록 확인</h1>
                <div className={style.borderSubBox}>
                    <table>
                        <tr><th style={{width:"50%"}}>검수내용</th><th>결과</th><th>확인</th></tr>
                        <tr><td>필수 부품이 모두 존재하는가?</td><td>
                            <select><option>Y</option>
                                    <option>N</option>
                            </select></td>
                            <td>합격</td>
                        </tr>
                        <tr><td>제품에 오염의 정도</td><td>
                            <select><option>오염이 심해 사용할 수 없음</option>
                                    <option>사용할 수 있지만 오염의 정도가 심함</option>
                                    <option>오염이 존재함</option>
                                    <option>오염이 거의 없음</option>
                            </select></td>
                            <td>합격</td>
                        </tr> <tr><td>제품에 파손 정도</td><td>
                            <select><option>파손이 심해 사용할 수 없음</option>
                                    <option>사용할 수 있지만 파손의 정도가 심함</option>
                                    <option>파손이 존재함</option>
                                    <option>오염이 거의 없음</option>
                            </select></td>
                            <td>합격</td>
                        </tr> 
                    </table>
                </div>
            </div>
            <div className={style.box}>
                <h1>제품 사진 입력</h1>
                <div className={style.subBox}>
                    <h1>전체 사진</h1>
                    <input type="file"/>
                </div>
                <div className={style.subBox}>
                    <h1>상세 사진</h1>
                    <input type="file"/>
                </div>
            </div>
            <div className={style.box}>
                <h1>최종확인</h1>
                <div className={style.subBox}>
                    <h1>검수자</h1>
                    <input type="text" placeholder="검수자 이름을 입력하세요." style={{width:"100%"}}/>
                </div>
                <div className={style.subBox}>
                <h1>최종등급</h1>
                    <select style={{width:"100%"}}>
                        <option>최상</option>
                        <option>상</option>
                        <option>중</option>
                        <option>폐기</option>
                        <option>수리필요</option>
                        <option>검수대기</option>
                    </select>
                </div>
                <div className={style.subBox}>
                    <h1>특이사항 메모</h1>
                    <textarea style={{width:"100%", height : "300px"}} type="textPlace"/>
                </div>
            </div>
        </div>
        
    )
}

export default SearchBox;