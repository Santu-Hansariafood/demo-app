
import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const RegisterPhoto = () => {

  const [aadhaarCard, setAadhaarCard] = useState(null);
  const [panCard, setPanCard] = useState(null);
  const [gstCertificate, setGstCertificate] = useState(null);
  const [bankAccount, setBankAccount] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  

  const handleFileChange = (e, setter) => {
    const file = e.target.files[0];
    setter(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("aadhaarCard", aadhaarCard);
    formData.append("panCard", panCard);
    formData.append("gstCertificate", gstCertificate);
    formData.append("bankAccount", bankAccount);
    formData.append("profilePhoto", profilePhoto);
    try {
      await axios.post("https://hansaria-server.onrender.com/registerPhoto", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      console.log("Images uploaded successfully.");
      
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  return (
    <div className="container mx-auto flex justify-center">
      <div className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3 bg-white shadow-md rounded-lg overflow-hidden">
        <div className="py-4 px-6">
          <h2 className="text-2xl font-bold mb-4 text-center text-green-500">
            Register Photo Uploaded
          </h2>
          <form onSubmit={handleSubmit} action="/upload" method="post" encType="multipart/form-data">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* File upload inputs */}
              <div>
                <label htmlFor="aadhaarCard" className="block mb-1 text-green-500">
                  Aadhaar Card:
                </label>
                <input
                  type="file"
                  id="aadhaarCard"
                  name="aadhaarCard"
                  capture="camera"
                  accept=".jpg,.jpeg,.png"
                  onChange={(e) => handleFileChange(e, setAadhaarCard)}
                />
                {/* <button type="submit">Upload</button> */}
                {aadhaarCard && (
                  <img
                    src={URL.createObjectURL(aadhaarCard)}
                    alt="Aadhaar Card Preview"
                    className="mt-2"
                  />
                )}
              </div>
              {/* PAN Card */}
              <div>
                <label htmlFor="panCard" className="block mb-1 text-green-500">
                  PAN Card:
                </label>
                <input
                  type="file"
                  id="panCard"
                  name="panCard"
                  onChange={(e) => handleFileChange(e, setPanCard)}
                />
                {panCard && (
                  <img
                    src={URL.createObjectURL(panCard)}
                    alt="PAN Card Preview"
                    className="mt-2"
                  />
                )}
              </div>
              {/* GST Certificate */}
              <div>
                <label htmlFor="gstCertificate" className="block mb-1 text-green-500">
                  GST Certificate:
                </label>
                <input
                  type="file"
                  id="gstCertificate"
                  name="gstCertificate"
                  onChange={(e) => handleFileChange(e, setGstCertificate)}
                />
                {gstCertificate && (
                  <img
                    src={URL.createObjectURL(gstCertificate)}
                    alt="GST Certificate Preview"
                    className="mt-2"
                  />
                )}
              </div>
              {/* Bank Account */}
              <div>
                <label htmlFor="bankAccount" className="block mb-1 text-green-500">
                  Bank Account:
                </label>
                <input
                  type="file"
                  id="bankAccount"
                  name="bankAccount"
                  onChange={(e) => handleFileChange(e, setBankAccount)}
                />
                {bankAccount && (
                  <img
                    src={URL.createObjectURL(bankAccount)}
                    alt="Bank Account Preview"
                    className="mt-2"
                  />
                )}
              </div>
              {/* Profile Photo */}
              <div>
                <label htmlFor="profilePhoto" className="block mb-1 text-green-500">
                  Profile Photo:
                </label>
                <input
                  type="file"
                  id="profilePhoto"
                  name="profilePhoto"
                  capture="camera"
                  onChange={(e) => handleFileChange(e, setProfilePhoto)}
                />
                {profilePhoto && (
                  <img
                    src={URL.createObjectURL(profilePhoto)}
                    alt="Profile Photo Preview"
                    className="mt-2"
                  />
                )}
              </div>
            </div>
            {/* Submit button */}
            <div className="flex justify-center pt-6">
              <div className="w-full max-w-xs">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md w-full"
                >
                  Upload Photo
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPhoto;
