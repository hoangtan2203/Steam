import React, { useState } from 'react';
import Nav from './Nav';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from "./../../../redux/api/productAPI";


const Showproduct = ({ Toggle }) => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [decription, setDecription] = useState('');
    const [img, setImg] = useState('');
    const [system, setSystem] = useState('');


    const handleSubmitGame = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name',name);
        formData.append('price',price);
        formData.append('decription',decription);
        formData.append('file',img);
        formData.append('system',system);
        dispatch(createProduct(formData))
        console.log("formData",formData)
    }
    return (
        <div>
            <Nav Toggle={Toggle} />
            <div class="container">
                <h1>Thêm sản phẩm</h1>
                <form id='form' method='POST' >
                    <InputGroup size="lg" style={{ marginTop: "10px" }}>
                        <InputGroup.Text id="inputGroup-sizing-lg"> Name</InputGroup.Text>
                        <Form.Control
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                            type='text'
                            name='name'
                            placeholder='Tên game...'
                            onChange={e => setName(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup size="lg" style={{ marginTop: "10px" }}>
                        <InputGroup.Text id="inputGroup-sizing-lg"> Price</InputGroup.Text>
                        <Form.Control
                            aria-label="Large"
                            type='text'
                            name='price'
                            aria-describedby="inputGroup-sizing-sm"
                            placeholder='Giá tiền...'
                            onChange={e => setPrice(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup size="lg" style={{ marginTop: "10px" }} >
                        <InputGroup.Text id="inputGroup-sizing-lg"> Decription</InputGroup.Text>
                        <Form.Control
                            aria-label="Large"
                            type='text'
                            name='decription'
                            aria-describedby="inputGroup-sizing-sm"
                            placeholder='Mô tả...'
                            onChange={e => setDecription(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup size="lg" style={{ marginTop: "10px" }}>
                        <InputGroup.Text id="inputGroup-sizing-lg"> System</InputGroup.Text>
                        <Form.Control
                            aria-label="Large"
                            type='text'
                            name='system'
                            aria-describedby="inputGroup-sizing-sm"
                            placeholder='Thông tin cấu hình game...'
                            onChange={e => setSystem(e.target.value)}
                        />
                    </InputGroup>
                    <Form.Select aria-label="Large" style={{padding:"10px", borderRadius:"3px", color:"#495057",border: "1px solid #ced4da", backgroundColor:"#e9ecef", marginTop:"10px"}}>
                        <option style={{color:"#495057"}}>Phân loại</option>
                        <option style={{color:"#495057"}} value="1">Tìm hiểu & nên xem</option>
                        <option style={{color:"#495057"}} value="2">Ưu đãi đặc biệt</option>
                    </Form.Select>
                    <div class="input-group" style={{ marginTop: "10px" }}>
                        <label for='files' style={{ marginRight: "10px" }}>Hình ảnh</label>
                        <input id='files' type="file" name='file' onChange={e=>setImg(e.target.files[0])}/>
                    </div>
                    <Button variant="success" onClick={handleSubmitGame}>Tải lên</Button>{' '}
                </form>
            </div>
        </div>
    );
};

export default Showproduct; 