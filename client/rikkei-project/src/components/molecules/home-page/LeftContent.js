import React from 'react';

const LeftContent = () => {
    return (
        <div className="left-content">
          <div className="header-menu">
            <a href="">
              <img
                src="	https://store.akamai.steamstatic.com/public/images//gift/steamcards_promo_03.png"
                alt=""
              />
              <h1>THẺ QUÀ TẶNG</h1>
              <p>Tặng trò chơi dưới dạng quà</p>
            </a>
          </div>
          <h2>NÊN XEM</h2>
          <div className="first-box">
            <a href="">Bởi bạn bè</a>
            <a href="">Theo thẩm định viên</a>
            <a href="">Theo nhãn</a>
          </div>
          <h2>DUYỆT THEO DANH MỤC</h2>
          <div className="second-box">
            <a href="">Bán chạy</a>
            <a href="">Mới ra mắt</a>
            <a href="">Sắp ra mắt</a>
            <a href="">Ưu đãi</a>
            <a href="">Các tựa VR</a>
            <a href="">Thân thiện với tay cầm</a>
            <a href="">Tuyệt trên Deck</a>
          </div>
          <h2>DUYỆT THEO THỂ LOẠI</h2>
          <div className="third-box">
            <a href="">free</a>
            <a href="">Truy cập sớm</a>
            <a href="">Chiến thuật</a>
            <a href="">Hành động</a>
            <a href="">Indie</a>
            <a href="">Mô phỏng</a>
            <a href="">Nhập vai RPG</a>
            <a href="">Phiêu lưu</a>
            <a href="">Thể thao</a>
            <a href="">Trực tuyến nhiều người chơi</a>
            <a href="">Đua tốc độ</a>
            <a href="">Đơn giản</a>
          </div>
        </div>
    );
};

export default LeftContent;