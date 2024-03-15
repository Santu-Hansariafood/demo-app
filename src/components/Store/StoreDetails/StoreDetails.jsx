import React, { useState, useEffect } from "react";
import { FaRegEye, FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { RiseLoader } from "react-spinners";

const StoreDetails = () => {
  const [storeDetails, setStoreDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStoreDetails = async () => {
      try {
        const response = await axios.get(
          "https://hansaria-server.onrender.com/registerStore"
        );
        if (response.status === 200) {
          setStoreDetails(response.data);
          setLoading(false);
        } else {
          throw new Error("Failed to fetch store details");
        }
      } catch (error) {
        console.error("Error fetching store details:", error);
        setLoading(false);
      }
    };

    fetchStoreDetails();
  }, []);

  const handleDelete = async (storeId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this store?"
    );
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(
        `https://hansaria-server.onrender.com/registerStore/${storeId}`
      );
      if (response.status === 200) {
        setStoreDetails((prevDetails) =>
          prevDetails.filter((store) => store._id !== storeId)
        );
        console.log("Store deleted successfully!");
      } else {
        throw new Error("Failed to delete store");
      }
    } catch (error) {
      console.error("Error deleting store:", error);
    }
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
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-500">
        Store Details
      </h2>
      <div className="overflow-x-auto">
        <div className="max-w-full overflow-hidden overflow-x-scroll">
          <table className="table-auto w-full border-collapse border border-green-800">
            <thead>
              <tr className="bg-green-500">
                <th className="px-4 py-2 text-white">Store Name</th>
                <th className="px-4 py-2 text-white">Location</th>
                <th className="px-4 py-2 text-white">Capacity</th>
                <th className="px-4 py-2 text-white">Manager</th>
                <th className="px-4 py-2 text-white">Address</th>
                <th className="px-4 py-2 text-white">Pin Code</th>
                <th className="px-4 py-2 text-white">Mobile Number</th>
                <th className="px-4 py-2 text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {storeDetails.map((store, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-green-100" : ""}
                >
                  <td className="border px-4 py-2">{store.storeName}</td>
                  <td className="border px-4 py-2">{store.storeLocation}</td>
                  <td className="border px-4 py-2">{store.storeCapacity}</td>
                  <td className="border px-4 py-2">{store.storeManager}</td>
                  <td className="border px-4 py-2">{store.storeAddress}</td>
                  <td className="border px-4 py-2">{store.pinCode}</td>
                  <td className="border px-4 py-2">
                    {store.storeMobileNumber}
                  </td>
                  <td className="border px-4 py-2 flex space-x-2">
                    <Link
                      to={{ pathname: `/store/${store._id}`, state: { store } }}
                    >
                      <FaRegEye style={{ cursor: "pointer", color: "green" }} />
                    </Link>
                    <Link to={`/UpdateStore/${store._id}`}>
                      <FaEdit style={{ cursor: "pointer", color: "blue" }} />
                    </Link>
                    <button onClick={() => handleDelete(store._id)}>
                      <MdDeleteForever
                        style={{ cursor: "pointer", color: "red" }}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StoreDetails;
