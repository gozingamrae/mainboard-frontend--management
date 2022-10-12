import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import style from "../../css/Product2.module.css"
import Slider from "./slider";
import {callProductRegistAPI
} from "../../../apis/ProductAPICalls";

function SearchBox(){
    const dispatch = useDispatch();
    const nav = useNavigate();
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState();
    const imageInput = useRef();
    const [ insertProduct, setInsertProduct] = useState({
        "boardgameName" : "",
        "boardgameCategoryCode" : 1,
        "brand" :"",
        "manufacturingCompany" : "",
        "defaultRentalFee" : 0,
        "srentalFee" : 0,
        "arentalFee":0,
        "brentalFee":0,
        "storage" :"",
        "detailInspectionCheckListDTOList" :[],
        "requiredPartDTOList" :[],
        "boardgameTypeCode" : ""
    });
    console.log("상품 입력 정보 : " , insertProduct);
    const onClickAddCheckList = ()=> {
        const checkListName = document.getElementById("checkListName");
        const checkListResults = document.getElementById("checkListResults");
        setInsertProduct({...insertProduct, "detailInspectionCheckListDTOList" : [...insertProduct.detailInspectionCheckListDTOList,{ "name" : checkListName.value, "results":checkListResults.value}]});
    }
    const onClickAddParts = () =>{
        const partName = document.getElementById("partName");
        const partNum  = document.getElementById("partNum");
        setInsertProduct({...insertProduct, "requiredPartDTOList" : [...insertProduct.requiredPartDTOList ,{ "name" : partName.value, "num" : partNum.value} ]});
    }
    


    const onChangeImageUpload = (e) => {

        const image = e.target.files[0];

        setImage(image);
    };

    const onClickImageUpload = () => {
        imageInput.current.click();
    }

    const onClickSubmit = () => {

        console.log('[ProductRegistration] onClickProductRegistrationHandler');

        const formData = new FormData();
     
        formData.append("boardgameName", insertProduct.boardgameName);
        formData.append("boardgameCategoryCode", insertProduct.boardgameCategoryCode);
        formData.append("brand", insertProduct.brand);
        formData.append("manufacturingCompany", insertProduct.manufacturingCompany);
        formData.append("defaultRentalFee", insertProduct.defaultRentalFee);
        formData.append("SRentalFee", insertProduct.srentalFee);
        formData.append("ARentalFee", insertProduct.arentalFee);
        formData.append("BRentalFee", insertProduct.brentalFee);
        formData.append("storage", insertProduct.storage);
        formData.append("arentalFee", insertProduct.arentalFee);

        if(image){
            formData.append("productImage", image);
        }
        dispatch(callProductRegistAPI({	
            form: formData
        }));        
        
        
        alert('상품 리스트로 이동합니다.');
        nav('/product', { replace: true });
        window.location.reload();
    }
    
    return (
        <div>
            <div className={style.box}>
                <h1>상품 정보 입력</h1>
                <div className={style.subBox}>
                    <h1>상품명</h1>
                    <input type="text" placeholder="상품명을 입력하세요." style={{width:"80%"}} onChange={(e)=>{setInsertProduct({...insertProduct,"boardgameName":e.target.value})}}/>
                </div>
                <div className={style.subBox}>
                    <h1>카테고리</h1>
                    <select style={{width:"80%"}} onChange={(e)=>{setInsertProduct({...insertProduct,"boardgameCategoryCode":e.target.value})}}>
                        <option value="1" >여행/파티</option>
                        <option value="2">교육/코딩</option>
                        <option value="3">완구/어린이</option>
                        <option value="4">전략</option>
                        <option value="5">시리즈게임</option>
                        <option value="6">테마</option>
                        <option value="7">체스/바둑/장기</option>
                        <option value="8">기타</option>
                    </select>
                </div>
                <div className={style.subBox}>
                    <h1>브랜드</h1>
                    <input type="text" placeholder="상품의 브랜드를 입력하세요." style={{width:"80%"}} onChange={(e)=>{setInsertProduct({...insertProduct,"brand":e.target.value})}}/>
                </div>
                <div className={style.subBox}>
                    <h1>제조사</h1>
                    <input type="text" placeholder="상품의 제조사를 입력하세요." style={{width:"80%"} } onChange={(e)=>{setInsertProduct({...insertProduct,"manufacturingCompany":e.target.value})}}/>
                </div>
                <div >
                        { imageUrl && <img 
                            src={ imageUrl } 
                            alt="preview"
                        />}
                        <input                
                            style={ { display: 'none' }}
                            type="file"
                            name='productImage' 
                            accept='image/jpg,image/png,image/jpeg,image/gif'
                            onChange={ onChangeImageUpload }
                            ref={ imageInput }
                        />
                        <button 
                            onClick={ onClickImageUpload } 
                        >
                            이미지 대표사진 입력
                            </button>
                    </div>
                <div className={style.subBox}>
                    <h1>상세설명 이미지 입력</h1>
                    <input type="file"/>
                </div>
            </div>
            <div className={style.box}>
                <h1>대여료</h1>
                <div className={style.subBox}>
                    <h1>기본 대여료(일)</h1>
                    <input type="number" min="0" onChange={(e)=>{setInsertProduct({...insertProduct,"defaultRentalFee":e.target.value})}}/>
                </div>
                <div className={style.borderSubBox}>
                    <table>
                        <tr><th>번호</th><th>등급</th><th>등급별 할인률</th></tr>
                        <tr><td>1</td><td>최상</td><td><input type="number" onChange={(e)=>{setInsertProduct({...insertProduct,"srentalFee":e.target.value})}}/></td></tr>
                        <tr><td>2</td><td>상</td><td><input type="number" onChange={(e)=>{setInsertProduct({...insertProduct,"arentalFee":e.target.value})}}/></td></tr>
                        <tr><td>3</td><td>중</td><td><input type="number" onChange={(e)=>{setInsertProduct({...insertProduct,"brentalFee":e.target.value})}}/></td></tr>
                    </table>
                </div>
            </div>
            <div className={style.box}>
                <h1>재고 정보 입력</h1>
                <div className={style.subBox}>
                    <h1>보관 위치</h1>
                    <input type="text" onChange={(e)=>{setInsertProduct({...insertProduct,"storage":e.target.value})}}/>
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
                    <tr><th>번호</th><th>부품명</th><th>필수 개수</th></tr>
                    {insertProduct.requiredPartDTOList.map((part, index)=>(
                            <tr> <td>{index+1}</td>
                                 <td>{part.name}</td><td>{part.num}개</td></tr>
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
                    <tr><th>번호</th><th>체크리스트</th><th>결과 값</th></tr>
                    {insertProduct.detailInspectionCheckListDTOList.map((check, index)=>(
                            <tr> <td>{index+1}</td>
                                 <td>{check.name}</td><td>{check.results}</td></tr>
                        ))}
                    </table>
                </div>
            </div>
            <button style={{width : "100%" , height : "50px", margin : "10px"}} onClick={onClickSubmit}>
            상품 등록 하기
            </button>   
        </div>
        
    )
}

export default SearchBox;