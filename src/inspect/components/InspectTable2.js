import { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "../css/Inspect.module.css"
import data from "../data/Inspect.data.json"
function InspectTable(){
    const inventorys= [{"sirialNo" : "1", "category":"부루마블" , "status": "검수중" , "등급": "상" , "대여자" : ""}]

    return (
        <div className={style.box}>
                <table className={style.inventoryTable}>
                    <th><input type="checkbox"/></th><th>검수코드</th><th>상품명</th><th>재고코드</th><th>등급</th><th>검수자명</th>
                    <th>검수결과</th><th>검수일자</th><th>상세보기</th>
                    <tr><td><input type="checkbox"/></td><td>1</td><td>도블 쿠키런 킹덤</td><td>1</td><td>최상</td>
                    <td>박지희</td><td>최상</td><td>2022.10.14</td><td><NavLink to="/updateInspect"><button className={style.subButton}>검수하기</button></NavLink></td></tr>
                    <tr><td><input type="checkbox"/></td><td>2</td><td>도블 쿠키런 킹덤</td><td>2</td><td>최상</td>
                    <td>박지희</td><td>중</td><td>2022.10.14</td><td><NavLink to="/updateInspect"><button className={style.subButton}>검수하기</button></NavLink></td></tr>
                    <tr><td><input type="checkbox"/></td><td>3</td><td>도블 쿠키런 킹덤</td><td>2</td><td>최상</td>
                    <td>박지희</td><td>중</td><td>2022.10.14</td><td><NavLink to="/updateInspect"><button className={style.subButton}>검수하기</button></NavLink></td></tr>
                    <tr><td><input type="checkbox"/></td><td>4</td><td>보난자</td><td>9</td><td>최상</td>
                    <td>박지희</td><td>최상</td><td>2022.10.14</td><td><NavLink to="/updateInspect"><button className={style.subButton}>검수하기</button></NavLink></td></tr>
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