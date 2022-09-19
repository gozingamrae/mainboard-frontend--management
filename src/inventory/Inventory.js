import style from "./css/Inventory.module.css"

function Inventory(){
    const inventorys= [{"sirialNo" : "1", "category":"스플랜더" , "status": "창고" , "대여자" : "jihi1013"},
                        {"sirialNo" : "2", "category":"스플랜더" , "status": "창고" , "대여자" : "jihi1013"},
                        {"sirialNo" : "3", "category":"부루마블" , "status": "창고" , "대여자" : "jihi1013"}]

    return (
        <div className={style.inventoryBox}>
            <div className={style.title}>
                재고 조회 / 수정
            </div>
            <div className={style.box}>
                <div>
                    전체 1건
                </div>
                <div>
                    판매대기 1건
                </div>
                <div>
                    판매중 1건
                </div>
                <div>
                    품절 0건
                </div>
            </div>
            <div className={style.box}>
                <label>검색어</label>
                <div><labe>상품명</labe><input placeholder="상품명"/></div>
                <div> <labe>카테고리 명</labe><input placeholder="카테고리 명"/></div>
                <div><labe>시리얼 코드</labe><input placeholder="시리얼 코드"/></div>
                <div>
                    <input type="checkbox" name="xxx" value="yyy"/>
                    <span>전체</span>
                    <input type="checkbox" name="xxx" value="yyy"/>
                    <span>판매중</span>
                    <input type="checkbox" name="xxx" value="yyy"/>
                    <span>품절</span>
                    <input type="checkbox" name="xxx" value="yyy"/>
                    <span>판매중지</span>
                    <input type="checkbox" name="xxx" value="yyy"/>
                    <span>검수중</span>
                </div>
                <button>검색</button>
            </div>
            <div className={style.box}>
                <table>
                    <th><input type="checkbox"/></th><th>재고코드</th><th>카테고리명</th><th>상태</th><th>대여자명</th>
                    {inventorys.map((inventory)=>(
                        <tr><th><input type="checkbox"/></th><td>{inventory.sirialNo}</td><td>{inventory.category}</td><td>{inventory.status}</td><td>{inventory.대여자}</td></tr>))}
                </table>
            </div>
        </div>
    )
}

export default Inventory;