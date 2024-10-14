import React from 'react';
import steam from "./../../../assets/image/logo footer/logo_steam_footer.png";
import value from "./../../../assets/image/logo footer/footerLogo_valve_new.png";
import facebook from "./../../../assets/image/logo footer/ico_facebook.gif";
import twitter from "./../../../assets/image/logo footer/ico_twitter.gif";
import "./../../../assets/style/footer/footer.css"

const Footer = (props) => {
    return (
  <footer>
  <div className="content-login">
    <div className="more-content">
      <span>Chúng tôi đã hết gợi ý cho bạn lúc này</span>
    </div>
    <p>
      Chúng tôi có thể khuyến nghị một số trò chơi khác một khi bạn đã chơi
      nhiều trò hơn.
    </p>
    <div className="style-button">
      <a href="#" className="box-login">
        <span>Trò ngẫu nhiên</span>
      </a>
      <br />
      <br />
      <p>
        Về lại <a href="#">đầu trang</a>{" "}
      </p>
    </div>
  </div>
  <div className="small-footer">
    <div className="footer-content">
      <div className="div-rule" />
      <div className='logo'>
      <div className="footer-logo-steam">
        <img src={steam} alt="" />
      </div>
      <div className="footer-logo-valve">
        <a href="https://www.valvesoftware.com/fr/" target="_blank">
          <img src={value} alt="" />
        </a>
      </div>
      </div>
      <div className="footer-text">
        <div className="">
          © 2023 Valve Corporation. Bảo lưu mọi quyền. Tất cả các thương hiệu là
          tài sản của chủ sở hữu tương ứng tại Hoa Kỳ và các quốc gia khác.
        </div>
        <div className="">
          Giá đã bao gồm VAT (nếu có). &nbsp;
          <a href="#">Chính sách bảo mật </a>
          &nbsp; | &nbsp;
          <a href="#"> Pháp lý </a>
          &nbsp; | &nbsp;
          <a href="#"> Thỏa thuận người đăng ký Steam </a>
          &nbsp; | &nbsp;
          <a href="#"> Hoàn tiền </a>
          &nbsp; | &nbsp;
          <a href="#">Về cookie</a>
        </div>
      </div>
      <div className="div-rule" />
      <div className="valve-links">
        <a href="">Về Valve</a>
        &nbsp; | &nbsp;
        <a href="#">Công việc</a>
        &nbsp; | &nbsp;
        <a href="#"> Steamworks </a>
        &nbsp; | &nbsp;
        <a href="#"> Phân phối Steam </a>
        &nbsp; | &nbsp;
        <a href="#">Hỗ trợ</a>
        &nbsp; | &nbsp;
        <a href="#">Thẻ quà</a>
        &nbsp; | &nbsp;
        <a href="https://www.facebook.com/Steam" target="_blank" rel="noopener">
          <img src={facebook} />
          Steam
        </a>
        &nbsp; | &nbsp;
        <a href="#">
          <img src={twitter} />
          @Steam
        </a>
      </div>
    </div>
  </div>
</footer>

    );
};

export default Footer;