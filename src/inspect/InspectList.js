import SearchBox2 from "./components/SearchBox2";
import style from "./css/Inspect.module.css"
import InspectTable2 from "./components/InspectTable2";
function InspectList(){
    return (
        <div className={style.componentBox}>
            <div className={style.titleBox}>검수목록 조회</div>
            <SearchBox2/>
            <InspectTable2/>
        </div>
    )

}
export default InspectList;