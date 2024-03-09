import React from "react";
import { Link } from "react-router-dom";
import dashboardImage from "../../assets/hansariafood.png";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="bg-green-800 text-white h-screen w-64 ">
        <div className="p-4">
          <h2 className="text-2xl font-bold">Sidebar</h2>
          <ul className="mt-4">
            <li className="py-2">
              <Link to="/register" className="block hover:text-green-400">
                Fermer Register
              </Link>
            </li>
            <li className="py-2">
              <Link to="/login" className="block hover:text-green-400">
                Login
              </Link>
            </li>
            <li className="py-2">
              <Link to="/EmployeeList" className="block hover:text-green-400">
                EmployeeList
              </Link>
            </li>
            <li className="py-2">
              <Link to="/EmployeeLogin" className="block hover:text-green-400">
                EmployeeLogin
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/EmployeeRegister"
                className="block hover:text-green-400"
              >
                EmployeeRegister
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
