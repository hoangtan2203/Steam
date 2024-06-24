import React from 'react';

import KENSHI from "../../../assets/image/ưu đãi đặc biệt/kenshi.jpg";
import LAIKA from "../../../assets/image/ưu đãi đặc biệt/laika.jpg";
import PARADOX from "../../../assets/image/ưu đãi đặc biệt/paradox.jpg";
import ECHOES from './../../../assets/image/ưu đãi đặc biệt/echoes.jpg';


const specialGame = (props) => {
    return (
        <div className="special-games">
              <h1>ƯU ĐÃI ĐẶC BIỆT</h1>
              <ul>
                <li>
                  <a onClick={() => { props.handleClickApplication(KENSHI, "COD") }}>
                    <img src={KENSHI} />
                    <div className='supspecial'>
                      <div className='supspecial-down'>
                        <h2>MIDWEEK DEAL</h2>
                        <p>Offer end Apr @ 12:00am.</p>
                        <div className='inside-price'>
                          <div className='sale'>
                            <p>-75%</p>
                          </div>
                          <div className='after-sale'>
                            <div className='discount-original-price'>
                              460.000đ
                            </div>
                            <p>115.000đ</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a onClick={() => {props.handleClickApplication(LAIKA, "DOOM") }}>
                    <img src={LAIKA} />
                    <div className='supspecial'>
                      <div className='supspecial-down'>
                        <h2>MIDWEEK DEAL</h2>
                        <p>Offer end Apr @ 12:00am.</p>
                        <div className='inside-price'>
                          <div className='sale'>
                            <p>-25%</p>
                          </div>
                          <div className='after-sale'>
                            <div className='discount-original-price'>
                              260.000đ
                            </div>
                            <p>195.000đ</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <div onClick={() => { props.handleClickApplication(ECHOES, "GODOFWAR") }}>
                    <img className='today-deal' src={ECHOES} />
                    <div className='supspecial-today'>
                      <div className='supspecial-today-down'>
                        <h2>Today's deal!</h2>
                        <div className='inside-price'>
                          <div className='sale'>
                            <p>-33%</p>
                          </div>
                          <div className='after-sale'>
                            <div className='discount-original-price'>
                              220.000đ
                            </div>
                            <p>147.000đ</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div onClick={() => { props.handleClickApplication(PARADOX, "GODOFWAR") }}>
                    <img className='today-deal' src={PARADOX} />
                    <div className='supspecial-today'>
                      <div className='supspecial-today-down'>
                        <h2>Today's deal!</h2>
                        <div className='inside-price'>
                          <div className='sale'>
                            <p>-40%</p>
                          </div>
                          <div className='after-sale'>
                            <div className='discount-original-price'>
                              205.000đ
                            </div>
                            <p>123.000đ</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
    );
};

export default specialGame;