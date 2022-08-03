import React from "react";
import axios from "axios";

const UserList = ({ users, onSelect, onDeleteSuccess }) => {
  const handleDelete = async (userId) => {
    try {
      
      await axios.delete(
        `https://62b6d6b66999cce2e808ccad.mockapi.io/react-buoi36/${userId}`
      );
      // Thành công
      onDeleteSuccess();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = (userId) => {
    onSelect(userId);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Tài khoản</th>
          <th>Họ tên</th>
          <th>Mật khẩu</th>
          <th>Email</th>
          <th>Sđt</th>
          <th>Loại Người Dùng</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.TaiKhoan}</td>
              <td>{user.HoTen}</td>
              <td>{user.MatKhau}</td>
              <td>{user.Email}</td>
              <td>{user.Sdt}</td>
              <td>{user.LoaiND}</td>
              <td>
                <button
                  className="btn btn-success me-2"
                  onClick={() => handleSelect(user.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserList;
