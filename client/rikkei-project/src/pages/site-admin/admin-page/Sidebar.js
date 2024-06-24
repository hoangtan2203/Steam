import React, { useState } from 'react';
import "./../../../assets/style/Admin-page/Admin.css";
import { Link } from 'react-router-dom';
import Confirm from '../../../components/molecules/confirm/Confirm';



const Sidebar = ({handleShowConfirm,showConfirm,setShowConfirm}) => {

    return (
        <div className='bg-white siderbar'>
            <div className='m-2'>
                <i className='bi bi-bootstrap-fill me-3 fs-4'></i>
                <span >Admin</span>
            </div>
            <hr className='text-dark' />
            <div className='list-group list-group-flush'>
               
                    <Link to='/Admin' className='list-group-item py-2'>
                    <i className='bi bi-people fs-5 me-3'></i>
                    <span>User</span>
                    </Link>
                
                <Link to='/Admin/Products' className='list-group-item py-2'>
                    <i className='bi bi-box-fill fs-5 me-3'></i>
                    <span>Products</span>
                </Link>
                <a className='list-group-item py-2'>
                    <i className='bi bi-bar-chart fs-5 me-3'></i>
                    <span >State</span>
                </a>
                <a className='list-group-item py-2'>
                    <i className='bi bi-bucket fs-5 me-3'></i>
                    <span >Storage</span>
                 </a>
                <a className='list-group-item py-2'  onClick={handleShowConfirm}>
                    <i className='bi bi-power fs-5 me-3'></i>
                    <span>Log-out</span>
                </a>
            </div>
            {!showConfirm?<Confirm setShowConfirm={setShowConfirm}/> :""}
        </div>
    );
};

export default Sidebar;