import React, { useState, useEffect } from "react";
import { FaRegEye, FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { RiseLoader } from "react-spinners";

const SupplierList = () => {
  const [supplierDetails, setSupplierDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSupplierDetails = async () => {
      try {
        const response = await axios.get("http://localhost:3000/suppliers");
        if (response.status === 200) {
          setSupplierDetails(response.data);
          setLoading(false);
        } else {
          throw new Error("Failed to fetch Supplier details");
        }
      } catch (error) {
        console.error("Error fetching Supplier details:", error);
        setLoading(false);
      }
    };

    fetchSupplierDetails();
  }, []);

  const handleDelete = async (supplierId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Supplier?"
    );
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(
        `http://localhost:3000/suppliers/${supplierId}`
      );
      if (response.status === 200) {
        setSupplierDetails((prevDetails) =>
          prevDetails.filter((supplier) => supplier._id !== supplierId)
        );
        console.log("Supplier deleted successfully!");
      } else {
        throw new Error("Failed to delete Supplier");
      }
    } catch (error) {
      console.error("Error deleting supplier:", error);
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
    <div className="overflow-x-auto p-4">
      <h2 className="text-xl font-bold mb-4 text-center text-green-500">
        All Supplier List
      </h2>
      <div className="max-w-full overflow-x-auto">
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr className="bg-green-500">
              <th className="border border-green-500 px-4 py-2 text-white">
                Supplier Name
              </th>
              <th className="border border-green-500 px-4 py-2 text-white">
                Supplier Mobile
              </th>
              <th className="border border-green-500 px-4 py-2 text-white">
                Shipping Address
              </th>
              <th className="border border-green-500 px-4 py-2 text-white">
                Location
              </th>
              <th className="border border-green-500 px-4 py-2 text-white">
                GST Number
              </th>
              <th className="border border-green-500 px-4 py-2 text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {supplierDetails.map((supplier, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-green-100" : "bg-green-200"}
              >
                <td className="border border-green-400 px-4 py-2">
                  {supplier.supplierName}
                </td>
                <td className="border border-green-400 px-4 py-2">
                  {supplier.supplierMobile}
                </td>
                <td className="border border-green-400 px-4 py-2">
                  {supplier.supplierShipingAddress}
                </td>
                <td className="border border-green-400 px-4 py-2">
                  {supplier.supplierLocation}
                </td>
                <td className="border border-green-400 px-4 py-2">
                  {supplier.supplierGSTno}
                </td>
                <td className="border border-green-400 px-4 py-4 flex space-x-2">
                  <Link to={{ pathname: `/supplier/${supplier._id}`, state: { supplier } }}>
                    <FaRegEye
                      title="View"
                      style={{ cursor: "pointer", color: "green" }}
                    />
                  </Link>
                  <Link to={`/EditSupplier/${supplier._id}`}>
                    <FaEdit
                      title="Edit"
                      style={{ cursor: "pointer", color: "blue" }}
                    />
                  </Link>
                  <MdDeleteForever
                    title="Delete"
                    style={{ cursor: "pointer", color: "red" }}
                    onClick={() => handleDelete(supplier._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupplierList;
