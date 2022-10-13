import style from "../../css/Product2.module.css"
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { useEffect, useState } from "react";
import qs from "query-string"; 
import { callDetailProductAPI
} from "../../../apis/ProductAPICalls";
function SearchBox(){
    
    const [ product, setProduct] = useState({
        "boardgameName" : "",
        "boardgameCategory" : "",
        "brand" :"",
        "manufacturingCompany" : "",
        "defaultRentalFee" : 0,
        "srentalFee" : 0,
        "arentalFee":[],
        "storageLocation" :"",
        "detailInspectionCheckListDTOList" :[],
        "requiredPartDTOList" :[]
    });
    //쿼리 스트링 추출
    const searchParams = useLocation().search;
    const query = qs.parse(searchParams);

    // 리덕스를 이용하기 위한 디스패처, 셀렉터 선언
    const dispatch = useDispatch();
    const products = useSelector(state => state.productReducer); 
    console.log(products);
   
    useEffect(
        () => {         
            dispatch(callDetailProductAPI({
                productCode: query.productCode
            }))
        }
        ,[]
    );
    useEffect(()=>{
        setProduct(products);
        console.log("i'm " , products)
        if(document.getElementById("brand")){
            document.getElementById("brand").value=products.brand;
        }
        if(document.getElementById("manufacturingCompany")){
            document.getElementById("manufacturingCompany").value=products.manufacturingCompany;
        }
        if(document.getElementById("boardgameName")){
            document.getElementById("boardgameName").value=products.boardgameName;
        }
        if(document.getElementById("defaultRentalFee")){
            document.getElementById("defaultRentalFee").value=products.defaultRentalFee;
        }
        if(document.getElementById("srentalFee")){
            document.getElementById("srentalFee").value=products.srentalFee;
        }if(document.getElementById("arentalFee")){
            document.getElementById("arentalFee").value=products.arentalFee;
        }if(document.getElementById("brentalFee")){
            document.getElementById("brentalFee").value=products.brentalFee;
        }
        if(document.getElementById("sstate")){
            document.getElementById("sstate").value=products.sstate;
        }
        if(document.getElementById("astate")){
            document.getElementById("astate").value=products.astate;
        }
        if(document.getElementById("bstate")){
            document.getElementById("bstate").value=products.bstate;
        }
        if(document.getElementById("astate")){
            document.getElementById("astate").value=products.astate;
        }
        // document.getElementById("productName").value=products.boardgameName;
    },[products])

    const onChangeName = (e) =>{
        setProduct({...product, "name":e.target.value});
    }
    const onChangeCategory = (e) =>{
        setProduct({...product, "category":e.target.value});
    }
    const onChangePrice = (e) =>{
        setProduct({...product, "price":e.target.value});
        console.log(product.price);
    }
    const onClickGradeAdd = ()=> {
        const grade = document.getElementById("grade");
        const sale = document.getElementById("gradeSale");
        setProduct({...product, "grades": [...product.grades,{ "grade" : grade.value, "sale": sale.value}]});
    }
    const onClickPeriodAdd = ()=> {
        const grade = document.getElementById("period");
        const sale = document.getElementById("periodSale");
        setProduct({...product, "rentalPeriod": [...product.rentalPeriod,{ "period" : grade.value, "sale": sale.value}]});
        console.log(product.rentalPeriod)
    }
    const onClickAddCheckList = ()=> {
        const checkListName = document.getElementById("checkListName");
        const checkListResults = document.getElementById("checkListResults");
        setProduct({...product, "detailInspectionCheckListDTOList" : [...product.detailInspectionCheckListDTOList,{ "checkContent" : checkListName.value, "results":checkListResults.value}]});
    }
    const onClickAddParts = () =>{
        const partName = document.getElementById("partName");
        const partNum  = document.getElementById("partNum");
        setProduct({...product, "requiredPartDTOList" : [...product.requiredPartDTOList ,{ "partsName" : partName.value, "partsCount" : partNum.value} ]});
    }
    return (
        <div>
            <div className={style.box}>
                <h1>상품 정보 입력</h1>
                <div className={style.subBox}>
                    <h1>상품명</h1>
                    <input id="boardgameName" type="text" placeholder="상품명을 입력하세요." style={{width:"80%"}} onChange={onChangeName}/>
                </div>
                <div className={style.subBox}>
                    <h1>카테고리</h1>
                    <select style={{width:"80%"}} onChange={onChangeCategory}>
                        <option>전략</option>
                        <option>심리</option>
                        <option>추리</option>
                        <option>파티</option>
                        <option>기타</option>
                    </select>
                </div>
                <div className={style.subBox}>
                    <h1>브랜드</h1>
                    <input id="brand" type="text" placeholder="상품의 브랜드를 입력하세요." style={{width:"80%"}}/>
                </div>
                <div className={style.subBox}>
                    <h1>제조사</h1>
                    <input id="manufacturingCompany" type="text" placeholder="상품의 제조사를 입력하세요." style={{width:"80%"}}/>
                </div>
                <div className={style.subBox}>
                    <h1>대표사진 입력</h1>
                    <input type="file"/>
                </div>
                <div className={style.subBox}>
                    <h1>상세설명 입력</h1>
                    <input type="file"/>
                </div>
            </div>
            <div className={style.box}>
                <h1>대여료</h1>
                <div className={style.subBox}>
                    <h1>기본 대여료(일)</h1>
                    <input id="defaultRentalFee" type="number" min="0" onChange={onChangePrice}/>
                </div>
                <div className={style.borderSubBox}>
                    <table>
                        <tr><th>번호</th><th>등급</th><th>등급별 가격</th><th>판매상태</th></tr>
                        <tr><td>1</td><td>최상</td><td><input id="srentalFee" type="number"/></td><td><select id="sstate"><option>판매중</option><option>품절</option><option>판매중지</option></select></td></tr>
                        <tr><td>2</td><td>상</td><td><input id="arentalFee" type="number"/></td><td><select id="astate"><option>판매중</option><option>품절</option><option>판매중지</option></select></td></tr>
                        <tr><td>3</td><td>중</td><td><input id="brentalFee" type="number"/></td><td><select id="bstate"><option>판매중</option><option>품절</option><option>판매중지</option></select></td></tr>
                    </table>
                </div>
            </div>
            <div className={style.box}>
                <h1>재고 정보 입력</h1>
                <div className={style.subBox}>
                    <h1>보관 위치</h1>
                    <input type="text"/>
                </div>
                <div className={style.subBox}>
                    <h1>구성 부품 추가</h1>
                    <input text="text" id="partName"/>
                    <div className={style.space}/>
                    <h1>필수 개수</h1>
                    <input type="number" id="partNum"/>
                    <div className={style.space}/>
                    <button onClick={onClickAddParts}>추가</button>
                </div>
                <div className={style.borderSubBox}>
                    {/* <h1>등급별 할인률을 추가하세요.</h1> */}
                    <table>
                    <tr><th>번호</th><th>부품명</th><th>필수 개수</th><th>삭제</th></tr>
                    {product?.requiredPartDTOList?.map((part, index)=>(
                            <tr> <td>{index+1}</td>
                                 <td>{part.partsName}</td><td>{part.partsCount}개</td><td><button>삭제</button></td></tr>
                        ))}
                    </table>
                </div>
            </div>
            <div className={style.box}>
                <h1>검수 정보 입력</h1>
                <div className={style.subBox}>
                    <h1>검수 체크리스트 추가</h1>
                    <input text="text" id="checkListName"/>
                    <div className={style.space}/>
                    <h1>검수 결과값</h1>
                    <select id="checkListResults">
                        <option>네/아니요</option>
                        <option>상/중/하</option>
                        <option>직접 입력</option>
                    </select>
                    <div className={style.space}/>
                    <button onClick={onClickAddCheckList}>추가</button>
                </div>
                <div className={style.borderSubBox}>
                    {/* <h1>등급별 할인률을 추가하세요.</h1> */}
                    <table>
                    <tr><th>번호</th><th>체크리스트</th><th>결과 값</th><th>삭제</th></tr>
                    {product?.detailInspectionCheckListDTOList?.map((check, index)=>(
                            <tr> <td>{index+1}</td>
                                 <td>{check.checkContent}</td><td>{"아니요"}</td><td><button>삭제</button></td></tr>
                        ))}
                    </table>
                </div>
            </div>
        </div>
        
    )
}

export default SearchBox;