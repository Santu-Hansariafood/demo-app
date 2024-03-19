import React, { useState } from "react";
import QRCode from "react-qr-code";

function TransportDetails() {
  const [printMode, setPrintMode] = useState(false);

  const data = {
    name: "John Doe",
    mobile: "1234567890",
    email: "john@example.com",
    location: "New York",
    gst: "GST123456789",
    billingAddress: "123 Main St, New York, NY",
    shippingAddress: "456 Elm St, New York, NY",
  };

  const togglePrintMode = () => {
    setPrintMode(!printMode);
    if (!printMode) {
      window.print();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-500">
        Transport Details Card for {data.name}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
          <h3 className="text-lg font-bold mb-4 text-center">Details</h3>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">Name:</p>
            <p className="px-5">{data.name}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">Mobile:</p>
            <p className="px-5">{data.mobile}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">
              Email Address:
            </p>
            <p className="px-5">{data.email}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">Location:</p>
            <p className="px-5">{data.location}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">GST No.:</p>
            <p className="px-5">{data.gst}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">
              Billing Address:
            </p>
            <p className="px-5">{data.billingAddress}</p>
          </div>
          <div className="mb-4">
            <p className="text-green-500 text-sm font-bold mb-2">
              Shipping Address:
            </p>
            <p>{data.shippingAddress}</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col items-center">
          <h3 className="text-lg font-bold mb-4 text-center text-green-500">
            Transport Code
          </h3>
          <QRCode value={JSON.stringify(data)} size={200} />
        </div>
      </div>

      <div className="flex justify-center mt-4">
        {!printMode && (
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={togglePrintMode}
          >
            Print
          </button>
        )}
      </div>
    </div>
  );
}

export default TransportDetails;
