import React from "react";
import { Link } from "react-router-dom";
import dashboardImage from "../../assets/hansariafood.png";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="bg-green-800 text-white lg:h-screen lg:w-64">
        <div className="p-4">
          <h2 className="text-2xl font-bold">Sidebar</h2>
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
