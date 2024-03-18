import React, { useState } from "react";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if username and password match the expected values
    if (username === "admin" && password === "1234") {
      // Handle successful login
      alert("Login successful");
    } else {
      // Handle login failure
      alert("Login failed. Invalid username or password.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-1/2 max-w-md mx-auto my-8 p-6 bg-gray-100 rounded-lg shadow-md"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-green-500">
          Admin Login
        </h2>
        <div className="mb-6">
          <label htmlFor="username" className="block mb-2">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>
        <div className="mb-6">
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
          className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg mb-4 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Login
        </button>
        {/* You can uncomment and customize the following buttons if needed */}
        {/* <div className="flex justify-between">
      <button type="button" className="w-1/2 bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 mr-2">User Login</button>
      <button type="button" className="w-1/2 bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 ml-2">Employee Login</button>
    </div> */}
      </form>
    </div>
  );
};

export default AdminLogin;
