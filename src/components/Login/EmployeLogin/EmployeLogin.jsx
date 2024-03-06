import React, { useState } from "react";

const Login = () => {
  const [selectedOption, setSelectedOption] = useState("buyer");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event, user) => {
    event.preventDefault();
    if (
      username === user.username &&
      password === user.password &&
      selectedOption === user.role
    ) {
      alert("Login successful");
    } else {
      alert("Invalid user");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="max-w-md mx-auto my-8 p-6 bg-gray-100 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-4">User Login</h2>
        <fieldset>
          <legend className="font-semibold mb-2">Login As:</legend>
          <div className="flex mb-4">
            <input
              type="radio"
              id="buyer"
              name="login"
              value="buyer"
              className="mr-2"
              checked={selectedOption === "buyer"}
              onChange={handleOptionChange}
            />
            <label htmlFor="buyer" className="mr-6">
              Buyer
            </label>
            <input
              type="radio"
              id="supplier"
              name="login"
              value="supplier"
              className="mr-2"
              checked={selectedOption === "supplier"}
              onChange={handleOptionChange}
            />
            <label htmlFor="supplier" className="mr-6">
              Supplier
            </label>
            <input
              type="radio"
              id="transporter"
              name="login"
              value="transporter"
              className="mr-2"
              checked={selectedOption === "transporter"}
              onChange={handleOptionChange}
            />
            <label htmlFor="transporter">Transporter</label>
          </div>
        </fieldset>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2">
            Username:{" "}
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
          onClick={(e) => handleSubmit(e, { username: "user1", password: "1234", role: "buyer" })}
        >
          Login
        </button>
        <div className="flex justify-between">
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 mr-2"
            onClick={(e) => handleSubmit(e, { username: "user2", password: "1234", role: "supplier" })}
          >
            Admin Login
          </button>
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 ml-2"
            onClick={(e) => handleSubmit(e, { username: "user3", password: "1234", role: "transporter" })}
          >
            Employee Login
          </button>
        </div>
        
      </form>
    </div>
  );
};

export default Login;
