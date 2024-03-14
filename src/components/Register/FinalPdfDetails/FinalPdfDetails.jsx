import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import QRCode from "react-qr-code";
import companyLogo from "../../../assets/hansariafood.png";

const FinalPdfDetails = () => {
  const { id } = useParams();
  const [farmer, setFarmer] = useState(null);

  useEffect(() => {
    const fetchFarmer = async () => {
      try {
        const response = await axios.get(
          `https://hansaria-server.onrender.com/register/${id}`
        );
        setFarmer(response.data);
      } catch (error) {
        console.error("Error fetching farmer data:", error);
      }
    };

    fetchFarmer();
  }, [id]);

  const handlePrint = () => {
    window.print();
  };

  const handleBack = () => {
    history.goBack();
  };
  if (!farmer) {
    return <div>Loading...</div>;
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
  return (
    <div className="container mx-auto mt-8 relative">
      {/* <img
        src={companyLogo}
        alt="Company Logo"
        className="absolute top-0 left-0 opacity-25 w-full h-full"
      /> */}

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-500">
          Farmer Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="mb-2">
            <p className="font-semibold text-green-500">Full Name:</p>
            <p>
              {capitalizeFirstLetter(farmer.firstName)}{" "}
              {capitalizeFirstLetter(farmer.lastName)}
            </p>
          </div>
          <div className="mb-2">
            <p className="font-semibold text-green-500">Mobile Number:</p>
            <p>{farmer.mobile}</p>
          </div>
          <div className="mb-2">
            <p className="font-semibold text-green-500">Adhar Number:</p>
            <p>{farmer.adharNumber}</p>
          </div>
          <div className="mb-2">
            <p className="font-semibold text-green-500">Pan Card:</p>
            <p>{farmer.panCard}</p>
          </div>
          <div className="mb-2">
            <p className="font-semibold text-green-500">Account Holder Name:</p>
            <p>{farmer.acName}</p>
          </div>
          <div className="mb-2">
            <p className="font-semibold text-green-500">Bank Account Number:</p>
            <p>{farmer.account}</p>
          </div>
          <div className="mb-2">
            <p className="font-semibold text-green-500">IFSC CODE:</p>
            <p>{farmer.ifsc}</p>
          </div>
          <div className="mb-2">
            <p className="font-semibold text-green-500">Branch Name:</p>
            <p>{farmer.BranchName}</p>
          </div>
          <div className="mb-2">
            <p className="font-semibold text-green-500">Bank Name:</p>
            <p>{farmer.bankName}</p>
          </div>
          <div className="mb-2">
            <p className="font-semibold text-green-500">Address:</p>
            <p>
              {farmer.village} {farmer.district} {farmer.pinCode}
            </p>
          </div>
          <div className="mb-2">
            <p className="font-semibold text-green-500">Role:</p>
            <p>{farmer.role}</p>
          </div>
          <div className="mb-2">
            <p className="font-semibold text-green-500">Farmer Deals in:</p>
            <p>{farmer.farmerDeals}</p>
          </div>
          <div className="mb-2"></div>

          {/* Column 2: QR Code */}
          <div className="mb-2 flex justify-center items-center">
            <QRCode value={JSON.stringify(farmer)} />
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
            onClick={() => window.history.back()}
          >
            Back
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handlePrint}
          >
            Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalPdfDetails;
