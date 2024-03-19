import React from 'react';

const SupplierRegister = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-lg mx-auto px-4 py-8 w-4/5">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-500">Register Supplier Details</h2>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left Column */}
          <div>
            <div className="mb-4">
              <label
                className="block text-green-500 text-sm font-bold mb-2"
                htmlFor="company_name"
              >
                Company Name:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
                id="company_name"
                type="text"
                placeholder="Company Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-green-500 text-sm font-bold mb-2"
                htmlFor="bank_name"
              >
                Bank Name:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
                id="bank_name"
                type="text"
                placeholder="Bank Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-green-500 text-sm font-bold mb-2"
                htmlFor="ifsc_code"
              >
                IFSC Code:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
                id="ifsc_code"
                type="text"
                placeholder="IFSC Code"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-green-500 text-sm font-bold mb-2"
                htmlFor="bank_account_no"
              >
                Bank Account No.:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
                id="bank_account_no"
                type="text"
                placeholder="Bank Account No."
              />
            </div>
          </div>
          {/* Right Column */}
          <div>
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
                htmlFor="billing_address"
              >
                Billing Address:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:shadow-outline"
                id="billing_address"
                type="text"
                placeholder="Billing Address"
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
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
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
