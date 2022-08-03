import React, { useState, useEffect } from "react";
import axios from "axios";

const UserForm = ({ user, onSubmitSuccess }) => {
  const [values, setValues] = useState({
    TaiKhoan: "",
    HoTen: "",
    MatKhau: "",
    Email: "",
    Sdt: "",
    LoaiND: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const { id, ...payload } = values;
      if (id) {
        // Call API cập nhật user
        await axios.put(
          `https://62b6d6b66999cce2e808ccad.mockapi.io/react-buoi36/${id}`,
          payload
        );
      } else {
        // Call API thêm user
        await axios.post(
          "https://62b6d6b66999cce2e808ccad.mockapi.io/react-buoi36",
          payload
        );
      }
      // Thành công => gọi tới 1 prop onSubmitSuccess để component UserManagement gọi lại api get users và thay đổi state users
      onSubmitSuccess();
      // reset form
      setValues({
        TaiKhoan: "",
        HoTen: "",
        MatKhau: "",
        Email: "",
        Sdt: "",
        LoaiND: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect này sẽ được thực thi sau khi render nếu giá trị prop user bị thay đổi
  useEffect(() => {
    if (!user) return;
    // dùng prop user gán cho state values để fill giá trị lên các input
    setValues(user);
  }, [user]);

  return (
    <form onSubmit={handleSubmit}>
      {/* First Name */}
      <div className="row">
        <div className="col-6">
          <label htmlFor="TaiKhoan" className="form-label">
            Tài khoản
          </label>
          <input
            id="TaiKhoan"
            className="form-control"
            value={values.TaiKhoan}
            name="TaiKhoan"
            onChange={handleChange}
          />
        </div>
        {/* Last Name */}
        <div className="col-6">
          <label htmlFor="HoTen" className="form-label">
            Họ tên
          </label>
          <input
            id="HoTen"
            className="form-control"
            value={values.HoTen}
            name="HoTen"
            onChange={handleChange}
          />
        </div>
        {/* Email */}
        <div className="col-6">
          <label htmlFor="MatKhau" className="form-label">
            Mật khẩu
          </label>
          <input
            id="MatKhau"
            className="form-control"
            value={values.MatKhau}
            name="MatKhau"
            onChange={handleChange}
          />
        </div>
        {/* Address */}
        <div className="col-6">
          <label htmlFor="Email" className="form-label">
            Email
          </label>
          <input
            id="Email"
            className="form-control"
            value={values.Email}
            name="Email"
            onChange={handleChange}
          />
        </div>
        {/* Date of Birth */}
        <div className="col-6">
          <label htmlFor="Sdt" className="form-label">
            Sđt
          </label>
          <input
            id="Sdt"
            className="form-control"
            value={values.Sdt}
            name="Sdt"
            onChange={handleChange}
          />
        </div>
        <div className="col-6">
          <label htmlFor="LoaiND" className="form-label">
            Loại Người Dùng
          </label>
          <input
            id="LoaiND"
            className="form-control"
            value={values.LoaiND}
            name="LoaiND"
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Submit */}
      <button className="btn btn-dark">Submit</button>
    </form>
  );
};

export default UserForm;
