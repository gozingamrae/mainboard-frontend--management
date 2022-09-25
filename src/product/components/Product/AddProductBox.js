import style from "../../css/Product2.module.css"
import Slider from "./slider";


function SearchBox(){
    const options = [{ "option": "상품번호"}, { "option": "상품명"},{ "option": "카테고리명"},{ "option": "브랜드명"}]
    const categorys = [{"name" : "전략"}, {"name" : "심리"},{"name" : "추리"},{"name":"파티"},{"name":"마피아"}]
    
    return (
        <div>
            <div className={style.box}>
                <h1>상품 정보 입력</h1>
                <div className={style.subBox}>
                    <h1>상품명</h1>
                    <input type="text" placeholder="상품명을 입력하세요."/>
                </div>
                <div className={style.subBox}>
                    <h1>카테고리</h1>
                    <select>
                        <option>전략</option>
                        <option>심리</option>
                        <option>추리</option>
                        <option>파티</option>
                        <option>기타</option>
                    </select>
                </div>
                <div className={style.subBox}>
                    <h1>브랜드</h1>
                    <input type="text" placeholder="상품의 브랜드를 입력하세요."/>
                </div>
                <div className={style.subBox}>
                    <h1>제조사</h1>
                    <input type="text" placeholder="상품의 제조사를 입력하세요."/>
                </div>
                <div className={style.subBox}>
                    <h1>대표사진 입력</h1>
                    <input type="file"/>
                </div>
                <div className={style.subBox}>
                    <h1>상세설명 입력</h1>
                    <input type="file"/>
                </div>
            </div>
            <div className={style.box}>
                <h1>대여료</h1>
                <div className={style.subBox}>
                    <h1>기본 대여료</h1>
                    <input type="number"/>
                </div>
                <div className={style.subBox}>
                    <h1>등급</h1>
                    <select>
                        <option>최상</option>
                        <option>상</option>
                        <option>중</option>
                    </select>
                    <div className={style.space}/>
                    <h1>할인률</h1>
                    <input type="number"/>
                    <div className={style.space}/>
                    <button>추가</button>
                </div>
                <div className={style.borderSubBox}>
                    <h1>등급별 할인률을 추가하세요.</h1>
                </div>
                <div className={style.subBox}>
                    <h1>대여기간</h1>
                    <input type="number"/>
                    <div className={style.space}/>
                    <h1>할인률</h1>
                    <input type="number"/>
                    <div className={style.space}/>
                    <button>추가</button>
                </div>
                <div className={style.borderSubBox}>
                    <h1>대여기간별 할인률을 추가하세요.</h1>
                </div>
            </div>
            <div className={style.box}>
                <h1>재고 정보 입력</h1>
                <div className={style.subBox}>
                    <h1>보관 위치</h1>
                    <input type="text"/>
                </div>
                <div className={style.subBox}>
                    <h1>구성 부품 추가</h1>
                    <input text="text"/>
                    <div className={style.space}/>
                    <h1>필수 개수</h1>
                    <input type="number"/>
                    <div className={style.space}/>
                    <button>추가</button>
                </div>
                <div className={style.borderSubBox}>
                    <h1>부품을 추가하세요.</h1>
                </div>
            </div>
            <div className={style.box}>
                <h1>검수 정보 입력</h1>
                <div className={style.subBox}>
                    <h1>검수 체크리스트 추가</h1>
                    <input text="text"/>
                    <div className={style.space}/>
                    <h1>검수 결과값</h1>
                    <input type="text" placeholder=" ',' 로 구분 (ex)보유,미보유"/>
                    <div className={style.space}/>
                    <button>추가</button>
                </div>
                <div className={style.borderSubBox}>
                    <h1>검수 체크리스트를 추가하세요.</h1>
                </div>
            </div>

        </div>
        
    )
}

export default SearchBox;