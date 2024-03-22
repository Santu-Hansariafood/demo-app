import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import QRCode from "react-qr-code";
import { RiseLoader } from "react-spinners";

const SupplierDetails = () => {
  const { id } = useParams();
  const [supplier, setSupplier] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSupplier = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/suppliers/${id}`
        );
        setSupplier(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching supplier data:", error);
        setLoading(false);
      }
    };

    fetchSupplier();
    console.log(supplier);
  }, [id]);

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="container mx-auto mt-8 flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <RiseLoader
            color={"#36D7B7"}
            height={100}
            width={100}
            radius={10}
            margin={10}
          />
          <p className="text-green-500 font-semibold mt-4">Loading...</p>
        </div>
      </div>
    );
  }


  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-500">
        Supplier Details - {supplier.supplierName}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
          <h3 className="text-lg font-bold mb-4 text-center text-green-500">
            Full Information
          </h3>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">
              Supplier Name:
            </p>
            <p className="px-2">{supplier.supplierName}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">
              Supplier Email:
            </p>
            <p className="px-2">{supplier.supplierEmail}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">
              Supplier Mobile:
            </p>
            <p className="px-2">{supplier.supplierMobile}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">
              Supplier Location:
            </p>
            <p className="px-2">{supplier.supplierLocation}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">
              Supplier GST Number:
            </p>
            <p className="px-2">{supplier.supplierGSTno}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">
              Supplier Shiping Address:
            </p>
            <p className="px-2">{supplier.supplierShipingAddress}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">
              Supplier State:
            </p>
            <p className="px-2">{supplier.supplierState}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">
              Supplier City:
            </p>
            <p className="px-2">{supplier.supplierCity}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">
              Supplier Seals:
            </p>
            <p className="px-2">{supplier.supplierSeals}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">
              Other Company:
            </p>
            <p className="px-2">{supplier.otherCompany}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">
              Supplier Bankname:
            </p>
            <p className="px-2">{supplier.supplierBankname}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">
              Supplier Branchname:
            </p>
            <p className="px-2">{supplier.supplierBranchname}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">
              Supplier IFSC:
            </p>
            <p className="px-2">{supplier.supplierIfsc}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">
              Supplier Account Number:
            </p>
            <p className="px-2">{supplier.supplierAccountnumber}</p>
          </div>
          <div className="mb-4 flex">
            <p className="text-green-500 text-sm font-bold mb-2">
              supplierNameAsPerBank:
            </p>
            <p className="px-2">{supplier.supplierNameAsPerBank}</p>
          </div>
        </div>

        {/* Right column */}
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col items-center">
          <h3 className="text-lg font-bold mb-4 text-center text-green-500">
            QR Code of {supplier.companyName}
          </h3>
          <QRCode
            value={JSON.stringify(supplier)}
            size={200}
            className="self-center"
          />
        </div>
      </div>

      {/* Print button */}
      <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handlePrint}
          >
            Print
          </button>
    </div>
  );
};

export default SupplierDetails;
