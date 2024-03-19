import React, { useState } from "react";
import QRCode from "react-qr-code";

const SupplierDetails = () => {
  const [printMode, setPrintMode] = useState(false);

  // Dummy data
  const data = {
    companyName: "ABC Corporation",
    location: "New York",
    billingAddress: "123 Main St, New York, NY",
    gstNo: "GST123456789",
    panNo: "ABCDE1234F",
    nameAsPerBank: "John Doe",
    bankName: "ABC Bank",
    bankBranch: "Main Branch",
    ifscCode: "ABCD1234567",
    bankAccountNo: "1234567890",
    bankName2: "XYZ Bank",
    bankBranch2: "Downtown Branch",
    ifscCode2: "XYZE9876543",
    bankAccountNo2: "0987654321",
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
        Supplier Details - {data.companyName}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
          <h3 className="text-lg font-bold mb-4 text-center text-green-500">
            Basic Information
          </h3>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">
              Company Name:
            </p>
            <p className="px-2">{data.companyName}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">Location:</p>
            <p className="px-2">{data.location}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">
              Billing Address:
            </p>
            <p className="px-2">{data.billingAddress}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">GST No.:</p>
            <p className="px-2">{data.gstNo}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">PAN No.:</p>
            <p className="px-2">{data.panNo}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">
              Name As Per Bank:
            </p>
            <p className="px-2">{data.nameAsPerBank}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">Bank Name:</p>
            <p className="px-2">{data.bankName}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">
              Bank Branch:
            </p>
            <p className="px-2">{data.bankBranch}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">IFSC Code:</p>
            <p className="px-2">{data.ifscCode}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">
              Bank Account No.:
            </p>
            <p className="px-2">{data.bankAccountNo}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">
              Bank Name 2:
            </p>
            <p className="px-2">{data.bankName2}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">
              Bank Branch 2:
            </p>
            <p className="px-2">{data.bankBranch2}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">
              IFSC Code 2:
            </p>
            <p className="px-2">{data.ifscCode2}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">
              Bank Account No. 2:
            </p>
            <p className="px-2">{data.bankAccountNo2}</p>
          </div>
        </div>

        {/* Right column */}
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col items-center">
          <h3 className="text-lg font-bold mb-4 text-center text-green-500">
            QR Code of {data.companyName}
          </h3>
          <QRCode
            value={JSON.stringify(data)}
            size={200}
            // fgColor="#007f00"
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

export default SupplierDetails;
