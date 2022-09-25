import style from "../../css/Inventory.module.css";


function SearchBox(){
    const options = [{ "option": "상품번호"}, { "option": "상품명"},{ "option": "카테고리명"},{ "option": "브랜드명"}]
    const categorys = [{"name" : "전략"}, {"name" : "심리"},{"name" : "추리"},{"name":"파티"},{"name":"마피아"}]
    
    return (
        <div>
            <div className={style.box}>
                <h1>재고 정보 입력</h1>
                <div className={style.subBox}>
                    <h1>상품 검색</h1>
                    <input type="text" placeholder="상품을 검색하세요"/>
                    <button className={style.subButton}>검색하기</button>
                </div>
                <div className={style.borderSubBox}>
                    <h1>검색된 상품이 없습니다.</h1>
                </div>
            </div>
            <div className={style.box}>
                <h1>재고 상태</h1>
                <div className={style.subBox}>
                    <h1>등급</h1>
                    <select>
                        <option>최상</option>
                        <option>상</option>
                        <option>중</option>
                    </select>
                </div>
            </div>
            <div className={style.box}>
                <h1>보유 부품 입력</h1>
                <div className={style.borderSubBox}>
                    <h1>상품이 선택되지 않았습니다.</h1>
                </div>
            </div>
        </div>
        
    )
}

export default SearchBox;