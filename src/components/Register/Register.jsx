import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    accountNumber: "",
    panCardNumber: "",
    gstNumber: "",
    address: "",
    state: "",
    district: "",
    village: "",
    pinCode: "",
    role: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
    setFormData({ ...formData, role: event.target.value });
  };

  const validateMobile = (mobile) => {
    const mobilePattern = /^\d{10}$/;
    return mobilePattern.test(mobile);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!validateMobile(formData.mobile)) {
        alert("Please enter a valid mobile number.");
        return;
      }
      const response = await axios.post(
        "http://localhost:3000/register",
        formData
      );
      console.log("Registration successful!");
      setFormData({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        accountNumber: "",
        panCardNumber: "",
        gstNumber: "",
        address: "",
        state: "",
        district: "",
        village: "",
        pinCode: "",
        role: "",
      });
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };


  return (
    <div className="container mx-auto flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              autoComplete="off"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              autoComplete="off"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block mb-1">
              Mobile
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              autoComplete="off"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="adharCardNumber" className="block mb-1">
              Adhar Cad Number
            </label>
            <input
              type="text"
              id="adharCardNumber"
              name="adharCardNumber"
              autoComplete="off"
              value={formData.accountNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="panCardNumber" className="block mb-1">
              Pan Card Number
            </label>
            <input
              type="text"
              id="  panCardNumber"
              name="panCardNumber"
              value={formData.panCardNumber}
              onChange={handleInputChange}
              autoComplete="off"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="picture" className="block mb-1">
              Upload Adhar card
            </label>
            <input
              type="file"
              id="picture"
              name="picture"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="picture" className="block mb-1">
              Upload Pan Card
            </label>
            <input
              type="file"
              id="picture"
              name="picture"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="gstNumber" className="block mb-1">
              GST Number
            </label>
            <input
              type="text"
              id="gstNumber"
              name="gstNumber"
              autoComplete="off"
              value={formData.gstNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="address" className="block mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              autoComplete="off"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="state" className="block mb-1">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              autoComplete="off"
              value={formData.state}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="district" className="block mb-1">
              District
            </label>
            <input
              type="text"
              id="district"
              name="district"
              value={formData.district}
              onChange={handleInputChange}
              autoComplete="off"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="village" className="block mb-1">
              Village
            </label>
            <input
              type="text"
              id="village"
              name="village"
              autoComplete="off"
              value={formData.village}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="pinCode" className="block mb-1">
              Pin Code
            </label>
            <input
              type="text"
              id="pinCode"
              name="pinCode"
              maxLength="6"
              value={formData.pinCode}
              onChange={handleInputChange}
              autoComplete="off"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1">Role</label>
            <select
              value={role}
              onChange={handleRoleChange}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="buyer">Buyer</option>
              <option value="farmer">Farmer</option>
            </select>
          </div>
          <div>
            <label htmlFor="picture" className="block mb-1">
              Upload Your Photo
            </label>
            <input
              type="file"
              id="picture"
              name="picture"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-xs">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-md w-full"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
