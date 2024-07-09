//khu vực CSS 
import "./../../../assets/style/navbar/navbar.css";
import "./../../../assets/style/Subuser.css"
import "./../../../assets/style/users-page/user-page.css";
import "./../../../assets/style/Subuser.css";
import Carousel from 'react-bootstrap/Carousel';
import classNames from 'classnames';

// cookie 
import { getCookie } from "../../../redux/api/userAPI";

// các HOOK và Router
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';


// các component
import SpecialGame from "./../../../components/molecules/home-page/SpecialGame";
import ExpandMenu from '../../../components/molecules/home-page/ExpandMenu';
import Navbar from "./../../../components/organisms/navbar/Navbar";
import SubUser from "./SubUser";
import TypeGame from '../../../components/molecules/home-page/TypeGame';
import LeftContent from '../../../components/molecules/home-page/LeftContent';
import CartItem from './../../../components/molecules/home/CartItem';

// hình ảnh
import PUBG from "./../../../assets/image/tìm hiểu và nên xem/Pubg.jpg";
import CSGO from "./../../../assets/image/tìm hiểu và nên xem/CSGO.jpg";
import DOTA2 from "./../../../assets/image/tìm hiểu và nên xem/dota2.jpg";
import NARAKA from "./../../../assets/image/tìm hiểu và nên xem/naraka.jpg";

import pic1 from "./../../../assets/image/menu mở rộng/menu trái/Eternal.jpg";
import pic2 from "./../../../assets/image/menu mở rộng/menu trái/chicken.jpg";
import pic3 from "./../../../assets/image/menu mở rộng/menu trái/chronicles.jpg";
import pic4 from "./../../../assets/image/menu mở rộng/menu trái/deskjob.jpg";

import microsoft from "./../../../assets/image/Logo/microsoft.png";

// Khu vực fecth API
import { fetchProducts } from './../../../redux/api/productAPI';
import { fetchAddCart, fetchAllCart, deleteCart } from '../../../redux/api/cartAPI';

// thư viện hỗ trợ
import { jwtDecode } from "jwt-decode";



const Home = (props) => {
  const user = useSelector(state => state.users)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getCookie('token');
    if (!token && user?.userLogin?.length == 0) {
      navigate('/login')
    }
  }, [])

  // state hiệu ứng cho subuser
  const [isHidden, setIsHidden] = useState(true);



  const [gameInfo, setGameInfo] = useState({
    id: null,
    name: '',
    price: null,
    img: ''
  });

  // hiệu ứng làm mờ
  const [isBlurBg, setIsBlur] = useState(false);

  // thông tin game đã thêm vào giỏ hàng
  const [listcartInfoGame, setListcartInfoGame] = useState([]);

  // product state
  const products = useSelector(state => state.products);
  const gameData = products.data.productData;
  console.log('img',gameData)

  // khởi tạo data khi load trang lần đầu
  useEffect(() => {
    dispatch(fetchProducts())
  }, []);

  // khởi tạo cartdata khi load trang lần đầu
  useEffect(() => {
    dispatch(fetchAllCart())
  }, [gameInfo])

  // các chức năng khi click vào game bất kì
  const handleClickApplication = (id) => {
    const game = [...gameData]
    const index = game.findIndex((x) => x.id === id)
    const info = {
      id: game[index]?.id,
      name: game[index]?.name,
      img: game[index]?.img,
      price: game[index]?.price
    }
    setGameInfo(info)
    setIsBlur(!isBlurBg);
    setIsHidden(!isHidden);
  };

  // thêm vào giỏ hàng
  const handleUpdatequantity = (id) => {
    if (id) {
     const games = [...listcartInfoGame];
      games?.push(gameInfo)
     setListcartInfoGame(games)
      const thisgame = {
        userID: jwtDecode(getCookie("token")).id, 
        product: games,
        total: gameInfo?.price,
        quantity: 1,
      }
      console.log("this game",thisgame.userID)
      dispatch(fetchAddCart(thisgame))
    }
  }

  // chức năng xóa một item trong cart
  const handleDeleteCart = (id) => {
    dispatch(deleteCart(id))
    window.location.reload()
  }
  return (
    <div className="main">
      <CartItem 
      handleDeleteCart = {handleDeleteCart} 
      listcartInfoGame = {listcartInfoGame}
      />
      <div className={classNames({ isBlurBg: isBlurBg }, "main-content")}>
        <LeftContent />
        <div className="mid-content">
          <Navbar />
          <div className="center-body">
            <div className="must-see-title">
              <h1>TÌM HIỂU &amp; NÊN XEM</h1>
            </div>
            <div className="must-see">
              <Carousel fade data-bs-theme="dark" style={{ position: 'unset' }}>
                {gameData?.map((item) => (
                  <Carousel.Item key={item.id}>
                    <div className='must-see-flex'>
                      <a onClick={() => handleClickApplication(item.id)} >
                        <img
                          className="d-block w-900"
                          src={'http://localhost:8800/Images/'+item.img}
                          alt="First slide"
                        />
                      </a>
                      <div className='subGame'>
                        <div className='app-name'>{item.name}</div>
                        <div className='sub-img'>
                          <img className='small-img' src={pic1} />
                          <img className='small-img' src={pic2} />
                          <img className='small-img' src={pic3} />
                          <img className='small-img' src={pic4} />
                        </div>
                        <div className='main-default'>Now available</div>
                        <div className='price-io'>
                          <p className='price-io-1'>{item.price === "0" ? "free to play" : item.price + '.000đ'}</p>
                          <div className='btn-icon'>
                            <img src={microsoft} style={{ width: '20px', height: '20px', boxShadow: 'unset', marginTop: '5px' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            {/* phần ưu đãi đặc biệt */}
            <SpecialGame handleClickApplication={handleClickApplication} />

            {/* phần thể loại game */}
            <TypeGame handleClickApplication={handleClickApplication} />

          
          </div>
        </div>
      </div>
      <div id='subuser' key={gameInfo.id}>
        <div className={classNames({ isHidden: isHidden }, "containers")}>
          <div className='close' onClick={handleClickApplication}>X</div>
          <SubUser
            img={gameInfo.img}
            gameTitle={gameInfo.name}
            addproductUpdate={() => handleUpdatequantity(gameInfo.id)}
          />
        </div>
      </div>
        {/* phần menu mở rộng */}
        <ExpandMenu />
    </div>
  );
};

export default Home;