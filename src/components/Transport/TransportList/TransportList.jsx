import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaRegEye, FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { RiseLoader } from "react-spinners";
import Swal from "sweetalert2";

function TransportList() {
  const [loading, setLoading] = useState(true);
  const [transportData, setTransportData] = useState([]);

  const fetchTransportData = () => {
    axios.get("http://localhost:3000/transport")
      .then(response => {
        setTransportData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching transport data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTransportData(); // Fetch data when component mounts

    // Reload data every 5 seconds
    const interval = setInterval(() => {
      fetchTransportData();
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleDelete = async (id) => {
    // Display confirmation alert
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this transport record!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:3000/transport/${id}`);
          // Show success message
          Swal.fire({
            icon: 'success',
            title: 'Transport record deleted successfully!',
            showConfirmButton: false,
            timer: 2000
          });
          // Fetch data after deletion
          fetchTransportData();
        } catch (error) {
          console.error("Error deleting transport data:", error);
          // Show error message
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        }
      }
    });
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
              {transportData.map((row, index) => (
                <tr key={row.id} className={index % 2 === 0 ? 'bg-green-100' : 'bg-green-200'}>
                  <td className="border border-green-400 px-4 py-2">{row.name}</td>
                  <td className="border border-green-400 px-4 py-2">{row.mobile}</td>
                  <td className="border border-green-400 px-4 py-2">{row.email}</td>
                  <td className="border border-green-400 px-4 py-2">{row.location}</td>
                  <td className="border border-green-400 px-4 py-2">{row.gst_no}</td>
                  <td className="border border-green-400 px-4 py-2">{row.billingAddress}</td>
                  <td className="border border-green-400 px-4 py-2">{row.shipingAddress}</td>
                  <td className="border px-4 py-4 space-x-2 flex">
                    <Link to={`/TransportDetails/${row.id}`}>
                      <FaRegEye
                        title="View"
                        style={{ cursor: "pointer", color: "green" }}
                      />
                    </Link>
                    <Link to={`/EditTransport/${row._id}`}>
                      <FaEdit
                        title="Edit"
                        style={{ cursor: "pointer", color: "blue" }}
                      />
                    </Link>
                    <MdDeleteForever
                      title="Delete"
                      style={{ cursor: "pointer", color: "red" }}
                      onClick={() => handleDelete(row._id)}
                    />
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
