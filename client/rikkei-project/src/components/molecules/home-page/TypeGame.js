import React from 'react';
import assassin from "./../../../assets/image/duyệt theo thể loại/ảnh-game.jpg"
import zombie from "./../../../assets/image/duyệt theo thể loại/hinh-anh-game-plants-vs-zombies-tuyet-dep_044347506.jpg";
import power from "./../../../assets/image/duyệt theo thể loại/hinh-anh-game-power-rangers-bi-huy-lo-dien-tin-game.jpg";
import freefire from "./../../../assets/image/duyệt theo thể loại/hinh-nen-dien-thoai-free-fire.jpg";

const TypeGame = (props) => {
    return (
        <div className="type-games">
        <h1>DUYỆT THEO THỂ LOẠI</h1>
        <ul>
          <li>
            <a onClick={() => { props.handleClickApplication(assassin, "assassin") }}>
              <img
                src={assassin}
              />
            </a>
          </li>
          <li>
            <a onClick={() => { props.handleClickApplication(zombie, "zombie") }}>
              <img
                src={zombie}
              />
            </a>
          </li>
          <li>
            <a onClick={() => { props.handleClickApplication(power, "power") }}>
              <img
                src={power}
              />
            </a>
          </li>
          <li>
            <a onClick={() => { props.handleClickApplication(freefire, "freefire") }}>
              <img src={freefire} />
            </a>
          </li>
        </ul>
      </div>
    );
};

export default TypeGame;