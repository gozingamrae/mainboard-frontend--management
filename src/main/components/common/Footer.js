import style from "../../css/Footer.module.css"

function Footer() {
  return (
    <div className={style.footerBox}>
      <div>
            네이버㈜는 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 상품, 상품정보, 거래에 관한 의무와 책임은 판매자에게 있습니다.
            또한 판매자와 구매자간의 직거래에 대하여 당사는 관여하지 않기 때문에 거래에 대해서는 책임을 지지 않습니다.
      </div>
      <div>사업자등록번호 : 220-81-62517통신판매업신고번호 : 제2006-경기성남-0692호대표이사 : 최수연</div>
    </div>
  );
}

export default Footer;
