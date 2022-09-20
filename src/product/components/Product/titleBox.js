import style from "../../css/Product.module.css"

function TitleBox(){
    return (
        <div className={style.titleBox}>
                <div>
                    <div className={style.circle}/>
                    <div>
                        <p>전체</p>
                        <p>1건</p>
                    </div>
                </div>
                <div>
                    <div className={style.circle}/>
                    <div>
                        <p>판매대기</p>
                        <p>0건</p>
                    </div>
                </div>
                <div>
                    <div className={style.circle}/>
                    <div>
                        <p>품절</p>
                        <p>0건</p>
                    </div>
                </div>
                <div>
                    <div className={style.circle}/>
                    <div>
                        <p>검수중</p>
                        <p>1건</p>
                    </div>
                </div>
            </div>
    )
}

export default TitleBox;