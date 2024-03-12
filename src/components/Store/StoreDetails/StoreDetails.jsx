import React, { useState, useEffect } from "react";

const StoreDetails = () => {
  const [storeDetails, setStoreDetails] = useState([]);

  useEffect(() => {
    const fetchStoreDetails = async () => {
      try {
        const response = await fetch("http://localhost:3000/registerStore");
        if (response.ok) {
          const data = await response.json();
          setStoreDetails(data);
        } else {
          throw new Error("Failed to fetch store details");
        }
      } catch (error) {
        console.error("Error fetching store details:", error);
        // Handle error (e.g., display error message)
      }
    };

    fetchStoreDetails();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Store Details</h2>
      <div className="overflow-x-auto">
        <table className="table-auto min-w-full border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2">Store Name</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Capacity</th>
              <th className="px-4 py-2">Manager</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Pin Code</th>
              <th className="px-4 py-2">Mobile Number</th>
            </tr>
          </thead>
          <tbody>
            {storeDetails.map((store, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{store.storeName}</td>
                <td className="border px-4 py-2">{store.storeLocation}</td>
                <td className="border px-4 py-2">{store.storeCapacity}</td>
                <td className="border px-4 py-2">{store.storeManager}</td>
                <td className="border px-4 py-2">{store.storeAddress}</td>
                <td className="border px-4 py-2">{store.pinCode}</td>
                <td className="border px-4 py-2">{store.storeMobileNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StoreDetails;
