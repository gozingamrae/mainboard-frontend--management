import style from "./Common.module.css"
import SearchBox from "./SearchBox"
import CommonTable from "./CommonTable"

//스타일 예시
function Common(){
    return (
        <div className={style.componentBox}>
            <div className={style.titleBox}>페이지 제목</div>
            <SearchBox/>
            <CommonTable/>
        </div>
    )
}

export default Common;