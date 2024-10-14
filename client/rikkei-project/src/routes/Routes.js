import React, { useState } from 'react';
import { Route, Routes, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Showproduct from '../pages/site-admin/admin-page/Showproduct';
import Main from '../pages/site-admin/admin-page/Main';
import Home from '../pages/site-customer/home/Home';
import Product from '../pages/site-customer/product/Product';
import Register from '../pages/site-customer/user-register/Register';
import Login from '../pages/site-customer/user-login/Login';
import Header from './../components/organisms/header/Header';
import Footer from './../components/organisms/footer/Footer';
import Sidebar from '../pages/site-admin/admin-page/Sidebar';


const Routers = (props) => {

    const [toggle, setToggle] = useState(true);
    const [showConfirm, setShowConfirm] = useState(true);
    const Toggle = () => {
        setToggle(!toggle)
    }

    const handleShowConfirm = () => {
        setShowConfirm(!showConfirm);
        console.log('show')
    }
    const userRouter = [
        {
            path: '/',
            component: <Home />
        },
        {
            path: '/product',
            component: <Product />
        },
        {
            path: '/login',
            component: <Login />
        },

        {
            path: '/register',
            component: <Register />
        },
    ]
    const adminRouter = [
        {
            path: "/admin",
            component: <Main Toggle={Toggle} setShowConfirm={setShowConfirm}/>
        },
        {
            path: "/admin/products",
            component: <Showproduct Toggle = {Toggle} />
        },
    ]

    return (

        <Routes>
            
            <Route
                path='/'
                element={
                    <>
                        <Header />
                        <Outlet />
                        <Footer />
                    </>
                }
            >{userRouter.map((item, key) => (
                <Route key={key} path={item.path} element={item.component} />
            ))
                }
            </Route>

            <Route path='/admin' element={
                <div className='container-fluid bg-secondary min-vh-100'>
                    <div className='row'>
                        {toggle && <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
                            <Sidebar handleShowConfirm={handleShowConfirm} showConfirm={showConfirm} setShowConfirm={setShowConfirm}  />
                        </div>}
                        {toggle && <div className='col-4 col-md-2'></div>}
                        <div className='col'>
                            <Outlet />
                        </div>
                    </div>
                </div>
            }
            >
                {adminRouter.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
            </Route>
        </Routes>
    )
};
const RouterCustom = () => {
    return Routers()
}

export default RouterCustom;