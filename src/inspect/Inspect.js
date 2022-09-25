import SearchBox from "./components/SearchBox";
import style from "./css/Inspect.module.css"
import InspectTable from "./components/InspectTable";
function Inspect(){
    return (
        <div className={style.componentBox}>
            <div className={style.titleBox}>검수목록 조회</div>
            <SearchBox/>
            <InspectTable/>
        </div>
    )

}
export default Inspect;