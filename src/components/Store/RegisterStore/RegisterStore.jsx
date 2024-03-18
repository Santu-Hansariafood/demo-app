import React, { useState } from "react";
import axios from "axios";

const RegisterStore = () => {
  const [formData, setFormData] = useState({
    storeName: "",
    storeLocation: "",
    storeCapacity: "",
    storeManager: "",
    storeAddress: "",
    pinCode: "",
    storeMobileNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://hansaria-server.onrender.com/registerstore", formData);

      if (response.status === 200) {
        console.log("Store registered successfully!");
      } else {
        console.error("Error registering store:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
    setFormData({
      storeName: "",
      storeLocation: "",
      storeCapacity: "",
      storeManager: "",
      storeAddress: "",
      pinCode: "",
      storeMobileNumber: "",
    });
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-green-500">Store Registration</h2>
        <div className="mb-4">
          <label className="block mb-1 text-green-500">Store Name</label>
          <input
            type="text"
            name="storeName"
            value={formData.storeName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-green-500">Store Location</label>
          <input
            type="text"
            name="storeLocation"
            value={formData.storeLocation}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-green-500">Store Capacity</label>
          <input
            type="number"
            name="storeCapacity"
            value={formData.storeCapacity}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-green-500">Store Manager</label>
          <input
            type="text"
            name="storeManager"
            value={formData.storeManager}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-green-500">Store Address</label>
          <input
            type="text"
            name="storeAddress"
            value={formData.storeAddress}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-green-500">PIN Code</label>
          <input
            type="text"
            name="pinCode"
            maxLength={6}
            minLength={6}
            value={formData.pinCode}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-green-500">Mobile Number</label>
          <input
            type="tel"
            name="storeMobileNumber"
            value={formData.storeMobileNumber}
            onChange={handleChange}
            maxLength={10}
            minLength={10}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterStore;
