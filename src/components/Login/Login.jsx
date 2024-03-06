import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user1, setUser1] = useState({
    username: "",
    password: "1234",
    role: "buyer",
  });

  const [user2, setUser2] = useState({
    username: "",
    password: "1234",
    role: "supplier",
  });

  const [user3, setUser3] = useState({
    username: "",
    password: "1234",
    role: "transporter",
  });

  const handleOptionChange = (event, setUser) => {
    setUser((prevState) => ({
      ...prevState,
      role: event.target.value,
    }));
  };

  const handleSubmit = (event, user) => {
    event.preventDefault();
    window.alert(`Logged in as ${user.role} with username ${user.username}`);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="max-w-md mx-auto my-8 p-6 bg-gray-100 rounded-lg shadow-md">
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
              checked={user1.role === "buyer"}
              onChange={(e) => handleOptionChange(e, setUser1)}
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
              checked={user2.role === "supplier"}
              onChange={(e) => handleOptionChange(e, setUser2)}
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
              checked={user3.role === "transporter"}
              onChange={(e) => handleOptionChange(e, setUser3)}
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
            value={user1.username}
            onChange={(e) =>
              setUser1((prevState) => ({
                ...prevState,
                username: e.target.value,
              }))
            }
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
            value={user1.password}
            onChange={(e) =>
              setUser1((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }
            placeholder="Enter password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg mb-4 hover:bg-green-600"
          onClick={(e) => handleSubmit(e, user1)}
        >
          Login
        </button>
        <div className="flex">
          <Link to="#">
            <button
              type="button"
              className="flex-1 bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 mr-2"
            >
              User Login
            </button>
          </Link>
          <Link
            to="/EmployeLogin"
            className="flex-1 bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 ml-2"
          >
            Employee Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
