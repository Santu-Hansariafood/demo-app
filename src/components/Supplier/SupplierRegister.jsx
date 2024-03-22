import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const SupplierRegister = () => {
  const [formData, setFormData] = useState({
    supplierName: "",
    supplierEmail: "",
    supplierMobile: "",
    supplierPassword: "",
    supplierLocation: "",
    supplierShipingAddress: "",
    supplierCity: "",
    supplierState: "",
    supplierSeals: "",
    otherCompany: "",
    supplierBankname: "",
    supplierBranchname: "",
    supplierIfsc: "",
    supplierAccountnumber: "",
    supplierNameAsPerBank: "",
    supplierGSTno:""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/suppliers",
        formData
      );
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Supplier registered successfully",
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
          title: "Supplier registration failed",
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
        title: "Transport registration failed",
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
    <div className="flex justify-center">
      <div className="max-w-screen-lg mx-auto px-4 py-8 w-4/5">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-500">
          Register Supplier Details
        </h2>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <div className="mb-4">
                <label
                  className="block text-green-500 text-sm font-bold mb-2"
                  htmlFor="supplierName"
                >
                  Supplier Name:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
                  id="supplierName"
                  type="text"
                  placeholder="Supplier Name"
                  value={formData.supplierName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-green-500 text-sm font-bold mb-2"
                  htmlFor="supplierEmail"
                >
                  Supplier Email:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
                  id="supplierEmail"
                  type="text"
                  placeholder="Supplier Email"
                  value={formData.supplierEmail}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-green-500 text-sm font-bold mb-2"
                  htmlFor="supplierMobile"
                >
                  Supplier Mobile:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
                  id="supplierMobile"
                  type="text"
                  placeholder="Supplier Mobile"
                  value={formData.supplierMobile}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-green-500 text-sm font-bold mb-2"
                  htmlFor="supplierPassword"
                >
                  Supplier Password:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
                  id="supplierPassword"
                  type="text"
                  placeholder="Supplier Password"
                  value={formData.supplierPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-green-500 text-sm font-bold mb-2"
                  htmlFor="supplierLocation"
                >
                  Supplier Location:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
                  id="supplierLocation"
                  type="text"
                  placeholder="Supplier Location"
                  value={formData.supplierLocation}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-green-500 text-sm font-bold mb-2"
                  htmlFor="supplierShipingAddress"
                >
                  Supplier Shiping Address:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
                  id="supplierShipingAddress"
                  type="text"
                  placeholder="Supplier Shiping Address"
                  value={formData.supplierShipingAddress}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-green-500 text-sm font-bold mb-2"
                  htmlFor="supplierCity"
                >
                  Supplier City:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
                  id="supplierCity"
                  type="text"
                  placeholder="Supplier City"
                  value={formData.supplierCity}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-green-500 text-sm font-bold mb-2"
                  htmlFor="supplierState"
                >
                  Supplier State:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
                  id="supplierState"
                  type="text"
                  placeholder="Supplier State"
                  value={formData.supplierState}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* Right Column */}
            <div>
              <div className="mb-4">
                <label
                  className="block text-green-500 text-sm font-bold mb-2"
                  htmlFor="supplierSeals"
                >
                  Supplier Seals:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
                  id="supplierSeals"
                  type="text"
                  placeholder="Supplier Seals"
                  value={formData.supplierSeals}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-green-500 text-sm font-bold mb-2"
                  htmlFor="otherCompany"
                >
                  Other Company:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
                  id="otherCompany"
                  type="text"
                  placeholder="Other Company"
                  value={formData.otherCompany}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-green-500 text-sm font-bold mb-2"
                  htmlFor="supplierBankname"
                >
                  Supplier Bankname:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
                  id="supplierBankname"
                  type="text"
                  placeholder="Supplier Bankname"
                  value={formData.supplierBankname}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-green-500 text-sm font-bold mb-2"
                  htmlFor="supplierBranchname"
                >
                  Supplier Branchname:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
                  id="supplierBranchname"
                  type="text"
                  placeholder="Supplier Branchname"
                  value={formData.supplierBranchname}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-green-500 text-sm font-bold mb-2"
                  htmlFor="supplierIfsc"
                >
                  Supplier IFSC:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
                  id="supplierIfsc"
                  type="text"
                  placeholder="Supplier IFSC"
                  value={formData.supplierIfsc}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-green-500 text-sm font-bold mb-2"
                  htmlFor="supplierAccountnumber"
                >
                  Supplier Account Number:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
                  id="supplierAccountnumber"
                  type="text"
                  placeholder="Supplier Account Number"
                  value={formData.supplierAccountnumber}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-green-500 text-sm font-bold mb-2"
                  htmlFor="supplierNameAsPerBank"
                >
                  supplier Name As Per Bank:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
                  id="supplierNameAsPerBank"
                  type="text"
                  placeholder="Supplier Name As Per Bank"
                  value={formData.supplierNameAsPerBank}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-green-500 text-sm font-bold mb-2"
                  htmlFor="supplierGSTno"
                >
                  Supplier GST Number:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
                  id="supplierGSTno"
                  type="text"
                  placeholder="Supplier GST Number"
                  value={formData.supplierGSTno}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={handleSubmit}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Register Supplier
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SupplierRegister;
