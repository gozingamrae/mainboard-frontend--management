import style from "./css/Product2.module.css"
import data from "./data/Product.data.json";
import TitleBox from "./components/Product/TitleBox";
import ProductTable from "./components/Product/ProductTable";
import SearchBox from "./components/Product/SearchBox";

function Product(){

    return (
        <div className={style.componentBox}>
            <div className={style.titleBox}>
                상품 조회/수정
            </div>
            <TitleBox/>
            <SearchBox/>
            <ProductTable/>
        </div>
    )
}

export default Product;