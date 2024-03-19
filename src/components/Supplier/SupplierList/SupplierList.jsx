import React, { useState } from "react";
import { FaRegEye, FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { RiseLoader } from "react-spinners";

const SupplierList = () => {
  const [loading, setLoading] = useState(false); // Set to true when integrating with API
  const suppliers = [
    {
      companyName: "ABC Corporation",
      location: "New York",
      billingAddress: "123 Main St, New York, NY",
      gstNo: "GST123456789",
      panNo: "ABCDE1234F",
    },
    {
      companyName: "XYZ Enterprises",
      location: "Los Angeles",
      billingAddress: "456 Oak St, Los Angeles, CA",
      gstNo: "GST987654321",
      panNo: "XYZAB6789C",
    },
    // Add more supplier data as needed
  ];

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
        Supplier List
      </h2>
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-500">
            <th className="border border-green-500 px-4 py-2 text-white">
              Company Name
            </th>
            <th className="border border-green-500 px-4 py-2 text-white">
              Location
            </th>
            <th className="border border-green-500 px-4 py-2 text-white">
              Billing Address
            </th>
            <th className="border border-green-500 px-4 py-2 text-white">
              GST No.
            </th>
            <th className="border border-green-500 px-4 py-2 text-white">
              PAN No.
            </th>
            <th className="border border-green-500 px-4 py-2 text-white">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-green-100" : "bg-green-200"}
            >
              <td className="border border-green-400 px-4 py-2">
                {supplier.companyName}
              </td>
              <td className="border border-green-400 px-4 py-2">
                {supplier.location}
              </td>
              <td className="border border-green-400 px-4 py-2">
                {supplier.billingAddress}
              </td>
              <td className="border border-green-400 px-4 py-2">
                {supplier.gstNo}
              </td>
              <td className="border border-green-400 px-4 py-2">
                {supplier.panNo}
              </td>
              <td className="border border-green-400 px-4 py-4 flex space-x-2">
                <Link to={`/SupplierDetails/${index + 1}`}>
                  <FaRegEye
                    title="View"
                    style={{ cursor: "pointer", color: "green" }}
                  />
                </Link>
                <Link to="#">
                  <FaEdit
                    title="Edit"
                    style={{ cursor: "pointer", color: "blue" }}
                  />
                </Link>
                <Link>
                  <MdDeleteForever
                    title="Delete"
                    style={{ cursor: "pointer", color: "red" }}
                  />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupplierList;
