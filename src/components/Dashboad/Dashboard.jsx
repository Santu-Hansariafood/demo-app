import React from "react";
import { Link } from "react-router-dom";
import dashboardImage from "../../assets/hansariafood.png";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="bg-green-800 text-white lg:h-screen lg:w-64">
        <div className="p-4">
          <h2 className="text-2xl font-bold">Admin</h2>
          <ul className="mt-4">
            <li className="py-2">
              <Link to="/EmployeeLogin" className="block hover:text-green-400">
                Employee Login
              </Link>
            </li>
            <li className="py-2">
              <Link to="/EmployeeList" className="block hover:text-green-400">
                Employee List
              </Link>
            </li>
            <li className="py-2">
              <Link to="/register" className="block hover:text-green-400">
                Farmer Register
              </Link>
            </li>
            <li className="py-2">
              <Link to="/RegisterList" className="block hover:text-green-400">
                Farmer List
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/RegisterPhoto"
                className="block hover:text-green-400"
              >
                Farmer Document
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/DisplayFermerDetails"
                className="block hover:text-green-400"
              >
                Display Details
              </Link>
            </li>
            <li className="py-2">
              <Link to="/login" className="block hover:text-green-400">
                Login
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/EmployeeRegister"
                className="block hover:text-green-400"
              >
                Employee Register
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/RegisterStore"
                className="block hover:text-green-400"
              >
                Register Store
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/StoreDetails"
                className="block hover:text-green-400"
              >
                Store Details
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/UpdateSore"
                className="block hover:text-green-400"
              >
                Update Store
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/DeleteStore"
                className="block hover:text-green-400"
              >
                Delete Store
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-1 bg-gray-200">
        <div className="p-4">
          <h2 className="text-2xl font-bold hover:text-green-400">
            Welcome to your dashboard!
          </h2>
          <img src={dashboardImage} alt="Dashboard" className="mt-4 w-full" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
