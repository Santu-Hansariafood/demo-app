import React, { useState } from "react";
import { FaRegEye, FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { RiseLoader } from "react-spinners";

function BuyerList() {
  const [loading, setLoading] = useState(false); //make it true when api is intergrate
  const data = [
    {
      name: "John Doe",
      mobile: "1234567890",
      email: "john@example.com",
      companyName: "ABC Corporation",
      gstNumber: "GST123456789",
      panNumber: "ABCDE1234F",
    },
    {
      name: "Jane Smith",
      mobile: "9876543210",
      email: "jane@example.com",
      companyName: "XYZ Inc.",
      gstNumber: "GST987654321",
      panNumber: "XYZFG1234H",
    },
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
        Buyer List
      </h2>
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-green-500">
            <th className="border border-green-500 px-4 py-2 text-white">
              Name
            </th>
            <th className="border border-green-500 px-4 py-2 text-white">
              Mobile
            </th>
            <th className="border border-green-500 px-4 py-2 text-white">
              Email Address
            </th>
            <th className="border border-green-500 px-4 py-2 text-white">
              Company Name
            </th>
            <th className="border border-green-500 px-4 py-2 text-white">
              GST Number
            </th>
            <th className="border border-green-500 px-4 py-2 text-white">
              Pan Number
            </th>
            <th className="border border-green-500 px-4 py-2 text-white">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-green-100" : "bg-green-200"}
            >
              <td className="border border-green-400 px-4 py-2">{row.name}</td>
              <td className="border border-green-400 px-4 py-2">
                {row.mobile}
              </td>
              <td className="border border-green-400 px-4 py-2">{row.email}</td>
              <td className="border border-green-400 px-4 py-2">
                {row.companyName}
              </td>
              <td className="border border-green-400 px-4 py-2">
                {row.gstNumber}
              </td>
              <td className="border border-green-400 px-4 py-2">
                {row.panNumber}
              </td>
              <td className="border border-green-400 px-4 py-4 flex space-x-2">
                <Link to="/BuyerDetails/1">
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
}

export default BuyerList;
