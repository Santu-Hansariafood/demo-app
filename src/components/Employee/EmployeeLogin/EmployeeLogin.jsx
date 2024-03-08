// // // import React, { useState } from "react";
// // // import axios from "axios";

// // // const EmployeeLogin = () => {
// // //   const [formData, setFormData] = useState({
// // //     mobile: "",
// // //     password: ""
// // //   });
// // //   const [errorMessage, setErrorMessage] = useState("");

// // //   const handleInputChange = (event) => {
// // //     const { name, value } = event.target;
// // //     setFormData({
// // //       ...formData,
// // //       [name]: value
// // //     });
// // //   };

// // //   const handleSubmit = async (event) => { 
// // //     event.preventDefault();
// // //     try {
// // //       const response = await axios.post(
// // //         "http://localhost:3000/employeeLogin",
// // //         formData
// // //       );
// // //       console.log("Login successful:", response.data);

// // //     } catch (error) {
// // //       console.error("Error logging in:", error.response.data.message);
// // //       setErrorMessage("Invalid mobile number or password");
// // //     }
// // //   };

// // //   //if(mobile===mobile && password===password)
// // //   return (
// // //     <div className="container mx-auto flex justify-center">
// // //       <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
// // //         <div className="py-4 px-6">
// // //           <h2 className="text-2xl font-bold mb-4 text-center text-green-500">
// // //             Employee Login
// // //           </h2>
// // //           <form onSubmit={handleSubmit}>
// // //             <div className="grid grid-cols-1 gap-4">
// // //               <div>
// // //                 <label htmlFor="mobile" className="block mb-1 text-green-500">
// // //                   Mobile Number
// // //                 </label>
// // //                 <input
// // //                   type="text"
// // //                   id="mobile"
// // //                   name="mobile"
// // //                   value={formData.mobile}
// // //                   onChange={handleInputChange}
// // //                   autoComplete="off"
// // //                   className="w-full px-4 py-2 border rounded-md text-green-500"
// // //                 />
// // //               </div>
// // //               <div>
// // //                 <label htmlFor="password" className="block mb-1 text-green-500">
// // //                   Password
// // //                 </label>
// // //                 <input
// // //                   type="password"
// // //                   id="password"
// // //                   name="password"
// // //                   value={formData.password}
// // //                   onChange={handleInputChange}
// // //                   autoComplete="off"
// // //                   className="w-full px-4 py-2 border rounded-md text-green-500"
// // //                 />
// // //               </div>
// // //               <div className="text-red-500 text-sm text-center">{errorMessage}</div>
// // //             </div>
// // //             <div className="flex justify-center pt-6">
// // //               <div className="w-full max-w-xs">
// // //                 <button
// // //                   type="submit"
// // //                   className="bg-green-500 text-white px-4 py-2 rounded-md w-full"
// // //                 >
// // //                   Login
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </form>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default EmployeeLogin;


// // import axios from 'axios';
// // import React, { useState } from 'react';

// // const EmployeeLogin = () => {
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [errorMessage, setErrorMessage] = useState('');

// //     const handleSubmit = async (event) => { 
// //     event.preventDefault();
// //     try {
// //       const response = await axios.post(
// //         "http://localhost:3000/employeeLogin",
// //         formData
// //       );
// //       console.log("Login successful:", response.data);

// //     } catch (error) {
// //       console.error("Error logging in:", error.response.data.message);
// //       setErrorMessage("Invalid mobile number or password");
// //     }
// //   };
// //   const handleLogin = () => {
    
// //     // Replace these with your actual validation logic
// //     const validUsername =""
// //     const validPassword = "123456"

// //     if (validUsername && validPassword) {
// //       // Allow access or redirect to the data page
// //       console.log('Login successful!');
// //     } else {
// //       setErrorMessage('Invalid username or password');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Login</h1>
// //       <div>
// //         <label>Username:</label>
// //         <input
// //           type="text"
// //           value={username}
// //           onChange={(e) => setUsername(e.target.value)}
// //         />
// //       </div>
// //       <div>
// //         <label>Password:</label>
// //         <input
// //           type="password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //         />
// //       </div>
// //       <button onClick={handleLogin}>Login</button>
// //       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
// //     </div>
// //   );
// // };

// // // export default EmployeeLogin;

// import React, { useState } from 'react';
// import axios from 'axios';

// const EmployeeLogin = () => {
//   const [mobile, setMobile] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Make an API request to your backend for authentication
//       const response = await axios.post('http://localhost:3000/employeeLogin', {
//         mobile,
//         password,
//       });

//       // Handle successful login (e.g., store token, redirect, etc.)
//       console.log('Login successful:', response.data);
//     } catch (error) {
//       console.error('Error logging in:', error.response.data.message);
//       setErrorMessage('Invalid username or password');
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="mobile">Username:</label>
//         <input
//           type="text"
//           id="mobile"
//           value={mobile}
//           onChange={(e) => setMobile(e.target.value)}
//           required
//         />
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//     </div>
//   );
// };

// export default EmployeeLogin;


import React, { useState } from 'react';
import axios from 'axios';

const EmployeeLogin = () => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side input validation
    if (!mobile || !password) {
      setErrorMessage('Mobile number and password are required');
      return;
    }

    // Make API request for login
    try {
      const response = await axios.get('http://localhost:3000/employeeRegister', {
        mobile,
        password,
      });

      // Handle successful login
      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Error logging in:', error.response.data.message);
      setErrorMessage('Invalid mobile number or password');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="mobile">Mobile Number:</label>
          <input
            type="text"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            minLength={10}
            maxLength={10}
            pattern="[0-9]+"
            title="Mobile number must be 10 digits"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default EmployeeLogin;
