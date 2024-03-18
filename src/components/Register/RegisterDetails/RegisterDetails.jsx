import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { RiseLoader } from "react-spinners";

const RegisterDetails = () => {
  const { id } = useParams();
  // const history = useHistory();
  const [register, setRegister] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRegister = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/register/${id}`
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

              <p className="text-green-500 text-normal">
                Email: {register.email}
              </p>
              <p className="text-green-500 text-normal">
                Phone Number: {register.mobile}
              </p>
              <p className="text-green-500 text-normal">
                Adhar Number: {register.adharNumber}
              </p>
              <p className="text-green-500 text-normal">
                PAN Card Number: {register.panCardNumber}
              </p>
              <p className="text-green-500 text-normal">
                GST Number: {register.gstNumber}
              </p>
              <p className="text-green-500 text-normal">
                Address: {register.address}
              </p>
              <p className="text-green-500 text-normal">
                State: {register.state}
              </p>
              <p className="text-green-500 text-normal">
                District: {register.district}
              </p>
              <p className="text-green-500 text-normal">
                Village: {register.village}
              </p>
              <p className="text-green-500 text-normal">
                Pin Code: {register.pinCode}
              </p>
              <p className="text-green-500 text-normal">
                Role: {register.role}
              </p>
              <p className="text-green-500 text-normal">
                Farmer Deals: {register.farmerDeals}
              </p>
              <p className="text-green-500 text-normal">
                Account: {register.account}
              </p>
              <p className="text-green-500 text-normal">
                Account Name: {register.acName}
              </p>
              <p className="text-green-500 text-normal">
                IFSC: {register.ifsc}
              </p>
              <p className="text-green-500 text-normal">
                Branch Name: {register.branchName}
              </p>
              <p className="text-green-500 text-normal">
                Bank Name: {register.bankName}
              </p>
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
              {register.adharCard && (
                <div>
                  <h3>Adhar Card:</h3>
                  <img
                    className="mt-2"
                    src={`data:${register.adharCard.contentType};base64,${register.adharCard.data}`}
                    alt="Adhar Card"
                    onError={(e) =>
                      console.error("Adhar Card Image loading error:", e)
                    }
                  />
                </div>
              )}


{register && (
  <>
    {register.adharCard && (
      <div>
        <h3>Adhar Card:</h3>
        <img
          className="mt-2"
          src={register.adharCardUrl || "http://via.placeholder.com/640x360"} // Replace with default image path or URL if needed
          alt="Adhar Card"
          onError={(e) => console.error("Adhar Card Image loading error:", e)}
        />
      </div>
    )}
  </>
)}
       
       
       {register && (
  <>
    {register.adharCard && (
      <div>
        <h3>Adhar Card:</h3>
        <img
          className="mt-2"
          src={register.adharCardUrl || register.adharCard?.data} // Check for URL or Base64 data based on your approach
          alt="Adhar Card"
          onError={(e) => console.error("Adhar Card Image loading error:", e)}
        />
      </div>
    )}
    {/* Similar logic for PAN Card, Passbook, GST Card, and Photo */}
  </>
)}       {register.panCard && (
                <div>
                  <h3>PAN Card:</h3>
                  <img
                    className="mt-2"
                    src={`data:${register.panCard.contentType};base64,${register.panCard.data}`}
                    alt="PAN Card"
                    onError={(e) =>
                      console.error("PAN Card Image loading error:", e)
                    }
                  />
                </div>
              )}
              {register.passCard && (
                <div>
                  <h3>Passbook / Cancel Check:</h3>
                  <img
                    className="mt-2"
                    src={`data:${register.passCard.contentType};base64,${register.passCard.data}`}
                    alt="Pass Book"
                    onError={(e) =>
                      console.error("Pass book Image loading error:", e)
                    }
                  />
                </div>
              )}
              {register.gstCard && (
                <div>
                  <h3>GST Card:</h3>
                  <img
                    className="mt-2"
                    src={`data:${register.gstCard.contentType};base64,${register.gstCard.data}`}
                    alt="GST Card"
                    onError={(e) =>
                      console.error("GST Card Image loading error:", e)
                    }
                  />
                </div>
              )}
              {register.farmarPhoto && (
                <div>
                  <h3>Photo:</h3>
                  <img
                    className="mt-2"
                    src={`data:${register.farmarPhoto.contentType};base64,${register.farmarPhoto.data}`}
                    alt="Profile Photo"
                    onError={(e) =>
                      console.error("Profile Photo Image loading error:", e)
                    }
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterDetails;