import InputInspectBox from "./components/InputInspectBox";
import style from "./css/Inspect.module.css"
import InspectTable from "./components/InspectTable";
import { useNavigate } from "react-router-dom";
function UpdateInspect(){
    const nav = useNavigate();
    const onClickSubmit = () => {
        alert("검수를 완료했습니다.")
        nav("/");
    }
    return (
        <div className={style.componentBox}>
            <div className={style.titleBox}>검수하기</div>
            <InputInspectBox/>
            <button onClick={onClickSubmit} 
                style={{width:"100%", margin : "10px 0px 10px 0px", height:"40px",backgroundColor : "#7332C3", border:"none", "color":"white"}}> 검수완료</button>
        </div>
        
    )

}
export default UpdateInspect;