import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUserById } from "./../../../redux/api/userAPI";


const DeleteConfirm = ({ show, setShow, usersData }) => {

    const dispatch = useDispatch();

    // hủy xóa
    const hanleCancle = () => {
        setShow(!show)
    }
    // function  xác nhận xóa user
    const HandleDelete = (id) => {
        console.log("id", id)
        dispatch(deleteUserById(id))
        window.location.reload()
    }
    return (
        <>
            {!show ?

                <>{usersData?.user?.data.map((item, index) => (
                    <div key={item.id} style={{
                        position: "fixed",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        backgroundColor: "rgba(0,0,0,0.5)"
                    }}>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%,-50%)",
                            background: "white",
                            padding: "50px"
                        }}>
                            <h3 style={{ color: "#111" }}>Bạn có chắc muốn xóa user này ?</h3>
                            <div style={{ display: "flex", alignItems: "center", color: "white" }}>
                                <button type='button' class="btn btn-danger" style={{ marginRight: "5px" }} onClick={() => HandleDelete(item.id)}>Xóa</button>
                                <button type='button' class="btn btn-success" onClick={hanleCancle}>Hủy</button>
                            </div>
                        </div>
                    </div>
                ))}</>

                : ""}
        </>
    );
};

export default DeleteConfirm;