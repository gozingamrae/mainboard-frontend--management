
import style from "../../css/Inventory.module.css";
import {callProductListByProductNameAPI
} from "../../../apis/ProductAPICalls";
import {callDetailProductAPI
} from "../../../apis/InventoryAPICalls";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

function SearchBox(){
    
    // 리덕스를 이용하기 위한 디스패처, 셀렉터 선언
    const dispatch = useDispatch();
    const products = useSelector(state => state.productReducer); 
    const inventoryDatas = useSelector(state => state.addInventoryReducer); 
    
    //재고 정보 입력
    const [searchText, setSearchText] = useState("");
    const [searchDatas, setSearchDatas] = useState(false); 
    const [inputInventoryParts, setIngentoryParts] = useState(false);
    const [ isClick , setISClick] = useState(false);
    const onChangeSearchText = (e) =>{
        setSearchText(e.target.value);
    }
    const onClickButton = (e) =>{
        dispatch(callDetailProductAPI({
            productCode: e.target.id 
        }))
        console.log(e.target.id);
        setISClick(true);
        console.log(isClick);
    }
    const onClickSearch = () =>{
        dispatch(callProductListByProductNameAPI({
            productName: searchText
        }))
    }
    useEffect(()=>{
        products.length != undefined? setSearchDatas(products):console.log("상품 정보가 없습니다.");        
    },[products])
    useEffect(()=>{
        console.log("상품 정보", inventoryDatas.requiredPartDTOList);
        inventoryDatas.requiredPartDTOList != undefined? setIngentoryParts(inventoryDatas.requiredPartDTOList):console.log("재고 부품 정보가 없습니다.");       
    },[inventoryDatas]);

    return (
        <div>
            <div className={style.box}>
                <h1>재고 정보 입력</h1>
                <div className={style.subBox}>
                    <h1>상품 검색</h1>
                    <input onChange={onChangeSearchText} type="text" placeholder="상품을 검색하세요"/>
                    <button onClick={onClickSearch}>검색</button>
                </div>
                <div>
                    {searchDatas? searchDatas.map((data)=>(
                        <div className={style.subBox} style={{width : "100%"}}>
                            <div style={{width : "60%"}}>{data.boardgameName}</div>
                            <button id={data.boardgameTypeCode} onClick={onClickButton}>선택하기</button>
                        </div>
                        )):null }
                </div>
            </div>
            <div className={style.box}>
                <h1>재고 상태</h1>
                <div className={style.subBox}>
                    <h1>상품명</h1>
                    {inventoryDatas.boardgameName}
                </div>
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
                    <table>
                        <tr><th style={{width:"50%"}}>부품명</th><th>필수개수</th><th>보유 개수</th></tr>
                        {inputInventoryParts? inputInventoryParts.map((data)=>(
                            <tr><td>{data.partsName}</td><td>{data.partsCount}개</td><td><input type="number"/>개</td></tr>
                        )):null}
                        {isClick? <tr><td>카드</td><td>10개</td><td><input type="number"/>개</td></tr>:null}
                    </table>
                </div>
            </div>
        </div>
        
    )
}

export default SearchBox;