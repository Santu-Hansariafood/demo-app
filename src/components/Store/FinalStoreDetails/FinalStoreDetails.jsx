import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import QRCode from "react-qr-code";
import { RiseLoader } from "react-spinners";

const FinalStoreDetails = () => {
  const { id } = useParams();
  const [store, setStore] = useState(null);

  useEffect(() => {
    const fetchStore = async () => {
      try {
        const response = await axios.get(
          `https://hansaria-server.onrender.com/registerStore/${id}`
        );
        setStore(response.data);
      } catch (error) {
        console.error("Error fetching store data:", error);
      }
    };

    fetchStore();
  }, [id]);

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="container mx-auto mt-8 flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <RiseLoader
            color={"#36D7B7"}
            height={100}
            width={100}
            radius={10}
            margin={10}
          />
          <p className="text-green-500 font-semibold mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-8 relative">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-500">
          Store Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="mb-2">
            <p className="font-semibold text-green-500">Store Name:</p>
            <p>{store.storeName}</p>
          </div>
          <div className="mb-2">
            <p className="font-semibold text-green-500">Location:</p>
            <p>{store.storeLocation}</p>
          </div>
          <div className="mb-2">
            <p className="font-semibold text-green-500">Capacity:</p>
            <p>{store.storeCapacity}</p>
          </div>
          <div className="mb-2">
            <p className="font-semibold text-green-500">Manager:</p>
            <p>{store.storeManager}</p>
          </div>
          <div className="mb-2">
            <p className="font-semibold text-green-500">Address:</p>
            <p>{store.storeAddress}</p>
          </div>
          <div className="mb-2">
            <p className="font-semibold text-green-500">Pin Code:</p>
            <p>{store.pinCode}</p>
          </div>
          <div className="mb-2">
            <p className="font-semibold text-green-500">Mobile Number:</p>
            <p>{store.storeMobileNumber}</p>
          </div>
        </div>
        <div className="mb-2 flex justify-center items-center">
          <QRCode value={JSON.stringify(store)} />
        </div>

        <div className="flex justify-center mt-10">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
            onClick={() => window.history.back()}
          >
            Back
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handlePrint}
          >
            Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalStoreDetails;
