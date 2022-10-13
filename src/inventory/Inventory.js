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
            <div className={style.subTitle}>재고 목록 (총 <span style={{color : "rgb(195, 115, 219)"}}>{data?.pageInfo?.totalCount}</span>개)</div>
             
                <table className={style.inventoryTable}>
                    <th><input type="checkbox"/></th><th>재고코드</th><th>상품명</th><th>등급</th><th>상태</th><th>저장공간</th>
                    {inventorys==undefined? null : inventorys.map((inventory)=>(
                        <tr><td><input type="checkbox"/></td><td>{inventory.serialCode}</td><td>{inventory.boardgameName}</td><td>{inventory.ratingCode==1?"최상" : inventory.ratingCode ==2?"상":"중"}</td><td>{inventory.rentalCycle}</td><td>{inventory.storageLocation}</td></tr>))}
                </table>
            </div>
        </div>
    )
}

export default Inventory;