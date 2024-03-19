import React, { useState } from "react";
import { FaRegEye, FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { RiseLoader } from "react-spinners";


function TransportList() {
    const [loading, setLoading] = useState(false); //make it true when api is intergrate
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
  const dummyData = [
    {
      name: 'John Doe',
      mobile: '1234567890',
      email: 'john@example.com',
      location: 'New York',
      gst: 'GST123456789',
      billingAddress: '123 Main St, New York, NY',
      shippingAddress: '456 Elm St, New York, NY',
    },
    {
      name: 'Jane Smith',
      mobile: '9876543210',
      email: 'jane@example.com',
      location: 'Los Angeles',
      gst: 'GST987654321',
      billingAddress: '789 Oak St, Los Angeles, CA',
      shippingAddress: '101 Pine St, Los Angeles, CA',
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <h2 className="text-2xl font-bold mb-4 px-4 py-2 bg-green-500 text-white text-center">All Transport Details</h2>

        <div className="px-4 py-2">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-green-500">
                <th className="border border-green-400 px-4 py-2">Name</th>
                <th className="border border-green-400 px-4 py-2">Mobile</th>
                <th className="border border-green-400 px-4 py-2">Email Address</th>
                <th className="border border-green-400 px-4 py-2">Location</th>
                <th className="border border-green-400 px-4 py-2">GST No.</th>
                <th className="border border-green-400 px-4 py-2">Billing Address</th>
                <th className="border border-green-400 px-4 py-2">Shipping Address</th>
                <th className="border border-green-400 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-green-100' : 'bg-green-200'}>
                  <td className="border border-green-400 px-4 py-2">{row.name}</td>
                  <td className="border border-green-400 px-4 py-2">{row.mobile}</td>
                  <td className="border border-green-400 px-4 py-2">{row.email}</td>
                  <td className="border border-green-400 px-4 py-2">{row.location}</td>
                  <td className="border border-green-400 px-4 py-2">{row.gst}</td>
                  <td className="border border-green-400 px-4 py-2">{row.billingAddress}</td>
                  <td className="border border-green-400 px-4 py-2">{row.shippingAddress}</td>
                  <td className="border px-4 py-4 space-x-2 flex">
                  <Link to="/TransportDetails/1">
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
      </div>
    </div>
  );
}

export default TransportList;
