import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { RiseLoader } from "react-spinners";

const RegisterDetails = () => {
  const { id } = useParams();
  const [register, setRegister] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRegister = async () => {
      try {
        const response = await axios.get(
          `https://hansaria-server.onrender.com/register/${id}`
        );
        setRegister(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
        setLoading(false);
      }
    };

    fetchRegister();
  }, [id]);

  const handlePrint = () => {
    window.print();
  };

  // const handleBack = () => {
  //   history.goBack();
  // };

  if (error) {
    return <div>Error: {error}</div>;
  }

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
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center text-green-500 mb-10">
        Register Details
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow-md p-4 rounded-md">
          {register && (
            <>
              <h2 className="text-lg font-semibold text-center text-green-500 mb-5">
                {`${register.firstName
                  .charAt(0)
                  .toUpperCase()}${register.firstName
                  .slice(1)
                  .toLowerCase()} ${register.lastName
                  .split(" ")
                  .map(
                    (word) =>
                      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                  )
                  .join(" ")}`}
              </h2>

              <div class="max-w-2xl mx-auto p-4">
                <div class="overflow-hidden border border-gray-300 rounded-md">
                  <table class="w-full">
                    <tbody>
                      <tr class="bg-gray-100">
                        <td class="px-4 py-2 text-green-600 font-semibold">
                          Attribute
                        </td>
                        <td class="px-4 py-2 text-blue-600 font-semibold">
                          Value
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-2 text-green-500">Email:</td>
                        <td class="px-4 py-2 text-blue-500">
                          {register.email}
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-2 text-green-500">Phone Number:</td>
                        <td class="px-4 py-2 text-blue-500">
                          {register.mobile}
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-2 text-green-500 ">Adhar Number:</td>
                        <td class="px-4 py-2 text-blue-500">
                          {register.adharNumber}
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-2 text-green-500">
                          PAN Card Number:
                        </td>
                        <td class="px-4 py-2 text-blue-500">
                          {register.panCardNumber}
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-2 text-green-500">GST Number:</td>
                        <td class="px-4 py-2 text-blue-500">
                          {register.gstNumber}
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-2 text-green-500">Address:</td>
                        <td class="px-4 py-2 text-blue-500">
                          {register.address}
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-2 text-green-500">State:</td>
                        <td class="px-4 py-2 text-blue-500">
                          {register.state}
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-2 text-green-500">District:</td>
                        <td class="px-4 py-2 text-blue-500">
                          {register.district}
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-2 text-green-500">Village:</td>
                        <td class="px-4 py-2 text-blue-500">
                          {register.village}
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-2 text-green-500">Pin Code:</td>
                        <td class="px-4 py-2 text-blue-500">
                          {register.pinCode}
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-2 text-green-500">Role:</td>
                        <td class="px-4 py-2 text-blue-500">{register.role}</td>
                      </tr>
                      <tr>
                        <td class="px-4 py-2 text-green-500">Farmer Deals:</td>
                        <td class="px-4 py-2 text-blue-500">
                          {register.farmerDeals}
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-2 text-green-500">Account:</td>
                        <td class="px-4 py-2 text-blue-500">
                          {register.account}
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-2 text-green-500">Account Name:</td>
                        <td class="px-4 py-2 text-blue-500">
                          {register.acName}
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-2 text-green-500">IFSC:</td>
                        <td class="px-4 py-2 text-blue-500">{register.ifsc}</td>
                      </tr>
                      <tr>
                        <td class="px-4 py-2 text-green-500">Branch Name:</td>
                        <td class="px-4 py-2 text-blue-500">
                          {register.branchName}
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-2 text-green-500">Bank Name:</td>
                        <td class="px-4 py-2 text-blue-500">
                          {register.bankName}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
          <div className="mt-4 flex justify-between">
            {/* <button
              onClick={handleBack}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Back
            </button> */}
            <button
              onClick={handlePrint}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Print
            </button>
          </div>
        </div>

        {/* Right Column for Images */}
        <div className="bg-white shadow-md p-4 rounded-md">
          {register && (
            <>
              {register && (
                <>
                  {register.adharCard && (
                    <div>
                      <h3>Adhar Card:</h3>
                      <img
                        className="mt-2"
                        src={
                          register.adharCardurl ||
                          "http://via.placeholder.com/640x360"
                        }
                        alt="Adhar Card"
                        onError={(e) =>
                          console.error("Adhar Card Image loading error:", e)
                        }
                      />
                    </div>
                  )}
                </>
              )}
              {register && (
                <>
                  {register.adharCard && (
                    <div>
                      <h3>PAN Card:</h3>
                      <img
                        className="mt-2"
                        src={
                          register.adharCardurl ||
                          "http://via.placeholder.com/640x360"
                        }
                        alt="Adhar Card"
                        onError={(e) =>
                          console.error("Adhar Card Image loading error:", e)
                        }
                      />
                    </div>
                  )}
                </>
              )}
              {register && (
                <>
                  {register.adharCard && (
                    <div>
                      <h3>GST Card:</h3>
                      <img
                        className="mt-2"
                        src={
                          register.adharCardurl ||
                          "http://via.placeholder.com/640x360"
                        }
                        alt="Adhar Card"
                        onError={(e) =>
                          console.error("Adhar Card Image loading error:", e)
                        }
                      />
                    </div>
                  )}
                  {/* Similar logic for PAN Card, Passbook, GST Card, and Photo */}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterDetails;
