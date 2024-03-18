import React, { useState } from "react";
import axios from "axios";
import Dashboard from '../Dashboad/Dashboard'

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const fixedPassword = "Hans@123#";

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://hansaria-server.onrender.com/register?mobile=${username}`
      );

      console.log("API Response:", response.data);

      const userData = response.data;

      if (userData.length === 0) {
        setError("User not found. Please register first.");
        return;
      }

      console.log("Fixed Password:", fixedPassword);
      console.log("User Password:", userData[0].password);

      if (userData[0].password !== fixedPassword) {
        setError("Incorrect username or password. Please try again.");
        return;
      }

      setLoggedIn(true);
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Error logging in. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {!loggedIn ? (
        <form className="max-w-md w-1/2 h-600 mx-auto my-8 p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">User Login</h2>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2">
              Mobile Number:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter mobile number"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg mb-4 hover:bg-green-600"
            onClick={handleSubmit}
          >
            Login
          </button>
          <div className="flex justify-between">
            <button
              className="text-green-500 hover:underline focus:outline-none"
              onClick={() => console.log("Forgot Password clicked")}
            >
              Forgot Password?
            </button>
            <button
              className="text-green-500 hover:underline focus:outline-none"
              onClick={() => console.log("Register clicked")}
            >
              Register
            </button>
          </div>
        </form>
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

export default Login;
