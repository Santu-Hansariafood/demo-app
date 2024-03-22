// import React, { useState } from "react";
// import Modal from "react-modal";
// import Swal from "sweetalert2";

// Modal.setAppElement("#root");

// const WelcomeModal = ({ isOpen, onClose }) => {
//   const [role, setRole] = useState("");

//   const handleRoleChange = (e) => {
//     setRole(e.target.value);
//   };

//   const handleSubmit = () => {
//     if (!role) {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Please choose a role!",
//       });
//       return;
//     }

//     Swal.fire({
//       icon: "success",
//       title: `Thank you for choosing ${role}!`,
//       showConfirmButton: true,
//     });

//     onClose();
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       contentLabel="Welcome Modal"
//     >
//       <div className="flex flex-col items-center justify-center min-h-screen">
//         <h2 className="text-center mb-4 text-3xl text-green-500 font-bold">
//           Welcome to Hansaria Food Private Limited
//         </h2>
//         <p className="text-center mb-4 text-yellow-500">
//           Please choose your role:
//         </p>
//         <form className="w-full max-w-sm" onSubmit={handleSubmit}>
//           <div className="flex flex-wrap -mx-3 mb-6">
//             <div className="w-full px-3">
// <div className="flex flex-wrap justify-between">
//   <label className="inline-flex items-center w-full sm:w-auto mb-2 sm:mb-0 text-green-500">
//     <input
//       type="radio"
//       className="form-radio text-green-500"
//       value="Admin"
//       checked={role === "Admin"}
//       onChange={handleRoleChange}
//     />
//     <span className="ml-2 text-green-500">Admin</span>
//   </label>
//   <label className="inline-flex items-center w-full sm:w-auto mb-2 sm:mb-0">
//     <input
//       type="radio"
//       className="form-radio text-green-500"
//       value="Employee"
//       checked={role === "Employee"}
//       onChange={handleRoleChange}
//     />
//     <span className="ml-2 text-green-500">Employee</span>
//   </label>
//   <label className="inline-flex items-center w-full sm:w-auto mb-2 sm:mb-0">
//     <input
//       type="radio"
//       className="form-radio text-green-500"
//       value="Buyer"
//       checked={role === "Buyer"}
//       onChange={handleRoleChange}
//     />
//     <span className="ml-2 text-green-500">Buyer</span>
//   </label>
//   <label className="inline-flex items-center w-full sm:w-auto mb-2 sm:mb-0">
//     <input
//       type="radio"
//       className="form-radio text-green-500"
//       value="Farmer"
//       checked={role === "Farmer"}
//       onChange={handleRoleChange}
//     />
//     <span className="ml-2 text-green-500">Farmer</span>
//   </label>
// </div>
//             </div>
//           </div>
//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </Modal>
//   );
// };

// export default WelcomeModal;

// import React, { useState } from "react";
// import Modal from "react-modal";
// import LoginForm from "./LoginForm/LoginForm";
// import Swal from "sweetalert2";

// Modal.setAppElement("#root");

// const WelcomeModal = ({ isOpen, onClose }) => {
//   const [role, setRole] = useState("");
//   const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

//   const handleRoleChange = (e) => {
//     setRole(e.target.value);
//     setIsLoginFormOpen(true);
//   };

//   const handleLogin = (formData) => {
    
//     Swal.fire({
//       icon: "success",
//       title: "Signed in successfully",
//       showConfirmButton: false,
//       timer: 3000,
//     });

//     onClose();
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       contentLabel="Welcome Modal"
//     >
//       <div className="flex flex-col items-center justify-center min-h-screen">
//         <h2 className="text-center mb-4 text-3xl text-green-500 font-bold">
//           Welcome to Hansaria Food Private Limited
//         </h2>
//         <p className="text-center mb-4 text-yellow-500">
//           Please choose your role:
//         </p>
//         <div className="flex flex-wrap -mx-3 mb-6">
//         <div className="w-full px-3">
//         <div className="flex flex-wrap justify-between">
//           <label className="inline-flex items-center w-full sm:w-auto mb-2 sm:mb-0 text-green-500">
//             <input
//               type="radio"
//               className="form-radio text-green-500"
//               value="Admin"
//               checked={role === "Admin"}
//               onChange={handleRoleChange}
//             />
//             <span className="ml-2 text-green-500">Admin</span>
//           </label>
//           <label className="inline-flex items-center w-full sm:w-auto mb-2 sm:mb-0">
//             <input
//               type="radio"
//               className="form-radio text-green-500"
//               value="Employee"
//               checked={role === "Employee"}
//               onChange={handleRoleChange}
//             />
//             <span className="ml-2 text-green-500">Employee</span>
//           </label>
//           <label className="inline-flex items-center w-full sm:w-auto mb-2 sm:mb-0">
//             <input
//               type="radio"
//               className="form-radio text-green-500"
//               value="Buyer"
//               checked={role === "Buyer"}
//               onChange={handleRoleChange}
//             />
//             <span className="ml-2 text-green-500">Buyer</span>
//           </label>
//           <label className="inline-flex items-center w-full sm:w-auto mb-2 sm:mb-0">
//             <input
//               type="radio"
//               className="form-radio text-green-500"
//               value="Farmer"
//               checked={role === "Farmer"}
//               onChange={handleRoleChange}
//             />
//             <span className="ml-2 text-green-500">Farmer</span>
//           </label>
//         </div>
// </div>
// </div>
//         {isLoginFormOpen && (
//           <div className="w-full max-w-sm">
//             <LoginForm role={role} onSubmit={handleLogin} />
//           </div>
//         )}
//       </div>
//     </Modal>
//   );
// };

// export default WelcomeModal;
// import React, { useState } from "react";
// import Modal from "react-modal";
// import Swal from "sweetalert2";
// import LoginForm from "./LoginForm/LoginForm";

// Modal.setAppElement("#root");

// const WelcomeModal = ({ isOpen, onClose }) => {
//   const [role, setRole] = useState("");
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     role: ""
//   });

//   const handleRoleChange = (selectedRole) => {
//     setRole(selectedRole);
//     setFormData({ ...formData, role: selectedRole });
//   };

//   const handleLogin = (formData) => {
//     // Assuming onSubmit function here submits the login data to the respective API
//     // You can replace this with your actual API call logic
//     console.log("Submitting login data:", formData);

//     Swal.fire({
//       icon: "success",
//       title: "Signed in successfully",
//       showConfirmButton: false,
//       timer: 3000,
//     });

//     onClose();
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       contentLabel="Welcome Modal"
//     >
//       <div className="flex flex-col items-center justify-center min-h-screen">
//         <h2 className="text-center mb-4 text-3xl text-green-500 font-bold">
//           Welcome to Hansaria Food Private Limited
//         </h2>
//         <p className="text-center mb-4 text-yellow-500">
//           Please choose your role:
//         </p>
//         <div className="flex flex-wrap -mx-3 mb-6">
//           <div className="w-full px-3">
//             <div className="flex flex-wrap justify-between">
//               <label className="inline-flex items-center w-full sm:w-auto mb-2 sm:mb-0 text-green-500">
//                 <input
//                   type="radio"
//                   className="form-radio text-green-500"
//                   value="Admin"
//                   checked={role === "Admin"}
//                   onChange={() => handleRoleChange("Admin")}
//                 />
//                 <span className="ml-2 text-green-500">Admin</span>
//               </label>
//               <label className="inline-flex items-center w-full sm:w-auto mb-2 sm:mb-0">
//                 <input
//                   type="radio"
//                   className="form-radio text-green-500"
//                   value="Employee"
//                   checked={role === "Employee"}
//                   onChange={() => handleRoleChange("Employee")}
//                 />
//                 <span className="ml-2 text-green-500">Employee</span>
//               </label>
//               <label className="inline-flex items-center w-full sm:w-auto mb-2 sm:mb-0">
//                 <input
//                   type="radio"
//                   className="form-radio text-green-500"
//                   value="Buyer"
//                   checked={role === "Buyer"}
//                   onChange={() => handleRoleChange("Buyer")}
//                 />
//                 <span className="ml-2 text-green-500">Buyer</span>
//               </label>
//               <label className="inline-flex items-center w-full sm:w-auto mb-2 sm:mb-0">
//                 <input
//                   type="radio"
//                   className="form-radio text-green-500"
//                   value="Farmer"
//                   checked={role === "Farmer"}
//                   onChange={() => handleRoleChange("Farmer")}
//                 />
//                 <span className="ml-2 text-green-500">Farmer</span>
//               </label>
//             </div>
//           </div>
//         </div>
//         {role && (
//           <div className="w-full max-w-sm">
//             <LoginForm onSubmit={handleLogin} formData={formData} />
//           </div>
//         )}
//       </div>
//     </Modal>
//   );
// };

// export default WelcomeModal;

import React, { useState } from "react";
import Modal from "react-modal";
import Swal from "sweetalert2";
import LoginForm from "./LoginForm/LoginForm";

Modal.setAppElement("#root");

const WelcomeModal = ({ isOpen, onClose }) => {
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: ""
  });
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
    setFormData({ ...formData, role: selectedRole });
  };

  const handleLogin = (formData) => {
    // Assuming onSubmit function here submits the login data to the respective API
    // You can replace this with your actual API call logic
    console.log("Submitting login data:", formData);

    Swal.fire({
      icon: "success",
      title: "Signed in successfully",
      showConfirmButton: false,
      timer: 3000,
    });

    onClose();
  };

  const handleTermsCheckboxChange = () => {
    setTermsAccepted(!termsAccepted);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Welcome Modal"
    >
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-center mb-4 text-3xl text-green-500 font-bold">
          Welcome to Hansaria Food Private Limited
        </h2>
        <p className="text-center mb-4 text-yellow-500">
          Please choose your role:
        </p>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <div className="flex flex-wrap justify-between">
              <label className="inline-flex items-center w-full sm:w-auto mb-2 sm:mb-0 text-green-500">
                <input
                  type="checkbox"
                  className="form-checkbox text-green-500"
                  checked={termsAccepted}
                  onChange={handleTermsCheckboxChange}
                />
                <span className="ml-2 text-green-500">
                  I accept the terms and conditions
                </span>
              </label>
            </div>
          </div>
        </div>
        {termsAccepted && (
          <div className="w-full max-w-sm">
            <p className="text-green-500 mb-4">
              Terms and Conditions:
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              volutpat, nisi id malesuada posuere, arcu mauris sodales urna,
              quis commodo lacus ex vel mauris. Integer tincidunt justo a
              enim volutpat mollis. Donec id bibendum nulla. Nullam nec nibh
              et lorem fermentum tristique. Nulla facilisi. Curabitur tempus
              libero at diam sollicitudin bibendum. Vivamus suscipit risus
              dolor, nec rhoncus felis consectetur sit amet. Cras ultrices
              libero vitae mauris luctus varius. Integer eleifend felis a
              justo hendrerit dignissim. Sed nec sodales risus. Nullam eu
             ismod velit. Fusce vel est ut leo vestibulum ultrices. Sed sed
              aliquam risus, vel tincidunt metus. Proin sit amet libero
              sapien. Aenean vehicula libero a est suscipit, eu sollicitudin
              dolor bibendum. Quisque suscipit condimentum ex non scelerisque.
              Suspendisse potenti. In in suscipit eros. Nullam vel sapien ut
              eros laoreet egestas. Phasellus interdum sapien id purus
              volutpat, in aliquam enim pellentesque. Nulla facilisi. Sed
              hendrerit nibh a enim condimentum, ut dignissim elit
              sollicitudin. Nulla nec pretium nulla, id dictum orci. Nulla
              at tortor nulla. Ut tincidunt justo vitae justo tincidunt
              varius. Nullam condimentum auctor diam. Nulla at ligula
              vehicula, congue ipsum non, convallis lectus. Suspendisse
              hendrerit felis non efficitur mattis. Aenean sed lectus
              scelerisque, tincidunt enim vel, dapibus lorem. Phasellus
              pretium quam ac elit dapibus, a pharetra orci placerat.
              Vestibulum ullamcorper placerat risus, et lobortis est sodales
              et. Duis et dui felis. Nulla sed malesuada purus, vitae
              efficitur elit. Vivamus vel risus ac quam ultrices
              sollicitudin. Integer ultricies nec sapien at varius.
            </p>
            <LoginForm onSubmit={handleLogin} formData={formData} />
          </div>
        )}
      </div>
    </Modal>
  );
};

export default WelcomeModal;
