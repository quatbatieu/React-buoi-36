import React, { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "./UserForm";
import UserList from "./UserList";

const UserManagement = () => {
  // tạo state users chứa data từ API get users
  const [users, setUsers] = useState([]);
  // tạo state selectedUser chứa data từ API get user
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    try {
      // Call API
      const { data } = await axios.get(
        "https://62b6d6b66999cce2e808ccad.mockapi.io/react-buoi36"
      );
      // Thành công => gọi hàm setUsers(data) để gán data từ API cho state users
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUser = async (userId) => {
    try {
      // Call API
      const { data } = await axios.get(
        `https://62b6d6b66999cce2e808ccad.mockapi.io/react-buoi36/${userId}`
      );
      // Thành công => gán data từ API cho state selectedUser
      setSelectedUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect sẽ tự động được thực thi sau lần render đầu tiên => dùng để gọi hàm fetchUsers để call API
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center text-primary">User Management</h1>

      <div className="card mb-5">
        <div className="card-header bg-dark text-white">
          <strong>Form đăng kí</strong>
        </div>
        <div className="card-body">
          <UserForm user={selectedUser} onSubmitSuccess={fetchUsers} />
        </div>
      </div>

      <UserList
        users={users}
        onSelect={fetchUser}
        onDeleteSuccess={fetchUsers}
      />
    </div>
  );
};

export default UserManagement;
