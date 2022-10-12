import style from "./css/Product.module.css"
import data from "./data/Product.data.json";
import TitleBox from "./components/Product/TitleBox";
import ProductTable from "./components/Product/ProductTable";
import SearchBox from "./components/Product/SearchBox";
import {callProductListAPI} from "./apis/ProductAPICalls";


function Product(){
   
    return (
        <div className={style.productBox}>
            <div className={style.title}>
                상품 조회/수정
            </div>
            <TitleBox/>
            <SearchBox/>
            <ProductTable/>
        </div>
    )
}

export default Product;