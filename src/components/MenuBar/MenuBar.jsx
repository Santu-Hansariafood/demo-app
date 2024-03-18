import React, { useState } from "react";
import { Link } from "react-router-dom";

const MenuBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (section) => {
    if (dropdownOpen === section) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(section);
    }
  };

  return (
    <div className="bg-green-700 text-white lg:h-screen lg:w-64 h-full">
      <div className="p-4">
        <h2 className="text-2xl font-bold hover:text-yellow-200">Admin</h2>
        <ul className="mt-4">
          <li className="py-2">
            <div
              onClick={() => toggleDropdown("employee")}
              className="cursor-pointer font-bold hover:text-yellow-200"
            >
              Employee {dropdownOpen === "employee" ? "-" : "+"}
            </div>
            {dropdownOpen === "employee" && (
              <ul className="pl-4">
                <li>
                  <Link
                    to="/EmployeeLogin"
                    className="block hover:text-yellow-200"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/EmployeeList"
                    className="block hover:text-yellow-200"
                  >
                    List
                  </Link>
                </li>
                <li>
                  <Link
                    to="/EmployeeRegister"
                    className="block hover:text-yellow-200"
                  >
                    Register
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="py-2">
            <div
              onClick={() => toggleDropdown("farmer")}
              className="cursor-pointer font-bold hover:text-yellow-200"
            >
              Farmer {dropdownOpen === "farmer" ? "-" : "+"}
            </div>
            {dropdownOpen === "farmer" && (
              <ul className="pl-4">
                <li>
                  <Link to="/register" className="block hover:text-yellow-200">
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    to="/RegisterList"
                    className="block hover:text-yellow-200"
                  >
                    List
                  </Link>
                </li>
                <li>
                  <Link
                    to="/RegisterPhoto"
                    className="block hover:text-yellow-200"
                  >
                    Document
                  </Link>
                </li>
                <li>
                  <Link
                    to="/DisplayFermerDetails"
                    className="block hover:text-yellow-200"
                  >
                    Display Details
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="py-2">
            <div
              onClick={() => toggleDropdown("store")}
              className="cursor-pointer font-bold hover:text-yellow-200"
            >
              Store {dropdownOpen === "store" ? "-" : "+"}
            </div>
            {dropdownOpen === "store" && (
              <ul className="pl-4">
                <li>
                  <Link
                    to="/RegisterStore"
                    className="block hover:text-yellow-200"
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    to="/StoreDetails"
                    className="block hover:text-yellow-200"
                  >
                    Details
                  </Link>
                </li>
                {/* <li>
                  <Link
                    to="/UpdateSore"
                    className="block hover:text-yellow-200"
                  >
                    Update
                  </Link>
                </li> */}
                {/* <li>
                  <Link
                    to="/DeleteStore"
                    className="block hover:text-yellow-200"
                  >
                    Delete
                  </Link>
                </li> */}
              </ul>
            )}
          </li>
          <li className="py-2">
            <div
              onClick={() => toggleDropdown("admin")}
              className="cursor-pointer font-bold hover:text-yellow-200"
            >
              Admin {dropdownOpen === "admin" ? "-" : "+"}
            </div>
            {dropdownOpen === "admin" && (
              <ul className="pl-4">
                <li>
                  <Link
                    to="/AdminLogin"
                    className="block hover:text-yellow-200"
                  >
                    Admin Login
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
