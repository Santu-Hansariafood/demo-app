import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    adharNumber: "",
    panCardNumber: "",
    gstNumber: "",
    address: "",
    state: "",
    district: "",
    village: "",
    pinCode: "",
    role: "",
    account: "",
    acName: "",
    ifsc: "",
    branchName: "",
    bankName: "",
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

  const handleBankChange = (event) => {
    setBank(event.target.value);
    setFormData({ ...formData, bank: event.target.value });
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
        adharNumber: "",
        panCardNumber: "",
        gstNumber: "",
        address: "",
        state: "",
        district: "",
        village: "",
        pinCode: "",
        role: "",
        account: "",
        acName: "",
        ifsc: "",
        branchName: "",
        bankName: "",
      });
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="container mx-auto flex justify-center">
    <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
      <div className="py-4 px-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
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
            <label htmlFor="adharNumber" className="block mb-1">
              Adhar Card Number
            </label>
            <input
              type="text"
              id="adharNumber"
              name="adharNumber"
              autoComplete="off"
              value={formData.adharNumber}
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
            <label htmlFor="account" className="block mb-1">
              Bank A/C Number
            </label>
            <input
              type="text"
              id="account"
              name="account"
              autoComplete="off"
              value={formData.account}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="picture" className="block mb-1">
              Upload GST Cirtificate
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
              Upload Your Passbook/checkbook
            </label>
            <input
              type="file"
              id="picture"
              name="picture"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="accountHolderName" className="block mb-1">
              Account Holder Name
            </label>
            <input
              type="text"
              id="acName"
              name="acName"
              autoComplete="off"
              value={formData.acName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="ifsc" className="block mb-1">
              IFSC Code
            </label>
            <input
              type="text"
              id="ifsc"
              name="ifsc"
              autoComplete="off"
              value={formData.ifsc}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <label htmlFor="branchName" className="block mb-1">
              Branch Name
            </label>
            <input
              type="text"
              id="branchName"
              name="branchName"
              autoComplete="off"
              value={formData.branchName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
          <label htmlFor="bankName" className="block mb-1">
              Bank Name
            </label>
            <input
              type="text"
              id="bankName"
              name="bankName"
              autoComplete="off"
              value={formData.bankName}
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
      </div>
    </div>
  );
};

export default Register;
