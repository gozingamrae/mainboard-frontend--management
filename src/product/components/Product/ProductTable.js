import { useState , useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "../../css/Product2.module.css";

import {callProductListAPI,
    callSearchProductListAPI 
} from "../../../apis/ProductAPICalls";

function ProductTable(){

    const data = useSelector(state => state.productReducer); 
    const products = data.data;
    console.log(data);
    const nav = useNavigate();
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
       
    useEffect(
        () => {         
            dispatch(callProductListAPI({
                currentPage: currentPage
            }));        
        }
        ,[currentPage]
    );
    return (
        <div className={style.box}>
                <div className={style.subTitle}>상품 목록 (총 <span style={{color : "rgb(195, 115, 219)"}}>{data?.pageInfo?.totalCount}</span>개)</div>
                <div className={style.subBox}><select><option>판매중</option><option>품절</option><option>판매중지</option></select>
                    <button>일괄 수정</button>
                </div>
                <div>
                    <table className={style.productTable}>
                        {/* 테이블 제목*/}
                        <tr>
                        <th style={{width : "5%"}} colspan='7'>상품정보</th> 
                        <th  colspan='4'>상태</th>
                        <th style={{width : "5%"}}>옵션보기</th></tr>
                        {/* 테이블 세부 제목 */}
                        <tr><th><input type="checkbox"/></th>
                        <th  style={{width : "5%"}}>상품번호</th>
                        <th>상품명</th>
                        <th>기본 대여료(일)</th>
                        <th>브랜드</th>
                        <th>제조사</th>
                        <th>카테고리</th>
                        <th>선택</th>
                        <th>등급</th>
                        <th>대여료</th>
                        <th>판매 상태</th>
                        <th style={{width : "5%"}}>옵션보기</th></tr>
                        {/* 테이블 값 출력 */}
                        {products?.map((product, index)=>(
                                <tr >
                                    <td><input type="checkbox"/></td>
                                    <td>{product.boardgameTypeCode}</td>
                                    <td>{product.boardgameName}</td>
                                    <td>{product.defaultRentalFee}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.manufacturingCompany}</td>
                                    <td>{product.categoryName}</td>
                                    <td colspan='4'><table>
                                        <tr><td><input type="checkbox"/></td><td>최상</td><td>{product.srentalFee}</td><td>{product.sstate}</td></tr>
                                        <tr><td><input type="checkbox"/></td><td>상</td><td>{product.arentalFee}</td><td>{product.astate}</td></tr>
                                        <tr><td><input type="checkbox"/></td><td>중</td><td>{product.brentalFee}</td><td>{product.bstate}</td></tr>
                                    </table></td>
                                    <td ><div id ={index} onClick={()=>{nav(`/detailProduct?productCode=${product.boardgameTypeCode}`)}}>상세보기</div></td>
                                </tr>
                            ))}
                    </table>
                </div>
                <div className={style.pageButtonBox}>
                <img src="/common/left_arrow.png"/>
                {currentPage==1? <button style={{color : "red"}}>1</button> : <button onClick={()=>{setCurrentPage(1)}}>1</button>}
                {currentPage==2? <button style={{color : "red"}}>2</button> : <button onClick={()=>{setCurrentPage(2)}}>2</button>}
                {currentPage==3? <button style={{color : "red"}}>3</button> : <button onClick={()=>{setCurrentPage(3)}}>3</button>}
                {currentPage==4? <button style={{color : "red"}}>4</button> : <button onClick={()=>{setCurrentPage(4)}}>4</button>}
                {currentPage==5? <button style={{color : "red"}}>5</button> : <button onClick={()=>{setCurrentPage(5)}}>5</button>}
                <img src="/common/right_arrow.png"/>
            </div>
            </div>
    )
}
export default ProductTable;