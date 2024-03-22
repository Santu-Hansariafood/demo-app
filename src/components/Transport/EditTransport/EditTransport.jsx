import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom"; // Import useParams hook

const EditTransport = () => {
  const { id } = useParams(); // Use useParams hook to get the id from the URL

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    location: "",
    gst_no: "",
    billingAddress: "",
    shipingAddress: "", // Note: Typo in property name, should be shippingAddress
  });

  useEffect(() => {
    const fetchTransportDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/transport/${id}` // Use id from useParams
        );
        const transportData = response.data;
        setFormData(transportData);
      } catch (error) {
        console.error("Error fetching transport details:", error);
      }
    };

    fetchTransportDetails();
  }, [id]); // Make sure to include id in the dependency array

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/transport/${id}`,
        formData
      );
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Transport details updated successfully",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed to update transport details",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Failed to update transport details",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
    }
  };

  return (
    <div className="max-w-8xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-500">
        Edit Transport Information
      </h2>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-900 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-4 mb-4">
            <div className="w-full md:w-1/2 px-4 mb-4">
              <div className="mb-4">
                <label
                  className="block text-green-500 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-green-500 text-sm font-bold mb-2"
                  htmlFor="mobile"
                >
                  Mobile:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
                  id="mobile"
                  type="tel"
                  placeholder="Mobile"
                  max={10}
                  min={10}
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-green-500 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email Address:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-green-500 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  max={15}
                  min={3}
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-4">
              <div className="mb-4">
                <label
                  className="block text-green-500 text-sm font-bold mb-2"
                  htmlFor="location"
                >
                  Location:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
                  id="location"
                  type="text"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-green-500 text-sm font-bold mb-2"
                  htmlFor="gst_no"
                >
                  GST No.:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
                  id="gst_no"
                  type="text"
                  placeholder="GST No."
                  max={15}
                  min={15}
                  value={formData.gst_no}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-green-500 text-sm font-bold mb-2"
                  htmlFor="shipingAddress"
                >
                  Billing Address:
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
                  id="shipingAddress"
                  placeholder="Billing Address"
                  value={formData.billingAddress}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  className="block text-green-500 text-sm font-bold mb-2"
                  htmlFor="shipingAddress"
                >
                  Shipping Address:
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
                  id="shipingAddress"
                  placeholder="Shipping Address"
                  value={formData.shipingAddress}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Update Transport
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTransport;
