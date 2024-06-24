import React, { useState } from 'react';
import {userLogout} from "./../../../redux/api/userAPI";
import { useDispatch } from 'react-redux';

const Confirm = ({setShowConfirm}) => {
    
    const [show, setShow] = useState("block")

    function deletedCookie(token){
        document.cookie = token + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
    const dispatch = useDispatch()
    const handleLogout = () => {
            deletedCookie('token')
            dispatch(userLogout())
            window.location.reload()
    }
    const hanleCancle = () => {
        setShowConfirm(true)
        setShow('none')
    }
    return (
        <div style={{
            display:`${show}`,
            position:"fixed",
            top:"0",
            left:"0",
            right:"0",
            bottom:"0",
            backgroundColor:"rgba(0,0,0,0.5)"
        }}>
            <div style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",
                position:"absolute",
                top:"50%",
                left:"50%",
                transform:"translate(-50%,-50%)",
                background:"white",
                padding:"50px"
            }}>
                <h3 style={{color:"#111"}}>Bạn có chắc muốn đăng xuất ?</h3>
                <div style={{display:"flex",alignItems:"center",color:"white"}}>
                <button type='button' class="btn btn-danger" style={{marginRight:"5px"}} onClick={handleLogout}>Đăng xuất</button>
                <button type='button' class="btn btn-success" onClick={hanleCancle}>Hủy</button>
                </div>
            </div>
        </div>
    );
};

export default Confirm;