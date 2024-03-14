import React, { useState, useEffect } from "react";
import { FaRegEye, FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";

const RegisterList = () => {
  const [farmers, setFarmers] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://hansaria-server.onrender.com/register");
        setFarmers(response.data);
        setSuccessMessage("Live");
      } catch (error) {
        setErrorMessage("Error fetching data.");
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-600">
        Register Farmer List
      </h2>
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <div className="overflow-x-auto">
        <div className="max-w-full overflow-hidden overflow-x-scroll">
          <table className="table-auto w-full border-collapse border border-green-800">
            <thead>
              <tr className="bg-green-500">
                <th className="px-4 py-2 text-white">Full Name</th>
                <th className="px-4 py-2 text-white">Mobile Number</th>
                <th className="px-4 py-2 text-white">Adhar Number</th>
                <th className="px-4 py-2 text-white">Village</th>
                <th className="px-4 py-2 text-white">District</th>
                <th className="px-4 py-2 text-white">PIN CODE</th>
                <th className="px-4 py-2 text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {farmers.map((farmer, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-green-100" : ""}>
                  <td className="border px-4 py-2">{farmer.firstName} {farmer.lastName}</td>
                  <td className="border px-4 py-2">{farmer.mobile}</td>
                  <td className="border px-4 py-2">{farmer.adharNumber}</td>
                  <td className="border px-4 py-2">{farmer.village}</td>
                  <td className="border px-4 py-2">{farmer.district}</td>
                  <td className="border px-4 py-2">{farmer.pinCode}</td>
                  <td className="border px-4 py-2 flex space-x-2">
                    <Link to={{ pathname: `/farmer/${farmer._id}`, state: { farmer } }}>
                      <FaRegEye style={{ cursor: "pointer", color:"green" }} />
                    </Link>
                    <Link to="#">
                      <FaEdit style={{ cursor: "pointer", color:"blue" }} />
                    </Link>
                    <Link to="#">
                      <MdDeleteForever style={{ cursor: "pointer",color:"red" }} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RegisterList;
