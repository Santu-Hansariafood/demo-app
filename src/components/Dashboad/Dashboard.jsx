import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-green-800 text-white h-screen w-64">
        <div className="p-4">
          <h2 className="text-2xl font-bold">Sidebar</h2>
          <ul className="mt-4">
            <li className="py-2">
              <Link to="/register" className="block hover:text-green-400">Register</Link>
            </li>
            <li className="py-2">
              <Link to="/login" className="block hover:text-green-400">Login</Link>
            </li>
            <li className="py-2">
              <Link to="/services" className="block hover:text-green-400">Services</Link>
            </li>
            <li className="py-2">
              <Link to="/contact" className="block hover:text-green-400">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main section */}
      <div className="flex-1 bg-gray-200">
        <div className="p-4">
          <h2 className="text-2xl font-bold hover:text-green-400">Welcome to Hansaria Food Private Limited!</h2>
          {/* Add more content here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
