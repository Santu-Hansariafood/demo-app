import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditSupplier = () => {
  const { id } = useParams();
  const [supplierData, setSupplierData] = useState({
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
    supplierGSTno: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchSupplierDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/suppliers/${id}`
        );
        if (response.status === 200) {
          setSupplierData(response.data);
        } else {
          throw new Error("Failed to fetch supplier details");
        }
      } catch (error) {
        console.error("Error fetching supplier details:", error);
        setMessage("Failed to fetch supplier details. Please try again later.");
      }
    };

    fetchSupplierDetails();
  }, [id]);

  const handleChange = (e, field) => {
    const { value } = e.target;
    setSupplierData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/suppliers/${id}`,
        supplierData
      );
      if (response.status === 200) {
        setMessage("Supplier details updated successfully.");
        window.alert("Supplier details updated successfully.");
      } else {
        throw new Error("Failed to update supplier details");
      }
    } catch (error) {
      console.error("Error updating supplier details:", error);
      setMessage("Failed to update supplier details. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-screen-lg mx-auto px-4 py-8 w-4/5">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-500">
          Edit Register Supplier Details
        </h2>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          // onSubmit={handleSubmit}
        >
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
                  value={supplierData.supplierName}
                  onChange={(e) => handleChange(e, "supplierName")}

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
                  value={supplierData.supplierEmail}
                  onChange={(e)=>handleChange(e,"supplierEmail")}
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
                  value={supplierData.supplierMobile}
                  onChange={(e)=>handleChange(e,"supplierMobile")}
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
                  value={supplierData.supplierPassword}
                  onChange={(e)=>handleChange(e, "supplierPassword")}
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
                  value={supplierData.supplierLocation}
                  onChange={(e)=>handleChange(e, "supplierLocation")}
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
                  value={supplierData.supplierShipingAddress}
                  onChange={(e)=>handleChange(e, "supplierShipingAddress")}
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
                  value={supplierData.supplierCity}
                  onChange={(e)=>handleChange(e, "supplierCity")}
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
                  value={supplierData.supplierState}
                  onChange={(e)=>handleChange(e,"supplierState")}
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
                  value={supplierData.supplierSeals}
                  onChange={(e)=>handleChange(e, "supplierSeals")}
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
                  value={supplierData.otherCompany}
                  onChange={(e)=>handleChange(e, "otherCompany")}
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
                  value={supplierData.supplierBankname}
                  onChange={(e)=>handleChange(e,"supplierBankname")}
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
                  value={supplierData.supplierBranchname}
                  onChange={(e)=>handleChange(e,"supplierBranchname")}
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
                  value={supplierData.supplierIfsc}
                  onChange={(e)=>handleChange(e,"supplierIfsc")}
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
                  value={supplierData.supplierAccountnumber}
                  onChange={(e)=>handleChange(e, "supplierAccountnumber")}
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
                  value={supplierData.supplierNameAsPerBank}
                  onChange={(e)=>handleChange(e, "supplierNameAsPerBank")}
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
                  value={supplierData.supplierGSTno}
                  onChange={(e)=>handleChange(e, "supplierGSTno")}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={handleSubmit}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register Supplier Updated
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditSupplier;
