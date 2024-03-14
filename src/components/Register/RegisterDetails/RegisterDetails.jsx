// // import React, { useState, useEffect } from 'react';
// // import { useParams } from 'react-router-dom'; // Assuming you're using React Router for routing
// // import axios from 'axios';

// // const RegisterDetails = () => {
// //   const { id } = useParams(); // Assuming you have a route parameter named 'id'
// //   const [register, setRegister] = useState(null);

// //   useEffect(() => {
// //     const fetchRegister = async () => {
// //       try {
// //         const response = await axios.get(`https://hansaria-server.onrender.com/register/${id}`); // Fetch register by ID
// //         setRegister(response.data);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };

// //     fetchRegister();
// //   }, [id]); // Fetch data whenever 'id' changes

// //   if (!register) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div className="container mx-auto">
// //       <h1 className="text-3xl font-bold mb-4">Register Details</h1>
// //       <div className="bg-white shadow-md p-4 rounded-md">
// //         <h2 className="text-lg font-semibold">{`${register.firstName} ${register.lastName}`}</h2>
// //         <p>Email: {register.email}</p>
// //         <p>Mobile: {register.mobile}</p>
// //         <p>Adhar Number: {register.adharNumber}</p>
// //         <p>PAN Card Number: {register.panCardNumber}</p>
// //         <p>GST Number: {register.gstNumber}</p>
// //         <p>Address: {register.address}</p>
// //         <p>State: {register.state}</p>
// //         <p>District: {register.district}</p>
// //         <p>Village: {register.village}</p>
// //         <p>Pin Code: {register.pinCode}</p>
// //         <p>Role: {register.role}</p>
// //         <p>Farmer Deals: {register.farmerDeals}</p>
// //         <p>Account: {register.account}</p>
// //         <p>Account Name: {register.acName}</p>
// //         <p>IFSC: {register.ifsc}</p>
// //         <p>Branch Name: {register.branchName}</p>
// //         <p>Bank Name: {register.bankName}</p>
// //         {/* Render other fields as needed */}
// //         <img src={`data:${register.adharCard.contentType}.;base64,${register.adharCard}`} alt="Adhar Card" />
// //         <img src={`data:${register.panCard.contentType};base64,${register.panCard}`} alt="PAN Card" />
// //         <img src={`data:${register.gstCard.contentType};base64,${register.gstCard}`} alt="GST Card" />
// //         <img src={`data:${register.passCard.contentType};base64,${register.passCard}`} alt="Pass Card" />
// //         <img src={`data:${register.farmarPhoto.contentType};base64,${register.farmarPhoto}`} alt="Farmer Photo" />
// //       </div>
// //     </div>
// //   );
// // };

// // export default RegisterDetails;



// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom'; // Assuming you're using React Router for routing
// import axios from 'axios';

// const RegisterDetails = () => {
//   const { id } = useParams(); // Assuming you have a route parameter named 'id'
//   const [register, setRegister] = useState(null);

//   useEffect(() => {
//     const fetchRegister = async () => {
//       try {
//         const response = await axios.get(`https://hansaria-server.onrender.com/register/${id}`); // Fetch register by ID
//         setRegister(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchRegister();
//   }, [id]); // Fetch data whenever 'id' changes

//   if (!register) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto">
//       <h1 className="text-3xl font-bold mb-4">Register Details</h1>
//       <div className="bg-white shadow-md p-4 rounded-md">
//         <h2 className="text-lg font-semibold">{`${register.firstName} ${register.lastName}`}</h2>
//         <p>Email: {register.email}</p>
//         <p>Mobile: {register.mobile}</p>
//         <p>Adhar Number: {register.adharNumber}</p>
//         <p>PAN Card Number: {register.panCardNumber}</p>
//         <p>GST Number: {register.gstNumber}</p>
//         <p>Address: {register.address}</p>
//         <p>State: {register.state}</p>
//         <p>District: {register.district}</p>
//         <p>Village: {register.village}</p>
//         <p>Pin Code: {register.pinCode}</p>
//         <p>Role: {register.role}</p>
//         <p>Farmer Deals: {register.farmerDeals}</p>
//         <p>Account: {register.account}</p>
//         <p>Account Name: {register.acName}</p>
//         <p>IFSC: {register.ifsc}</p>
//         <p>Branch Name: {register.branchName}</p>
//         <p>Bank Name: {register.bankName}</p>
//         {/* Render other fields as needed */}
//         {register.adharCard && (
//           <img src={`data:${register.adharCard.contentType};base64,${register.adharCard.data.toString('base64')}`} alt="Adhar Card" />
//         )}
//         {register.panCard && (
//           <img src={`data:${register.panCard.contentType};base64,${register.panCard.data.toString('base64')}`} alt="PAN Card" />
//         )}
//         {register.gstCard && (
//           <img src={`data:${register.gstCard.contentType};base64,${register.gstCard.data.toString('base64')}`} alt="GST Card" />
//         )}
//         {register.passCard && (
//           <img src={`data:${register.passCard.contentType};base64,${register.passCard.data.toString('base64')}`} alt="Pass Card" />
//         )}
//         {register.farmarPhoto && (
//           <img src={`data:${register.farmarPhoto.contentType};base64,${register.farmarPhoto.data.toString('base64')}`} alt="Farmer Photo" />
//         )}
        
//       </div>
//     </div>
//   );
// };

// export default RegisterDetails;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're using React Router for routing
import axios from 'axios';

const RegisterDetails = () => {
  const { id } = useParams(); // Assuming you have a route parameter named 'id'
  const [register, setRegister] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRegister = async () => {
      try {
        const response = await axios.get(`https://hansaria-server.onrender.com/register/${id}`); // Fetch register by ID
        setRegister(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
      }
    };

    fetchRegister();
  }, [id]); // Fetch data whenever 'id' changes

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!register) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Register Details</h1>
      <div className="bg-white shadow-md p-4 rounded-md">
        <h2 className="text-lg font-semibold">{`${register.firstName} ${register.lastName}`}</h2>
        <p>Email: {register.email}</p>
        <p>Mobile: {register.mobile}</p>
        <p>Adhar Number: {register.adharNumber}</p>
        <p>PAN Card Number: {register.panCardNumber}</p>
        <p>GST Number: {register.gstNumber}</p>
        <p>Address: {register.address}</p>
        <p>State: {register.state}</p>
        <p>District: {register.district}</p>
        <p>Village: {register.village}</p>
        <p>Pin Code: {register.pinCode}</p>
        <p>Role: {register.role}</p>
        <p>Farmer Deals: {register.farmerDeals}</p>
        <p>Account: {register.account}</p>
        <p>Account Name: {register.acName}</p>
        <p>IFSC: {register.ifsc}</p>
        <p>Branch Name: {register.branchName}</p>
        <p>Bank Name: {register.bankName}</p>
        {/* Render other fields as needed */}
        {register.adharCard && (
          <img src={`data:${register.adharCard.contentType};base64,${register.adharCard.data}`} alt="Adhar Card" />
        )}
        {register.panCard && (
          <img src={`data:${register.panCard.contentType};base64,${register.panCard.data}`} alt="PAN Card" />
        )}
        {register.gstCard && (
          <img src={`data:${register.gstCard.contentType};base64,${register.gstCard.data}`} alt="GST Card" />
        )}
        {register.passCard && (
          <img src={`data:${register.passCard.contentType};base64,${register.passCard.data}`} alt="Pass Card" />
        )}
        {register.farmarPhoto && (
          <img src={`data:${register.farmarPhoto.contentType};base64,${register.farmarPhoto.data}`} alt="Farmer Photo" />
        )}
        
      </div>
    </div>
  );
};

export default RegisterDetails;
