import React from "react";

const Buyer = () => {
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
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-green-500 text-sm font-bold mb-2"
              htmlFor="billing_address"
            >
              Billing Address:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
              id="billing_address"
              placeholder="Billing Address"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block text-green-500 text-sm font-bold mb-2"
              htmlFor="shipping_address"
            >
              Shipping Address:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
              id="shipping_address"
              placeholder="Shipping Address"
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
            >
              {/* Options for states go here */}
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-green-500 text-sm font-bold mb-2"
              htmlFor="pan_no"
            >
              PAN No.:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
              id="pan_no"
              type="text"
              placeholder="PAN No."
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
            ></select>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Register Buyer
        </button>
      </div>
    </div>
  );
};

export default Buyer;
