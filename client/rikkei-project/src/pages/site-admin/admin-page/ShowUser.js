function ShowUser(props) {
    return (
      <div>
        {props.User && (
          <div>
            <p> Tên user : {props.User?.name}</p>
            <p> Tuổi : {props.User?.age}</p>
            <p> Giới tính : {props.User?.gender ? "Nam" : "Nữ"}</p>
            <p> password : {props.User?.age}</p>  
          </div>
        )}
      </div>
    );
  }
  export default ShowUser;