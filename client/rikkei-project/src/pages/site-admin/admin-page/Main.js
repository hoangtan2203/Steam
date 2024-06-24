import React from 'react';
import Nav from './Nav';
import { useState, useEffect } from 'react';
import AddUser from './AddUser';
import ShowUser from './ShowUser';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUserById } from '../../../redux/api/userAPI';
import { getCookie } from '../../../redux/api/userAPI';
import DeleteConfirm from "./../../../components/molecules/confirm/DeleteConfirm"


const Main = ({ Toggle }) => {
    const [show, setShow] = useState(true)
    const dispatch = useDispatch();
    const usersData = useSelector(state => state.users)
    console.log('userdata:', usersData)
    // kiểm tra người dùng đã đăng nhập hay chưa
    useEffect(() => {
        const token = getCookie('token');
        if (!token) {
            navigate('/login')
        }
    }, [])


    //khởi tạo state
    const [users, setUsers] = useState([])
    const [userDetail, setUserDetail] = useState(null);
    const [userUpdate, setUserUpdate] = useState(null);
    const navigate = useNavigate();


    // Khỏi tạo giá trị user khi tải trang lần đầu
    
   
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    // hiện bảng hỏi
    const HandleConfirmDelete = () => {
        setShow(!show)
    }

    // event click vào button thêm mới
    const handleCreateUser = () => {
        setUserUpdate(null);
    };

    // event click vào button chỉnh sửa
    const handleUpdateUser = (id) => {
        const usersEdit = [...users];
        const userUpdate = usersEdit.find((x) => x.id === id);
        if (userUpdate) {
            setUserUpdate(userUpdate);
        }
    };

    // event click vào button chi tiết
    const handleDetailUser = (item) => {
        setUserDetail(item);
    };

    // event click submit form  
    const handleSubmitUser = (item) => {
        const newUser = [...users];
        if (userUpdate) {
            const index = newUser.findIndex((x) => x.id === userUpdate.id);
            newUser[index] = item;
        } else {
            newUser.push(item);
        }
        setUsers(newUser);
    };


    return (

        <div className='px-3'>
            <Nav Toggle={Toggle} />
            <div className='container-fluid'>
                <div className='row g-3 my-2'>
                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>230</h3>
                                <p className='fs-5'>Products</p>
                            </div>
                            <i className='bi bi-cart-plus p-3 fs-1'></i>
                        </div>
                    </div>
                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>230</h3>
                                <p className='fs-5'>sales</p>
                            </div>
                            <i className='bi bi-currency-dollar p-3 fs-1'></i>
                        </div>
                    </div>
                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>2250</h3>
                                <p className='fs-5'>Delivery</p>
                            </div>
                            <i className='bi bi-truck p-3 fs-1'></i>
                        </div>
                    </div>
                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>20%</h3>
                                <p className='fs-5'>Increase</p>
                            </div>
                            <i className='bi bi-graph-up-arrow p-3 fs-1'></i>
                        </div>
                    </div>
                </div>
            </div>
            <table className="table caption-top bg-white rounded mt-2">
                {/* <div className='header-content'> */}
                <caption className='text-white fs-4'> Users</caption>
                <caption><button type="button" class="btn btn-success" onClick={handleCreateUser} >Add</button></caption>
                {/* </div> */}

                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {usersData?.user?.data?.map((item) =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.age}</td>
                            <td>{item.gender === true ? "nam" : "nữ"}</td>
                            <td>{item.role}</td>
                            <td>
                                <button type="button" class="btn btn-success" onClick={() => { handleDetailUser(item) }}>Detail</button>
                                <label>-</label>
                                <button type="button" class="btn btn-warning" onClick={() => { handleUpdateUser(item.id) }} >Edit</button>
                                <label>-</label>
                                <button type='button' class="btn btn-danger" onClick={HandleConfirmDelete}>Delete</button>
                            </td>
                        </tr>)}
                </tbody>
            </table>
            <AddUser
                handleSubmitUser={handleSubmitUser}
                userUpdate={userUpdate} />
            <ShowUser User={userDetail} />
            <DeleteConfirm show={show} setShow={setShow} usersData={usersData} />
        </div>
    );
};

export default Main;