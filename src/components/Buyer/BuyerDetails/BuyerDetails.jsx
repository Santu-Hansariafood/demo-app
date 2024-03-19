import React, { useState } from "react";
import QRCode from "react-qr-code";

const BuyerDetails = () => {
  const [printMode, setPrintMode] = useState(false);

  // Dummy data
  const data = {
    name: "John Doe",
    mobile: "1234567890",
    email: "john@example.com",
    password: "********",
    isFirstLogin: true,
    productsForMapping: ["Product A", "Product B"],
    companyName: "ABC Inc.",
    location: "New York",
    biddingLocations: "Location A, Location B",
    gstNo: "GST123456789",
    billingAddress: "123 Main St, New York, NY",
    shippingAddress: "456 Elm St, New York, NY",
    mappedFinancer: "XYZ Finance",
    state: "New York",
    panNo: "ABCDE1234F",
    cityOrigin: "New York",
    buyersOtherCompanies: ["Company X", "Company Y"],
    buyersConsignees: ["Consignee 1", "Consignee 2"],
  };

  // Function to toggle print mode
  const togglePrintMode = () => {
    setPrintMode(!printMode);
    if (!printMode) {
      window.print();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-500">
        Buyer Details of {data.name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
          <h3 className="text-lg font-bold mb-4 text-center text-green-500">
            Details
          </h3>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">Name:</p>
            <p className="px-2">{data.name}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">Mobile:</p>
            <p className="px-2">{data.mobile}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">Email:</p>
            <p className="px-2">{data.email}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">Company:</p>
            <p className="px-2">{data.companyName}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">
              Billing Address:
            </p>
            <p className="px-2">{data.billingAddress}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">
              Shipping Address:
            </p>
            <p className="px-2">{data.shippingAddress}</p>
          </div>
        </div>

        {/* Right column */}
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
          <h3 className="text-lg font-bold mb-4">QR Code</h3>
          <QRCode
            value={JSON.stringify(data)}
            size={200}
            fgColor="#007f00"
            className="self-center"
          />
        </div>
      </div>

      {/* Print button */}
      {!printMode && (
        <div className="flex justify-center">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={togglePrintMode}
          >
            Print
          </button>
        </div>
      )}
    </div>
  );
};

export default BuyerDetails;
