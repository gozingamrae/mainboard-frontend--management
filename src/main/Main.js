import style from "./css/Main.module.css";
import style2 from "../common/Common.module.css";
import Chart from "react-apexcharts";

function Main() {
   const state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
        }
        
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91, 10,15,15,16]
        }
      ]
    };
    const state2 = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["월", "화", "수", "목", "금", "토", "일"]
        }
        
      },
      series: [
        {
          name: "series-1",
          data: [70, 56, 80, 50, 90, 60, 70]
        }
      ]
    };
  return (
    <div className={style2.componentBox}>
      <div className={style2.halfBox}>
         <div style={{ justifyContent: "right", width: "60%"}} >
            <h1>주문 / 배송</h1>
            <div className={style2.subBox} style={{ justifyContent: "right", padding:"20px 10px 0px 0px"}}>
               <div style={{display :"flex", width : "40%", flexDirection:"column" , justifyContent: "center", alignItems: "center"}}>
                     <div className={style.deliveryProceedingIcon}/>
                     <p>결제 대기 <span className={style2.result}> 총 1건</span></p>
                  </div>
                  <div style={{display :"flex", width : "40%", flexDirection:"column" , justifyContent: "center", alignItems: "center"}}>
                     <div className={style.deliveryProceedingIcon2}/>
                     <p>신규주문 <span className={style2.result}> 총 1건</span></p>
                  </div>
                  <div style={{display :"flex", width : "40%", flexDirection:"column" , justifyContent: "center", alignItems: "center"}}>
                     <div className={style.deliveryProceedingIcon3}/>
                     <p>오늘 출발 <span className={style2.result}> 총 1건</span></p>
                  </div>
                  <div style={{display :"flex", width : "40%", flexDirection:"column" , justifyContent: "center", alignItems: "center"}}>
                     <div className={style.deliveryProceedingIcon2}/>
                     <p>배송 준비 <span className={style2.result}> 총 1건</span></p>
                  </div>
            </div>
         </div>
         <div style={{width: "36%"}}>
            <h1>클레임</h1>
            <p>취소 요청 <span className={style2.result}> 총 1건</span></p>
            <p>반품 요청<span className={style2.result}> 총 1건</span></p>
            <p>반품 수거 완료 <span className={style2.result}> 총 1건</span></p>
         </div>
      </div>
     
      <div className={style2.box2} style={{height : "400px"}}>
         <h1>매출 통계</h1><span>오전8시 업데이트</span> 
         <div className={style2.subBox} style={{justifyContent:"center"}}>
            <button className={style2.subButton}>일별 매출</button>
            <button className={style2.subButton}>월별 매출</button>
            <button className={style2.subButton}>연별 매출</button>
         </div>
         <Chart
               options={state.options}
               series={state.series}
               type="line"
               width="100%"
               height="300px"
               maring = "0px"
               padding = "0px"
            />
      </div>
      <div className={style2.halfBox}>
         <div style={{width: "25%"}}> 
            <h1>일별 매출 통계</h1>
            <p>전일 매출 : <span className={style2.result}> 51,658,521(원)</span></p> 
            <p>금일 매출 : <span className={style2.result}> 37,658,521(원)</span></p>
            <p>주간 매출 : <span className={style2.result}> 153,658,521(원)</span></p>
            <p>전주 매출 : <span className={style2.result}> 182,658,521(원)</span></p>
         </div>
         <div style={{width: "25%"}}>
            <h1>방문자 통계</h1>
            <p>전일 방문자 : <span className={style2.result}> 163명</span></p> 
            <p>금일 방문자 : <span className={style2.result}> 51명</span></p>
            <p>주간 방문자 : <span className={style2.result}> 1,954명</span></p>
            <p>전주 방문자 : <span className={style2.result}> 2,526명</span></p>
         </div>
         <div style={{width: "43.5%"}}>
            <h1>방문자 그래프</h1>
            <Chart
               options={state2.options}
               series={state2.series}
               type="line"
               width="100%"
               height="120px"
               maring = "0px"
               padding = "0px"
            />
         </div>
      </div>
      <div className={style2.halfBox}>
         <div>
            <h1>판매중 상품</h1>
            <p>판매 중 상품: <span className={style2.result}>5건</span></p> 
            <p>품절 상품 : <span className={style2.result}> 2건</span></p>
            <p>수정 요청 상품: <span className={style2.result}> 1건</span></p>
         </div>
         <div>
            <h1>검수 확인</h1>
            <p>검수 중: <span className={style2.result}>1건</span></p> 
            <p>검수 완료 : <span className={style2.result}> 2건</span></p>
            <p>수리 중: <span className={style2.result}> 1건</span></p>
            <p>검수 대기 : <span className={style2.result}> 1건</span></p>
         </div>
         <div>
            <h1>리뷰</h1>
            <p>최근 작성된 리뷰: <span className={style2.result}>1건</span></p> 
            <p>평점 낮은 리뷰 : <span className={style2.result}> 2건</span></p>
         </div>
         <div>
            <h1>혜택</h1>
            <p>진행중인 쿠폰: <span className={style2.result}>1건</span></p> 
            <p>보유 포인트 : <span className={style2.result}> 5,000P</span></p>
         </div>
      </div>
    </div>
  );
}

export default Main;
