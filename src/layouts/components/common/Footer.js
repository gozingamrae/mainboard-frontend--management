import style from "../../css/Footer.module.css"

function Footer() {
  return (
    <div className={style.footerBox}>
      <div>
      대표 : 조동후 사업자등록번호 : [111-22-101333]사업자정보확인 </div>
      <div>전화번호 : 010-1111-1111 (오전10시~오후3시) 팩스번호 : 02-1111-1111 주소 : 경기 성남시 판교로 메타버스 허브 1층 </div>
      <div>개인정보관리자 : 이유리 통신판매업번호 : 제 2022-성남-1013호
      </div>
    </div>
  );
}

export default Footer;
