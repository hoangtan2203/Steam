import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux"

function AddUser(props) {
  const { handleSubmitUser, userUpdate } = props;

  //  gọi hàm dispatch() để gửi một hành động đến store
//   const dispatch = useDispatch();
  
  const inputIdRef = useRef(null);
  const inputNameRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputAgeRef = useRef(null);
  const inputGenderRef = useRef(null);
  const inputDayBirthRef = useRef(null);
  const inputAddressRef = useRef(null);

  useEffect(() => {
    if (userUpdate) {
      inputIdRef.current.value = userUpdate.id;
      inputNameRef.current.value = userUpdate.name;
      inputEmailRef.current.value = userUpdate.email;
      inputAgeRef.current.value = userUpdate.age;
      inputGenderRef.current.value= userUpdate.gender;
    } else {
      inputIdRef.current.value = "";
      inputNameRef.current.value = "";
      inputEmailRef.current.value = "";
      inputAgeRef.current.value = "";
      inputGenderRef.current.value = "";
      inputDayBirthRef.current.value = "";
      inputAddressRef.current.value = "";
    }
  }, [userUpdate]);

  const handleSubmit = () => {
    const user = {
      id: inputIdRef.current.value,
      name: inputNameRef.current.value,
      email: inputEmailRef.current.value,
      age: Number(inputAgeRef.current.value),
      gender: inputGenderRef.current.value.toLowerCase() === "nam" ? true : false,
      dayBirth: inputDayBirthRef.current.value,
      address: inputAddressRef.current.value,
    };

//     dispatch({
//       type: ADD_TODO,
//       payload: {
//           id: 2,
//           name: 'Nguyen Van B '
//       }
//   })
  
  handleSubmitUser(user);
    inputIdRef.current.value = "";
    inputNameRef.current.value = "";
    inputEmailRef.current.value = "";
    inputAgeRef.current.value = "";
    inputGenderRef.current.value = "";
    inputDayBirthRef.current.value = "";
    inputAddressRef.current.value = "";
  };

  return (
    <div style={{ textAlign: "left" }}>
      <h2>
        {userUpdate
          ? "Chỉnh sửa thông Tin User "
          : " Thêm thông Tin User"}
      </h2>
      <div>
        <div style={{ display: "flex"}}>
          <label style={{ width: 150 }}>Mã user:</label>
          <input ref={inputIdRef} style={{color: "black", border:"1px solid black"}}/>
        </div>
        <div style={{ display: "flex" }}>
          <label style={{ width: 150 }}>Tên user:</label>
          <input ref={inputNameRef} style={{color: "black", border:"1px solid black"}}/>
        </div>
        <div style={{ display: "flex" }}>
          <label style={{ width: 150 }}>Email:</label>
          <input ref={inputEmailRef} style={{color: "black", border:"1px solid black"}}/>
        </div>
        <div style={{ display: "flex" }}>
          <label style={{ width: 150 }}>Tuổi:</label>
          <input ref={inputAgeRef} style={{color: "black", border:"1px solid black"}}/>
        </div>
        <div style={{ display: "flex" }}>
          <label style={{ width: 150 }}>Giới tính:</label>
          <input ref={inputGenderRef} style={{color: "black", border:"1px solid black"}}/>
        </div>
        <div style={{ display: "flex" }}>
          <label style={{ width: 150 }}>Ngày sinh:</label>
          <input type="date" ref={inputDayBirthRef} style={{color: "black", border:"1px solid black"}} />
        </div>
        <div style={{ display: "flex" }}>
          <label style={{ width: 150 }}>Địa chỉ:</label>
          <input ref={inputAddressRef} style={{color: "black", border:"1px solid black"}}/>
        </div>
        <br />
        <br />
        <button onClick={handleSubmit} style={{background:"green", padding:"2px", borderRadius:"2px"}}>
          {userUpdate?"Chỉnh sửa":" Thêm mới "}
        </button>
      </div>
      <hr />
    </div>
  );
}
export default AddUser;