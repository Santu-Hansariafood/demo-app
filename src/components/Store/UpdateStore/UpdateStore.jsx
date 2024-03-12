import React, { useState, useEffect } from "react";

const UpdateStore = () => {
  const [storeName, setStoreName] = useState("");
  const [storeLocation, setStoreLocation] = useState("");
  const [storeCapacity, setStoreCapacity] = useState("");
  const [storeManager, setStoreManager] = useState("");
  const [storeAddress, setStoreAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [storeMobileNumber, setStoreMobileNumber] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/updateStore", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          storeName,
          storeLocation,
          storeCapacity,
          storeManager,
          storeAddress,
          pinCode,
          storeMobileNumber,
        }),
      });
      if (response.ok) {
        setMessage("Store details updated successfully.");
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
      <h2 className="text-2xl font-bold mb-4">Update Store Details</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="storeName" className="block font-medium">Store Name:</label>
          <input
            type="text"
            id="storeName"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>
        {/* Add input fields for other store details similarly */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Store
        </button>
        {message && <p className="text-red-500 mt-2">{message}</p>}
      </form>
    </div>
  );
};

export default UpdateStore;
