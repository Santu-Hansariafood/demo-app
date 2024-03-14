import React, { useState, useEffect } from "react";
import axios from "axios";
import jsonData from "../../data/country.json";

const AddressDetails = ({ formData, onStateChange, handleInputChange }) => {
  const [uniqueStates, setUniqueStates] = useState([]);
  const [uniqueDistricts, setUniqueDistricts] = useState([]);
  const [uniqueVillages, setUniqueVillages] = useState([]);
  const [uniquePinCodes, setUniquePinCodes] = useState([]);

  useEffect(() => {
    const states = [
      ...new Set(jsonData.country.map((entry) => entry.State)),
    ].sort();
    setUniqueStates(states);
  }, []);

  const handleStateChange = (event) => {
    const selectedState = event.target.value;
    onStateChange(selectedState);

    const districts = [
      ...new Set(
        jsonData.country
          .filter((entry) => entry.State === selectedState)
          .map((entry) => entry.District)
      ),
    ].sort();

    setUniqueDistricts(districts);
  };

  const handleVillageChange = (event) => {
    const selectedVillage = event.target.value;
    handleInputChange(event, "village");

    const selectedState = formData.state;
    const selectedDistrict = formData.district;

    const filteredData = jsonData.country.filter(
      (entry) =>
        entry.State === selectedState &&
        entry.District === selectedDistrict &&
        entry.City === selectedVillage
    );

    const pinCodes = [
      ...new Set(filteredData.map((entry) => entry.Pincode)),
    ].sort();
    setUniquePinCodes(pinCodes);
  };

  const handleDistrictChange = (event) => {
    const selectedDistrict = event.target.value;
    handleInputChange(event, "district");

    const filteredData = jsonData.country.filter(
      (entry) => entry.District === selectedDistrict
    );

    const villages = [
      ...new Set(filteredData.map((entry) => entry.City)),
    ].sort();

    setUniqueVillages(villages);
  };

  return (
    <div>
      <label htmlFor="state" className="block mb-1 text-green-500">
        State
      </label>
      <select
        id="state"
        name="state"
        value={formData.state}
        onChange={handleStateChange}
        className="w-full px-4 py-2 border rounded-md text-green-500"
      >
        <option value="">Select State</option>
        {uniqueStates.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>

      <label htmlFor="district" className="block mb-1 text-green-500">
        District
      </label>
      <select
        id="district"
        name="district"
        value={formData.district}
        onChange={(e) => {
          handleDistrictChange(e);
        }}
        className="w-full px-4 py-2 border rounded-md text-green-500"
      >
        <option value="">Select District</option>
        {uniqueDistricts.map((district, index) => (
          <option key={index} value={district}>
            {district}
          </option>
        ))}
      </select>

      <label htmlFor="village" className="block mb-1 text-green-500">
        Village
      </label>
      <select
        id="village"
        name="village"
        value={formData.village}
        onChange={(e) => handleVillageChange(e)}
        className="w-full px-4 py-2 border rounded-md text-green-500"
      >
        <option value="">Select Village</option>
        {uniqueVillages.map((village, index) => (
          <option key={index} value={village}>
            {village}
          </option>
        ))}
      </select>

      <label htmlFor="pinCode" className="block mb-1 text-green-500">
        Pin Code
      </label>
      <select
        id="pinCode"
        name="pinCode"
        value={formData.pinCode}
        onChange={(e) => handleInputChange(e, "pinCode")}
        className="w-full px-4 py-2 border rounded-md text-green-500"
      >
        <option value="">Select Pin Code</option>
        {uniquePinCodes.map((pinCode, index) => (
          <option key={index} value={pinCode}>
            {pinCode}
          </option>
        ))}
      </select>
    </div>
  );
};

const Register = () => {
  const [role, setRole] = useState("");
  const [farmerDeals, setFarmerDeals] = useState("");
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
    farmerDeals: "",
    account: "",
    acName: "",
    ifsc: "",
    branchName: "",
    bankName: "",
    adharCard: "",
    panCard: "",
    gstCard: "",
    passCard: "",
    farmarPhoto: "",
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
    const file = files && files.length > 0 ? files[0] : null;
    setFormData({ ...formData, [name]: file });
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
    setFormData({ ...formData, role: event.target.value });
  };

  const handleFarmerRoleChange = (event) => {
    setFarmerDeals(event.target.value);
    setFormData({ ...formData, farmerDeals: event.target.value });
  };

  const handleStateChange = (selectedState) => {
    setFormData({ ...formData, state: selectedState });
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     if (!validateMobile(formData.mobile)) {
  //       alert("Please enter a valid mobile number.");
  //       return;
  //     }
  //     const response = await axios.post(
  //       "https://hansaria-server.onrender.com/register",
  //       formData
  //     );
      
  //     console.log("Registration successful!");
  //     if (!validateEmail(formData.email)) {
  //       alert("Please enter a valid email address.");
  //       return;
  //     }

  //     setFormData({
  //       firstName: "",
  //       lastName: "",
  //       mobile: "",
  //       email: "",
  //       adharNumber: "",
  //       panCardNumber: "",
  //       gstNumber: "",
  //       address: "",
  //       state: "",
  //       district: "",
  //       village: "",
  //       pinCode: "",
  //       role: "",
  //       farmerDeals: "",
  //       account: "",
  //       acName: "",
  //       ifsc: "",
  //       branchName: "",
  //       bankName: "",
  //       adharCard: "",
  //       panCard: "",
  //       gstCard: "",
  //       passCard: "",
  //       farmarPhoto: "",
  //     });
  //   } catch (error) {
  //     console.error("Error registering user:", error);
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Your existing form validation logic

      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'adharCard' || key === 'panCard' || key === 'gstCard' || key === 'passCard' || key === 'farmarPhoto') {
          formDataToSend.append(key, value);
        } else {
          formDataToSend.set(key, value);
        }
      });

      const response = await axios.post(
        "https://hansaria-server.onrender.com/register",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Registration successful!");

      // Reset form data after successful submission
      setFormData({ ...initialFormData });
    } catch (error) {
      console.error("Error registering user:", error);
      // Display error message to the user
      // Optionally, you can clear the form data here
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateMobile = (mobile) => {
    const mobilePattern = /^\d{10}$/;
    return mobilePattern.test(mobile);
  };

  return (
    <div className="container mx-auto flex justify-center">
      <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="py-4 px-6">
          <h2 className="text-2xl font-bold mb-4 text-center text-green-500">
            New Farmer Register
          </h2>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                  // pattern="[0-10]+"
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
                  // pattern="[0-12]+"
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
                  id="panCardNumber"
                  name="panCardNumber"
                  value={formData.panCardNumber}
                  onChange={handleInputChange}
                  minLength={10}
                  maxLength={10}
                  // pattern="[0-10]+"
                  autoComplete="off"
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="adharCard"
                  className="block mb-1 text-green-500"
                >
                  Upload Adhar card
                </label>
                
                <input
                  type="file"
                  name="adharCard"
                  id="adharCard"
                  accept=".jpeg, .png, .jpg"
                  onChange={handleFileInputChange}
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
              </div>

              <div>
                <label htmlFor="panCard" className="block mb-1 text-green-500">
                  Upload Pan Card
                </label>

                <input
                  type="file"
                  name="panCard"
                  id="panCard"
                  accept=".jpeg, .png, .jpg"
                  onChange={handleFileInputChange}
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
                  // pattern="[0-15]+"
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
                <label htmlFor="gstCard" className="block mb-1 text-green-500">
                  Upload GST Certificate
                </label>
                <input
                  type="file"
                  name="gstCard"
                  id="gstCard"
                  accept=".jpeg, .png, .jpg"
                  onChange={handleFileInputChange}
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
              </div>
              <div>
                <label htmlFor="passCard" className="block mb-1 text-green-500">
                  Upload Your Passbook/checkbook
                </label>
                <input
                  type="file"
                  name="passCard"
                  id="passCard"
                  accept=".jpeg, .png, .jpg"
                  onChange={handleFileInputChange}
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
              </div>
              <div>
                <label htmlFor="acName" className="block mb-1 text-green-500">
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
                  // pattern="[0-11]+"
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
                <AddressDetails
                  formData={formData}
                  onStateChange={handleStateChange}
                  handleInputChange={handleInputChange}
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

              <div>
                <label className="block mb-1 text-green-500">
                  Farmer Deals in{" "}
                </label>
                <select
                  value={farmerDeals}
                  onChange={handleFarmerRoleChange}
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                >
                  <option value="">Select Crop</option>
                  <option value="maize">Maize</option>
                  <option value="soyabean">Soyabean</option>
                  <option value="rice">Rice</option>
                  <option value="wheat">Wheat</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="farmarPhoto"
                  className="block mb-1 text-green-500"
                >
                  Farmer Photo
                </label>
                <input
                  type="file"
                  name="farmarPhoto"
                  id="farmarPhoto"
                  accept=".jpeg, .png, .jpg"
                  onChange={handleFileInputChange}
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
              </div>

              <div className="flex justify-center pt-6">
                <div className="w-full max-w-xs">
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded-md w-full"
                  >
                    Register for Farmer
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
