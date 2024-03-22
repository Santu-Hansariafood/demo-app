// import React, { useState } from "react";
// import axios from "axios";

// const LoginForm = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     phone: "",
//     password: "",
//     role: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.phone.trim() === "" || formData.password.trim() === "") {
//       alert("Please enter both phone and password.");
//       return;
//     }
//     try {
//       const response = await axios.get(formData.role, {
//         phone: formData.phone,
//         password: formData.password,
//       });
//       if (response.status === 200) {
//         onSubmit(formData.role);
//       } else {
//         alert("Invalid phone or password.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while logging in.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
//       <select
//         name="role"
//         value={formData.role}
//         onChange={handleInputChange}
//         className="form-select mt-4 block w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
//       >
//         <option value="">Select Role</option>
//         <option value="http://localhost:3000/admin">Admin</option>
//         <option value="http://localhost:3000/employee_login">Employee</option>
//         <option value="http://localhost:3000/buyer_login">Buyer</option>
//         <option value="http://localhost:3000/farmer_login">Farmer</option>
//       </select>
//       <input
//         type="text"
//         name="phone"
//         value={formData.phone}
//         onChange={handleInputChange}
//         placeholder={`${formData.role} phone`}
//         className="form-input mt-4 block w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
//       />
//       <input
//         type="password"
//         name="password"
//         value={formData.password}
//         onChange={handleInputChange}
//         placeholder={`${formData.role} Password`}
//         className="form-input mt-4 block w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
//       />
//       <button
//         type="submit"
//         className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
//       >
//         Login
//       </button>
//     </form>
//   );
// };

// export default LoginForm;
import React, { useState } from "react";
import axios from "axios";

const LoginForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
    role: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.phone.trim() === "" || formData.password.trim() === "" || formData.role.trim() === "") {
      alert("Please enter both phone, password, and select a role.");
      return;
    }
    try {
      if (formData.role === "http://localhost:3000/admin") {
        const response = await axios.get(formData.role, {
          phone: formData.phone,
          password: formData.password,
        });
        if (response.status === 200) {
          onSubmit(formData.role);
        } else {
          alert("Invalid phone or password.");
        }
      } else {
        alert("Please select the Admin role.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while logging in.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <select
        name="role"
        value={formData.role}
        onChange={handleInputChange}
        className="form-select mt-4 block w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
      >
        <option value="">Select Role</option>
        <option value="http://localhost:3000/admin">Admin</option>
        <option value="http://localhost:3000/employee_login">Employee</option>
        <option value="http://localhost:3000/buyer_login">Buyer</option>
        <option value="http://localhost:3000/farmer_login">Farmer</option>
      </select>
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        placeholder={`${formData.role} phone`}
        className="form-input mt-4 block w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder={`${formData.role} Password`}
        className="form-input mt-4 block w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
