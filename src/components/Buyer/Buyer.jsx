import React, { useState } from "react";
import axios from "axios";

const Buyer = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    isFirstLogin: false,
    location: "",
    gstNo: "",
    billingAddress: "",
    shippingAddress: "",
    mappedFinancer: "",
    selectedState: "",
    panNo: "",
    selectedCityOrigin: "",
    buyersOtherCompanies: [],
    buyersConsignees: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/buyer", formData);
      console.log("Buyer created:", response.data);
      // Reset form fields after successful submission
      setFormData({
        name: "",
        mobile: "",
        email: "",
        password: "",
        isFirstLogin: false,
        location: "",
        gstNo: "",
        billingAddress: "",
        shippingAddress: "",
        mappedFinancer: "",
        selectedState: "",
        panNo: "",
        selectedCityOrigin: "",
        buyersOtherCompanies: [],
        buyersConsignees: []
      });
    } catch (error) {
      console.error("Error creating buyer:", error);
    }
  };


  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-500">
        Buyer Information
      </h2>
      <div className="flex flex-col md:flex-row justify-center">
        {/* Left Column */}
        <div className="md:w-1/2 px-4">
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
              name="name"
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
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-green-500 text-sm font-bold mb-2"
              htmlFor="is_first_login"
            >
              Is First Login:
            </label>
            <input
              className="mr-2 leading-tight"
              id="is_first_login"
              type="checkbox"
              value={formData.isFirstLogin}
              onChange={handleChange}
            />
            <span className="text-sm">Yes</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 px-4">
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
              htmlFor="gstNo"
            >
              GST No.:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
              id="gstNo"
              type="text"
              placeholder="GST No."
              value={formData.gstNo}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-green-500 text-sm font-bold mb-2"
              htmlFor="billingAddress"
            >
              Billing Address:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
              id="billingAddress"
              placeholder="Billing Address"
              value={formData.billingAddress}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block text-green-500 text-sm font-bold mb-2"
              htmlFor="shippingAddress"
            >
              Shipping Address:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
              id="shippingAddress"
              placeholder="Shipping Address"
              value={formData.shippingAddress}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block text-green-500 text-sm font-bold mb-2"
              htmlFor="mapped_financer"
            >
              Mapped Financer:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
              id="mapped_financer"
              type="text"
              placeholder="Mapped Financer"
              value={formData.mappedFinancer}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-green-500 text-sm font-bold mb-2"
              htmlFor="state"
            >
              Select State:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
              id="state"
              value={formData.selectedState}
              onChange={handleChange}
            >
              {/* Options for states go here */}
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-green-500 text-sm font-bold mb-2"
              htmlFor="panNo"
            >
              PAN No.:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
              id="panNo"
              type="text"
              placeholder="PAN No."
              value={formData.panNo}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-green-500 text-sm font-bold mb-2"
              htmlFor="city_origin"
            >
              Select City/Origin:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
              id="city_origin"
              value={formData.selectedCityOrigin}
              onChange={handleChange}
            ></select>
          </div>
          <div className="mb-4">
            <label
              className="block text-green-500 text-sm font-bold mb-2"
              htmlFor="buyers_other_companies"
            >
              Select Buyer's Other Companies:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
              id="buyers_other_companies"
              multiple
              value={formData.buyersOtherCompanies}
              onChange={handleChange}
            ></select>
          </div>
          <div className="mb-4">
            <label
              className="block text-green-500 text-sm font-bold mb-2"
              htmlFor="buyers_consignees"
            >
              Select Buyer's Consignees:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
              id="buyers_consignees"
              multiple
              value={formData.shippingAddress}
              onChange={handleChange}
            ></select>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Register Buyer
        </button>
      </div>
    </div>
  );
};

export default Buyer;
