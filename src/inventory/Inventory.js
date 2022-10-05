import SearchBox from "./components/Warehousing/SearchBox";
import InventoryState from "./components/Warehousing/InventoryState";
import style from "./css/Inventory.module.css"

function Inventory(){
    const inventorys= [{"sirialNo" : "1", "category":"스플랜더" , "status": "창고" , "등급": "상","대여자" : ""},
                        {"sirialNo" : "2", "category":"스플랜더" , "status": "대여중" , "등급": "상", "대여자" : "jihi1013"},
                        {"sirialNo" : "3", "category":"부루마블" , "status": "검수중" , "등급": "상" , "대여자" : ""},
                        {"sirialNo" : "4", "category":"할리갈리" , "status": "창고" , "등급": "상", "대여자" : ""},
                        {"sirialNo" : "5", "category":"부루마블" , "status": "창고" , "등급": "상", "대여자" : ""},
                        {"sirialNo" : "5", "category":"부루마블" , "status": "창고" , "등급": "상", "대여자" : ""},
                        {"sirialNo" : "5", "category":"부루마블" , "status": "창고" ,  "등급": "상", "대여자" : ""},
                        {"sirialNo" : "5", "category":"부루마블" , "status": "대여중" , "등급": "상", "대여자" : "jihi1013"}]

    return (
        <div className={style.componentBox}>
            <div className={style.titleBox}>
                재고 조회/수정
            </div>
            <InventoryState/>
            <SearchBox/>
            <div className={style.box}>
                <table className={style.inventoryTable}>
                    <th><input type="checkbox"/></th><th>재고코드</th><th>카테고리명</th><th>등급</th><th>상태</th><th>대여자명</th>
                    {inventorys.map((inventory)=>(
                        <tr><td><input type="checkbox"/></td><td>{inventory.sirialNo}</td><td>{inventory.category}</td><td>{inventory.등급}</td><td>{inventory.status}</td><td>{inventory.대여자}</td></tr>))}
                </table>
            </div>
        </div>
    )
}

export default Inventory;