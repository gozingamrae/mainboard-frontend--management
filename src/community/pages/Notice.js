import style from "../css/community.module.css"
import TitleBox from "../component/TitleBox"
import SearchBox from "../component/SearchBox";
import NoticeTable from "../component/NoticeTable";

function Notice() {
  return(
    <div className={style.componentBox}>
      <TitleBox/>
      <SearchBox/>
      <NoticeTable/>
    </div>
  )
}

export default Notice;