import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  GET_ADDRESS,
  SET_TARGET_ADDRESS_CODE,
} from "../../modules/deliveryModules/deliveryModule";
import style from "./delivery.module.css";

function DeliveryTable() {
  const addressList = useSelector((state) => state.deliveryReducer);
  const deliveryLogList = useSelector((state) => state.deliveryReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // https://apis.tracker.delivery/carriers/kr.cjlogistics/tracks/651483720696
  const sampleDeliveryLog = {
    // from(누가), to(누구에게), state(현재 상태),
    // progresses(time, status(id, text), location, description) ,carrier(운송장번호, 택배사)
    from: {
      name: "C*",
      time: "2022-10-03T10:11:13+09:00",
    },
    to: {
      name: "조*",
      time: "2022-10-04T14:54:36+09:00",
    },
    state: {
      id: "delivered",
      text: "배달완료",
    },
    progresses: [
      {
        time: "2022-10-03T10:11:13+09:00",
        status: {
          id: "at_pickup",
          text: "상품인수",
        },
        location: {
          name: "[집화]더원로직스",
        },
        description: "보내시는 고객님으로부터 상품을 인수받았습니다",
      },
      {
        time: "2022-10-04T05:52:25+09:00",
        status: {
          id: "in_transit",
          text: "상품이동중",
        },
        location: {
          name: "대전HUB",
        },
        description: "배송지역으로 상품이 이동중입니다.",
      },
      {
        time: "2022-10-04T09:09:07+09:00",
        status: {
          id: "in_transit",
          text: "상품이동중",
        },
        location: {
          name: "담양",
        },
        description:
          "고객님의 상품이 배송지에 도착하였습니다.(배송예정:박종환 010-5756-2283)",
      },
      {
        time: "2022-10-04T12:01:35+09:00",
        status: {
          id: "out_for_delivery",
          text: "배송출발",
        },
        location: {
          name: "전남담양",
        },
        description:
          "고객님의 상품을 배송할 예정입니다.(15∼17시)(배송담당:박종환 010-5756-2283)",
      },
      {
        time: "2022-10-04T14:54:36+09:00",
        status: {
          id: "delivered",
          text: "배달완료",
        },
        location: {
          name: "전남담양",
        },
        description:
          "고객님의 상품이 배송완료 되었습니다.(담당사원:박종환 010-5756-2283)",
      },
    ],
    carrier: {
      id: "651483720696",
      name: "CJ대한통운",
      tel: "+8215881255",
    },
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8080/deliveries/addresses",
    }).then((res) => {
      dispatch({ type: [GET_ADDRESS], payload: res.data });
      console.log(res.data);
    });

    axios({
      method: "GET",
      url: "http://localhost:8080/deliveries/logs",
    }).then((res) => {
      console.log("log : ", res.data);
    });
  }, []);

  console.log(addressList);

  return (
    <div className={style.box}>
      <h3>목록 (총 1개)</h3>
      <table>
        <tr>
          <th>상품코드</th>
          <th>주문코드</th>
          <th>발송처리일</th>
          <th>주문상태</th>
          <th>택배사</th>
          <th>운송장번호</th>
          <th>배송완료일</th>
          <th>구매자명</th>
          <th>구매자id</th>
          <th>회송여부</th>
        </tr>
        <tr>
          <td>12345678</td>
          <td>202209220001</td>
          <td>2022.09.23</td>
          <td>배송중</td>
          <td>우체국택배</td>
          <td>89898989</td>
          <td>-</td>
          <td>조동후</td>
          <td>whehdgn</td>
          <td>Y</td>
        </tr>
        {addressList.memberCode == 0
          ? null
          : addressList.map((address) => {
              const splitAddress = address.addressLocation.split("%");
              console.log(splitAddress);
              return (
                <tr>
                  <td className={style.addressName}>
                    {address.defaultAddressYn == "Y " ? (
                      <div style={{ color: "#635970" }}> (기본배송지)</div>
                    ) : null}
                    {address.addressName}
                  </td>
                  <td className={style.address}>
                    <div>({splitAddress[2]})</div>
                    <div>
                      {splitAddress[0]} {splitAddress[1]}
                    </div>
                    <div>받는 사람 : {address.deliveryRecipient}</div>
                  </td>
                  <td className={style.phone}>{address.addressPhone}</td>
                  <td className={style.button}>
                    <button
                      onClick={(e) => {
                        dispatch({
                          type: [SET_TARGET_ADDRESS_CODE],
                          payload: {
                            addressCode: address.addressCode,
                            addressZipCode: splitAddress[2],
                            addressLocation: splitAddress[0],
                            addressDetailLocation: splitAddress[1],
                          },
                        });
                        navigate("/mypage/delivery-address-update");
                      }}
                    >
                      수정
                    </button>
                    <p />
                    <button
                      name={address.addressCode}
                      // onClick={removeAddressData}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              );
            })}
      </table>
      <div className={style.pageButtonBox}>
        <img src="/common/left_arrow.png" />
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <img src="/common/right_arrow.png" />
      </div>
    </div>
  );
}
export default DeliveryTable;
