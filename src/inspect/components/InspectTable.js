import { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "../css/Inspect.module.css"
import data from "../data/Inspect.data.json"
function InspectTable(){
    const inventorys= [{"sirialNo" : "1", "category":"스플랜더" , "status": "창고" , "등급": "상","대여자" : ""},
                        {"sirialNo" : "2", "category":"스플랜더" , "status": "대여중" , "등급": "상", "대여자" : "jihi1013"},
                        {"sirialNo" : "3", "category":"부루마블" , "status": "검수중" , "등급": "상" , "대여자" : ""},
                        {"sirialNo" : "4", "category":"할리갈리" , "status": "창고" , "등급": "상", "대여자" : ""},
                        {"sirialNo" : "5", "category":"부루마블" , "status": "창고" , "등급": "상", "대여자" : ""},
                        {"sirialNo" : "5", "category":"부루마블" , "status": "창고" , "등급": "상", "대여자" : ""},
                        {"sirialNo" : "5", "category":"부루마블" , "status": "창고" ,  "등급": "상", "대여자" : ""},
                        {"sirialNo" : "5", "category":"부루마블" , "status": "대여중" , "등급": "상", "대여자" : "jihi1013"}]

    return (
        <div className={style.box}>
                <table className={style.inventoryTable}>
                    <th><input type="checkbox"/></th><th>재고코드</th><th>카테고리명</th><th>등급</th><th>상태</th>
                    <th>대여자명</th><th>바로가기</th>
                    {inventorys.map((inventory)=>(
                        <tr><td><input type="checkbox"/></td><td>{inventory.sirialNo}</td><td>{inventory.category}</td><td>{inventory.등급}</td><td>{inventory.status}</td>
                        <td>{inventory.대여자}</td><td><NavLink to="/updateInspect"><button className={style.subButton}>검수하기</button></NavLink></td></tr>))}
                </table>
                <div className={style.pageButtonBox}>
                <img src="/common/left_arrow.png"/>
                    <button>1</button>
                <img src="/common/right_arrow.png"/>
            </div>
        </div>
    )
}
export default InspectTable;