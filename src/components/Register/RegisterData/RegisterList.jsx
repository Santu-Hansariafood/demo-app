import React, { useState, useEffect } from "react";
import axios from "axios";

const RegisterList = () => {
  const [employees, setEmployees] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/register");
        setEmployees(response.data);
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
        Employee List
      </h2>
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-green-800">
          <thead>
            <tr className="bg-green-500">
              <th className="px-4 py-2 text-white">First Name</th>
              <th className="px-4 py-2 text-white">Last Name</th>
              <th className="px-4 py-2 text-white">Mobile Number</th>
              <th className="px-4 py-2 text-white">Adhar Number</th>
              <th className="px-4 py-2 text-white">Village</th>
              <th className="px-4 py-2 text-white">District</th>
              <th className="px-4 py-2 text-white">PIN CODE</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-green-100" : ""}>
                <td className="border px-4 py-2">{employee.firstName}</td>
                <td className="border px-4 py-2">{employee.lastName}</td>
                <td className="border px-4 py-2">{employee.mobile}</td>
                <td className="border px-4 py-2">{employee.adharNumber}</td>
                <td className="border px-4 py-2">{employee.village}</td>
                <td className="border px-4 py-2">{employee.district}</td>
                <td className="border px-4 py-2">{employee.pinCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisterList;
