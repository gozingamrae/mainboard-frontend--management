import style from "./css/Product2.module.css"
import ProductTable from "./components/Product/ProductTable";
import SearchBox from "./components/Product/SearchBox";
import {callProductListAPI,
    callSearchProductListAPI 
} from "../apis/ProductAPICalls";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

function Product(){
    // 리덕스를 이용하기 위한 디스패처, 셀렉터 선언
    const dispatch = useDispatch(); 
    
    const [currentPage, setCurrentPage] = useState(1);
       
    useEffect(
        () => {         
            dispatch(callProductListAPI({
                currentPage: currentPage
            }));    
        }
        ,[]
    );
    
    return (
        <div className={style.componentBox}>
            <div className={style.titleBox}>
                상품 조회/수정
            </div>
            <SearchBox/>
            <ProductTable/>
        </div>
    )
}

export default Product;