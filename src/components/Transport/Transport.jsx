import React from "react";

const Transport = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-500">
        Transport Information
      </h2>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-900 mx-auto">
        <form>
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
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Transport;
