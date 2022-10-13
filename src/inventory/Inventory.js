import SearchBox from "./components/Warehousing/SearchBox";
import InventoryState from "./components/Warehousing/InventoryState";
import style from "./css/Inventory.module.css"
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {callInventoryListAPI
} from "../apis/InventoryAPICalls";
import { GET_PRODUCT, GET_PRODUCTS } from '../modules/productModules/ProductExampleModule';

function Inventory(){
    // const inventorys= [{"sirialNo" : "1", "category":"스플랜더" , "status": "창고" , "등급": "상","대여자" : ""},
    //                     {"sirialNo" : "2", "category":"스플랜더" , "status": "대여중" , "등급": "상", "대여자" : "jihi1013"},
    //                     {"sirialNo" : "3", "category":"부루마블" , "status": "검수중" , "등급": "상" , "대여자" : ""},
    //                     {"sirialNo" : "4", "category":"할리갈리" , "status": "창고" , "등급": "상", "대여자" : ""},
    //                     {"sirialNo" : "5", "category":"부루마블" , "status": "창고" , "등급": "상", "대여자" : ""},
    //                     {"sirialNo" : "5", "category":"부루마블" , "status": "창고" , "등급": "상", "대여자" : ""},
    //                     {"sirialNo" : "5", "category":"부루마블" , "status": "창고" ,  "등급": "상", "대여자" : ""},
    //                     {"sirialNo" : "5", "category":"부루마블" , "status": "대여중" , "등급": "상", "대여자" : "jihi1013"}];
    
    const data = useSelector(state => state.inventoryReducer); 
    console.log("재고 리스트 API 데이터 ",data);
    // const inventorysInfo = data.data;
    // console.log("재고 리스트", inventorysInfo);
    const dispatch = useDispatch();
    const inventorys = data.data;
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {         
        dispatch(callInventoryListAPI({
            currentPage: currentPage
        }));        
    },[currentPage]
    );
    return (
        <div className={style.componentBox}>
            <div className={style.titleBox}>
                재고 조회/수정
            </div>
            <InventoryState/>
            <SearchBox/>
            <div className={style.box}>
                <table className={style.inventoryTable}>
                    <th><input type="checkbox"/></th><th>재고코드</th><th>상품명</th><th>등급</th><th>상태</th><th>저장공간</th>
                    {inventorys.map((inventory)=>(
                        <tr><td><input type="checkbox"/></td><td>{inventory.serialCode}</td><td>{inventory.boardgameName}</td><td>{inventory.ratingCode==1?"최상" : inventory.ratingCode ==2?"상":"중"}</td><td>{inventory.rentalCycle}</td><td>{inventory.storageLocation}</td></tr>))}
                </table>
            </div>
        </div>
    )
}

export default Inventory;