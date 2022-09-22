import style from "../../css/Product.module.css"
import Slider from "./slider";


function SearchBox(){
    const options = [{ "option": "상품번호"}, { "option": "상품명"},{ "option": "카테고리명"},{ "option": "브랜드명"}]
    const categorys = [{"name" : "전략"}, {"name" : "심리"},{"name" : "추리"},{"name":"파티"},{"name":"마피아"}]
    
    return (
        <div className={style.box}>
            <div className = {style.subBox}>
                <h4>검색어</h4>
                <select>{options.map((option)=>(<option>{option.option}</option>))}</select>
                <input type="text"/>
            </div>
            <div className={style.subBox}>
                <h4>판매상태</h4>
                <label>판매중</label><input type="checkbox"/><label>판매중지</label><input type="checkbox"/><label>품절</label><input type="checkbox"/>
            </div>
            <div className={style.subBox}>
                <h4>카테고리</h4>
                {categorys.map((category)=>(<div><label>{category.name}</label><input type="checkbox"/></div>))}
            </div>   
            <div className={style.subBox}>
                <h4>대여료</h4>
                <div className={style.sliderBox}>
                    <Slider/>
                </div>
            </div>
            <div className={style.subBox}>
                <h4>기간</h4>
            </div>
            <button className={style.submitButton}>검색하기</button>
        </div>

    )
}

export default SearchBox;