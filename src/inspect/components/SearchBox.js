import style from "../css/Inspect.module.css"
import Slider from "./slider";


function SearchBox(){
    const options = [{ "option": "시리얼번호"}, { "option": "보드게임 명"},{ "option": "상태명"},{ "option": "브랜드명"}]
    const categorys = [{"name" : "보유중"}, {"name" : "배송준비중"},{"name" : "검수중"},{"name":"대여중"},{"name":"배송중"}]
    
    return (
        <div className={style.box}>
            <h1>검색정보</h1>
            <div className = {style.subBox}>
                <h1>검색어</h1>
                <select>{options.map((option)=>(<option>{option.option}</option>))}</select>
                <input style={{height : "20px"}} type="text"/>
            </div>
            <div className={style.subBox}>
                <h1>판매상태</h1>
                <div>판매중</div><input type="checkbox" style={{margin : "0px 30px 0px 5px"}}/>
                <div>판매중지</div><input type="checkbox" style={{margin : "0px 30px 0px 5px"}}/>
                <div>품절</div><input type="checkbox" style={{margin : "0px 30px 0px 5px"}}/>
            </div>
            <div className={style.subBox}>
                <h1>카테고리</h1>
                {categorys.map((category)=>(<div><div>{category.name}</div><input type="checkbox" style={{margin : "0px 30px 0px 5px"}}/></div>))}
            </div>   
            <div className={style.subBox}>
                <h1>대여료</h1>
                <input type="num" min="0" placeholder="최소값"/>원
                <div  style={{margin : "0px 10px 0px 10px"}}>~</div>
                <input type="num" min="0" placeholder="최대값"/>원
                {/* <div className={style.sliderBox}>
                    <Slider/>
                </div> */}
            </div>
            <button className={style.selectButton}>검색하기</button>
        </div>

    )
}

export default SearchBox;