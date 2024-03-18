import React, { useState } from "react";
import axios from "axios";

const EmployeeRegister = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "email") {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail|outlook|hansariafood)\.com$/;
      if (!emailPattern.test(value)) {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }
    }

    if (name === "mobile") {
      const mobilePattern = /^[6-9]\d{9}$/;
      if (!mobilePattern.test(value)) {
        setMobileError("Mobile number should start with 6 and be 10 digits");
      } else {
        setMobileError("");
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (formData.password !== formData.confirmPassword) {
        setPasswordError("Passwords do not match");
        return;
      }

      const response = await axios.post(
        "https://hansaria-server.onrender.com/employeeRegister",
        formData
      );
      // console.log("Form submitted successfully:", response.data);
      window.alert("Registration successful");
      setFormData({
        firstname: "",
        lastname: "",
        mobile: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setEmailError("");
      setMobileError("");
      setPasswordError("");
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.response && error.response.data.message) {
        window.alert(error.response.data.message);
      } else {
        window.alert("An error occurred while submitting the form");
      }
    }
  };

  return (
    <div className="container mx-auto flex justify-center">
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 bg-white shadow-md rounded-lg overflow-hidden">
        <div className="py-4 px-6">
          <h2 className="text-2xl font-bold mb-4 text-center text-green-500">
            Employee Register
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstname"
                  className="block mb-1 text-green-500"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  autoComplete="off"
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
              </div>
              <div>
                <label htmlFor="lastname" className="block mb-1 text-green-500">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  autoComplete="off"
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 text-green-500">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  autoComplete="off"
                  className={`w-full px-4 py-2 border rounded-md ${
                    emailError ? "border-red-500" : "text-green-500"
                  }`}
                />
                {emailError && (
                  <p className="text-red-500 text-sm">{emailError}</p>
                )}
              </div>
              <div>
                <label htmlFor="mobile" className="block mb-1 text-green-500 ">
                  Mobile
                </label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  minLength={10}
                  maxLength={10}
                  value={formData.mobile}
                  onChange={handleInputChange}
                  autoComplete="off"
                  className={`w-full px-4 py-2 border rounded-md ${
                    mobileError ? "border-red-500" : "text-green-500"
                  }`}
                />
                {mobileError && (
                  <p className="text-red-500 text-sm">{mobileError}</p>
                )}
              </div>
              <div>
                <label htmlFor="password" className="block mb-1 text-green-500">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  minLength={5}
                  maxLength={20}
                  value={formData.password}
                  onChange={handleInputChange}
                  autoComplete="off"
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-1 text-green-500"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  autoComplete="off"
                  className="w-full px-4 py-2 border rounded-md text-green-500"
                />
                {passwordError && (
                  <p className="text-red-500 text-sm">{passwordError}</p>
                )}
              </div>
            </div>
            <div className="flex justify-center pt-10 pb-10">
              <div className="w-full max-w-xs">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md w-full"
                >
                  Employee Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeRegister;
