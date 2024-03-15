import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const EmployeeLogin = () => {
  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    let validationsError = {};
    if (formData.mobile.length != 10) {
      isvalid = false;
      validationsError["mobile"] = "Please enter a valid Mobile Number";
    }
    if (!formData.password || formData.password.length === null) {
      isvalid = false;
      validationsError["password"] = "Wrong Password.";
    }

    axios
      .get("http://localhost:3000/employeeRegister")
      .then((result) => {
        result.data.map((user) => {
          if (user.mobile === formData.mobile) {
            if (user.password === formData.password) {
              alert("Logged In Successfully");
              navigate("/Register");
            } else {
              isvalid = false;
              validationsError.password = "Wrong Password";
            }
          } else if (formData.mobile !== "") {
            isvalid = false;
            validationsError.mobile = "Wrong Mobile Number";
          }
        });
        setErrors(validationsError);
        setValid(isvalid);
      })
      .catch((err) => {
        alert(err.response.data.msg);
      });
  };

  return (
    <div className="container mx-auto flex justify-center">
      <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="py-4 px-6">
          <h2 className="text-2xl font-bold mb-4 text-center text-green-500">
            Employee Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="text-red-500 text-sm text-center">
              {valid ? (
                <></>
              ) : (
                <span>
                  {errors.mobile} {errors.password}
                </span>
              )}
            </div>

            <div>
              <label htmlFor="mobile" className="block mb-1 text-green-500">
                Mobile Number:
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                onChange={(event) =>
                  setFormData({ ...formData, mobile: event.target.value })
                }
                required
                minLength={10}
                maxLength={10}
                pattern="[0-9]+"
                title="Mobile number must be 10 digits"
                className="w-full px-4 py-2 border rounded-md text-green-500"
                placeholder="Enter your mobile number"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 text-green-500">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={(event) =>
                  setFormData({ ...formData, password: event.target.value })
                }
                required
                className="w-full px-4 py-2 border rounded-md text-green-500"
              />
            </div>
            <div className="flex justify-center pt-6">
              <div className="w-full max-w-xs">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md w-full"
                >
                  Employee Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeLogin;
