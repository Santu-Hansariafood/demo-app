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
    adharCard:"",
    panCard:"",
    gstCard:"",
    passCard:"",
    
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileInputChange = (event) => {
    const { name, files } = event.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  

  const handleUploadButtonClick = async (fieldName) => {
    try {
      const fileInput = document.getElementById(fieldName);
      if (fileInput.files.length === 0) {
        console.log(`No file selected for ${fieldName}`);
        return;
      }
      const file = fileInput.files[0];
      const formData = new FormData();
      formData.append(fieldName, file);
      const response = await axios.post('http://localhost:3000/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(`File uploaded successfully for ${fieldName}:`, response.data);
    } catch (error) {
      console.error(`Error uploading file for ${fieldName}:`, error.message);
    }
  };
  
  const handleRoleChange = (event) => {
    setRole(event.target.value);
    setFormData({ ...formData, role: event.target.value });
  };

  const handleBankChange = (event) => {
    setBank(event.target.value);
    setFormData({ ...formData, bank: event.target.value });
  };
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
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
      if (!validateEmail(formData.email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
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
        adharCard:"",
        panCard:"",
        gstCard:"",
        passCard:"",
        
      });
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="container mx-auto flex justify-center">
      <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="py-4 px-6">
          <h2 className="text-2xl font-bold mb-4 text-center text-green-500">Farmer Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-1 text-green-500"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  autoComplete="off"
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-1 text-green-500">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  autoComplete="off"
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
              </div>
              <div>
                <label htmlFor="mobile" className="block mb-1 text-green-500">
                  Mobile
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  minLength={10}
                  maxLength={10}
                  pattern="[0-10]+"
                  onChange={handleInputChange}
                  autoComplete="off"
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 text-green-500">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="off"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="adharNumber"
                  className="block mb-1 text-green-500"
                >
                  Adhar Card Number
                </label>
                <input
                  type="text"
                  id="adharNumber"
                  name="adharNumber"
                  autoComplete="off"
                  minLength={12}
                  maxLength={12}
                  pattern="[0-12]+"
                  value={formData.adharNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="panCardNumber"
                  className="block mb-1 text-green-500"
                >
                  Pan Card Number
                </label>
                <input
                  type="text"
                  id="  panCardNumber"
                  name="panCardNumber"
                  value={formData.panCardNumber}
                  onChange={handleInputChange}
                  minLength={10}
                  maxLength={10}
                  pattern="[0-10]+"
                  autoComplete="off"
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
              </div>
              <div>
                <label htmlFor="adherCard" className="block mb-1 text-green-500">
                  Upload Adhar card
                </label>
                <input
                  // type="file"
                  // id="picture"
                  // name="picture"
                  type="file"
                  lable="adherCard"
                  name="adherCard"
                  id='adherCard'
                  accept='.jpeg, .png, .jpg'
                  onChange={handleFileInputChange}
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
                {/* {formData.adharCard && (
            <img
              src={URL.createObjectURL(formData.adharCard)}
              alt="Adhar Card Preview"
              style={{ maxWidth: '200px', maxHeight: '200px' }}
            />
          )}
          <button
            type="button" className="text-white bg-green-500 p-2 rounded-sm"
            onClick={() => handleUploadButtonClick('adharCard')}
          >
            Upload
          </button> */}
  
              </div>
              
              <div>
                <label htmlFor="picture" className="block mb-1 text-green-500">
                  Upload Pan Card
                </label>
                <input
                  type="file"
                  lable="panCard"
                  name="panCard"
                  id='panCard'
                  accept='.jpeg, .png, .jpg'
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="gstNumber"
                  className="block mb-1 text-green-500"
                >
                  GST Number
                </label>
                <input
                  type="text"
                  id="gstNumber"
                  name="gstNumber"
                  autoComplete="off"
                  minLength={15}
                  maxLength={15}
                  pattern="[0-15]+"
                  value={formData.gstNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
              </div>
              <div>
                <label htmlFor="account" className="block mb-1 text-green-500">
                  Bank A/C Number
                </label>
                <input
                  type="text"
                  id="account"
                  name="account"
                  autoComplete="off"
                  value={formData.account}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
              </div>
              <div>
                <label htmlFor="picture" className="block mb-1 text-green-500">
                  Upload GST Cirtificate
                </label>
                <input
                  type="file"
                  lable="gstCard"
                  name="gstCard"
                  id='gstCard'
                  accept='.jpeg, .png, .jpg'
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
              </div>
              <div>
                <label htmlFor="picture" className="block mb-1 text-green-500">
                  Upload Your Passbook/checkbook
                </label>
                <input
                  type="file"
                  lable="passCard"
                  name="passCard"
                  id='passCard'
                  accept='.jpeg, .png, .jpg'
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="accountHolderName"
                  className="block mb-1 text-green-500"
                >
                  Account Holder Name
                </label>
                <input
                  type="text"
                  id="acName"
                  name="acName"
                  autoComplete="off"
                  value={formData.acName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
              </div>
              <div>
                <label htmlFor="ifsc" className="block mb-1 text-green-500">
                  IFSC Code
                </label>
                <input
                  type="text"
                  id="ifsc"
                  name="ifsc"
                  autoComplete="off"
                  minLength={11}
                  maxLength={11}
                  pattern="[0-11]+"
                  value={formData.ifsc}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
              </div>

              <div>
                <label
                  htmlFor="branchName"
                  className="block mb-1 text-green-500"
                >
                  Branch Name
                </label>
                <input
                  type="text"
                  id="branchName"
                  name="branchName"
                  autoComplete="off"
                  value={formData.branchName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
              </div>
              <div>
                <label htmlFor="bankName" className="block mb-1 text-green-500">
                  Bank Name
                </label>
                <input
                  type="text"
                  id="bankName"
                  name="bankName"
                  autoComplete="off"
                  value={formData.bankName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
              </div>
              <div>
                <label htmlFor="address" className="block mb-1 text-green-500">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  autoComplete="off"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
              </div>
              <div>
                <label htmlFor="state" className="block mb-1 text-green-500">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  autoComplete="off"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
              </div>
              <div>
                <label htmlFor="district" className="block mb-1 text-green-500">
                  District
                </label>
                <input
                  type="text"
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleInputChange}
                  autoComplete="off"
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
              </div>
              <div>
                <label htmlFor="village" className="block mb-1 text-green-500">
                  Village
                </label>
                <input
                  type="text"
                  id="village"
                  name="village"
                  autoComplete="off"
                  value={formData.village}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
              </div>
              <div>
                <label htmlFor="pinCode" className="block mb-1 text-green-500">
                  Pin Code
                </label>
                <input
                  type="text"
                  id="pinCode"
                  name="pinCode"
                  minLength={6}
                  maxLength={6}
                  pattern="[0-6]+"
                  value={formData.pinCode}
                  onChange={handleInputChange}
                  autoComplete="off"
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
              </div>
              <div>
                <label className="block mb-1 text-green-500">Role</label>
                <select
                  value={role}
                  onChange={handleRoleChange}
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                >
                  <option value="">Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="buyer">Buyer</option>
                  <option value="farmer">Farmer</option>
                </select>
              </div>

              <div className="flex justify-center pt-6">
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
