import React, { useState, useEffect } from "react";
import axios from "axios";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://hansaria-server.onrender.com/employeeRegister"
        );
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
        Hansaria Employee List
      </h2>
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-green-800">
          <thead>
            <tr className="bg-green-500">
              <th className="px-4 py-2 text-white">Full Name</th>
              <th className="px-4 py-2 text-white">Mobile Number</th>
              <th className="px-4 py-2 text-white">Email ID</th>
              <th className="px-4 py-2 text-white">Password</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-green-100" : ""}>
                <td className="border px-4 py-2">
                  {capitalizeFirstLetter(employee.firstname)}{" "}
                  {capitalizeFirstLetter(employee.lastname)}
                </td>
                <td className="border px-4 py-2">{employee.mobile}</td>
                <td className="border px-4 py-2">
                  {employee.email.toLowerCase()}
                </td>
                <td className="border px-4 py-2">{employee.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
