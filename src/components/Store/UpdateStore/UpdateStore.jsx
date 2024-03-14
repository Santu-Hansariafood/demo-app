import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateStore = () => {
  const { id } = useParams();
  // const history = useHistory();
  const [storeDetails, setStoreDetails] = useState({
    storeName: "",
    storeLocation: "",
    storeCapacity: "",
    storeManager: "",
    storeAddress: "",
    pinCode: "",
    storeMobileNumber: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchStoreDetails = async () => {
      try {
        const response = await fetch(`https://hansaria-server.onrender.com/registerStore/${id}`);
        if (response.ok) {
          const data = await response.json();
          setStoreDetails(data);
        } else {
          throw new Error("Failed to fetch store details");
        }
      } catch (error) {
        console.error("Error fetching store details:", error);
        setMessage("Failed to fetch store details. Please try again later.");
      }
    };

    fetchStoreDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStoreDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://hansaria-server.onrender.com/registerStore/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(storeDetails), 
      });
      if (response.ok) {
        setMessage("Store details updated successfully.");
        // Display alert and redirect after clicking OK
        window.alert(message);
        // history.push("/FinalStoreDetails");
      } else {
        throw new Error("Failed to update store details");
      }
    } catch (error) {
      console.error("Error updating store details:", error);
      setMessage("Failed to update store details. Please try again later.");
    }
  };


  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-center text-green-500">Update Store Details</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="storeName" className="block font-medium text-green-500">Store Name:</label>
          <input
            type="text"
            id="storeName"
            name="storeName"
            value={storeDetails.storeName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="storeLocation" className="block font-medium text-green-500">Store Location:</label>
          <input
            type="text"
            id="storeLocation"
            name="storeLocation"
            value={storeDetails.storeLocation}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="storeCapacity" className="block font-medium text-green-500">Store Capacity:</label>
          <input
            type="text"
            id="storeCapacity"
            name="storeCapacity"
            value={storeDetails.storeCapacity}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="storeManager" className="block font-medium text-green-500">Store Manager:</label>
          <input
            type="text"
            id="storeManager"
            name="storeManager"
            value={storeDetails.storeManager}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="storeAddress" className="block font-medium text-green-500">Store Address:</label>
          <input
            type="text"
            id="storeAddress"
            name="storeAddress"
            value={storeDetails.storeAddress}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pinCode" className="block font-medium text-green-500">PIN CODE:</label>
          <input
            type="text"
            id="pinCode"
            name="pinCode"
            value={storeDetails.pinCode}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="storeMobileNumber" className="block font-medium text-green-500">Store Mobile Number:</label>
          <input
            type="text"
            id="storeMobileNumber"
            name="storeMobileNumber"
            value={storeDetails.storeMobileNumber}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Store
        </button>
        {message && <p className="text-red-500 mt-2">{message}</p>}
      </form>
    </div>
  );
};

export default UpdateStore;
