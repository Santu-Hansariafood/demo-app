import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import EmployeeLogin from "./components/Employee/EmployeeLogin/EmployeeLogin";
import AdminLogin from "./components/Login/AdminLogin/AdminLogin";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboad/Dashboard";
import EmployeeRegister from "./components/Employee/EmployeeRegister/EmployeeRegister";
import EmployeeList from "./components/Employee/EmployeeList/EmployeeList";
import RegisterPhoto from "./components/Register/RegisterPhoto/RegisterPhoto";
import RegisterList from "./components/Register/RegisterData/RegisterList";
import DisplayFermerDetails from "./components/Register/DisplayFermerDetails/DisplayFermerDetails";
import RegisterStore from "./components/Store/RegisterStore/RegisterStore";
import StoreDetails from "./components/Store/StoreDetails/StoreDetails";
import UpdateStore from "./components/Store/UpdateStore/UpdateStore";
import FinalPdfDetails from "./components/Register/FinalPdfDetails/FinalPdfDetails";
import FinalStoreDetails from "./components/Store/FinalStoreDetails/FinalStoreDetails";
import RegisterDetails from "./components/Register/RegisterDetails/RegisterDetails";
import Main from "./components/Main/Main";
import Buyer from "./components/Buyer/Buyer";
import BuyerList from "./components/Buyer/BuyerList/BuyerList";
import Transport from "./components/Transport/Transport";
import TransportList from "./components/Transport/TransportList/TransportList";
import EditTransport from './components/Transport/EditTransport/EditTransport';
import TransportDetails from "./components/Transport/TransportDetails/TransportDetails";
import EditBuyer from "./components/Buyer/EditBuyer/EditBuyer";
import BuyerDetails from "./components/Buyer/BuyerDetails/BuyerDetails";
import SupplierRegister from "./components/Supplier/SupplierRegister";
import EditSupplier from "./components/Supplier/EditSupplier/EditSupplier";
import SupplierDetails from "./components/Supplier/SupplierDetails/SupplierDetails";
import SupplierList from "./components/Supplier/SupplierList/SupplierList";
import WelcomeModal from "./WelcomeModal/WelcomeModal";

function App() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);

  const handleCloseWelcomeModal = () => {
    setShowWelcomeModal(false);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/EmployeeLogin" element={<EmployeeLogin />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/EmployeeRegister" element={<EmployeeRegister />} />
          <Route path="/EmployeeList" element={<EmployeeList />} />
          <Route path="/RegisterPhoto" element={<RegisterPhoto />} />
          <Route path="/RegisterList" element={<RegisterList />} />
          <Route
            path="/DisplayFermerDetails"
            element={<DisplayFermerDetails />}
          />
          <Route path="/RegisterStore" element={<RegisterStore />} />
          <Route path="/StoreDetails" element={<StoreDetails />} />
          <Route path="/UpdateStore" element={<UpdateStore />} />
          <Route path="/farmer/:id" element={<FinalPdfDetails />} />
          <Route path="/store/:id" element={<FinalStoreDetails />} />
          <Route path="/UpdateStore/:id" element={<UpdateStore />} />
          <Route path="/RegisterDetails/:id" element={<RegisterDetails />} />
          <Route path="/Buyer" element={<Buyer />} />
          <Route path="/BuyerList" element={<BuyerList />} />
          <Route path="/EditBuyer/:id" element={<EditBuyer />} />
          <Route path="/BuyerDetails/:id" element={<BuyerDetails />} />
          <Route path="/Transport" element={<Transport />} />
          <Route path="/TransportList" element={<TransportList />} />
          <Route path="/EditTransport/:id" element={<EditTransport />} />
          <Route path="/TransportDetails/:id" element={<TransportDetails />} />
          <Route path="/SupplierRegister" element={<SupplierRegister />} />
          <Route path="/SupplierList" element={<SupplierList />} />
          <Route path="/EditSupplier/:id" element={<EditSupplier />} />
          <Route path="/supplier/:id" element={<SupplierDetails />} />
        </Routes>
      </BrowserRouter>
      <WelcomeModal isOpen={showWelcomeModal} onClose={handleCloseWelcomeModal} />
    </>
  );
}

export default App;


// import React, { Suspense } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// const Main = React.lazy(() => import('./components/Main/Main'));
// const Dashboard = React.lazy(() => import('./components/Dashboad/Dashboard'));
// const Login = React.lazy(() => import('./components/Login/Login'));
// const EmployeeLogin = React.lazy(() => import('./components/Employee/EmployeeLogin/EmployeeLogin'));
// const AdminLogin = React.lazy(() => import('./components/Login/AdminLogin/AdminLogin'));
// const Register = React.lazy(() => import('./components/Register/Register'));
// const EmployeeRegister = React.lazy(() => import('./components/Employee/EmployeeRegister/EmployeeRegister'));
// const EmployeeList = React.lazy(() => import('./components/Employee/EmployeeList/EmployeeList'));
// const RegisterPhoto = React.lazy(() => import('./components/Register/RegisterPhoto/RegisterPhoto'));
// const RegisterList = React.lazy(() => import('./components/Register/RegisterData/RegisterList'));
// const DisplayFermerDetails = React.lazy(() => import('./components/Register/DisplayFermerDetails/DisplayFermerDetails'));
// const RegisterStore = React.lazy(() => import('./components/Store/RegisterStore/RegisterStore'));
// const StoreDetails = React.lazy(() => import('./components/Store/StoreDetails/StoreDetails'));
// const UpdateStore = React.lazy(() => import('./components/Store/UpdateStore/UpdateStore'));
// const FinalPdfDetails = React.lazy(() => import('./components/Register/FinalPdfDetails/FinalPdfDetails'));
// const FinalStoreDetails = React.lazy(() => import('./components/Store/FinalStoreDetails/FinalStoreDetails'));
// const RegisterDetails = React.lazy(() => import('./components/Register/RegisterDetails/RegisterDetails'));
// const Buyer = React.lazy(() => import('./components/Buyer/Buyer'));
// const BuyerList = React.lazy(() => import('./components/Buyer/BuyerList/BuyerList'));
// const Transport = React.lazy(() => import('./components/Transport/Transport'));
// const TransportList = React.lazy(() => import('./components/Transport/TransportList/TransportList'));
// const EditTransport = React.lazy(() => import('./components/Transport/EditTransport/EditTransport'));
// const TransportDetails = React.lazy(() => import('./components/Transport/TransportDetails/TransportDetails'));
// const EditBuyer = React.lazy(() => import('./components/Buyer/EditBuyer/EditBuyer'));
// const BuyerDetails = React.lazy(() => import('./components/Buyer/BuyerDetails/BuyerDetails'));
// const SupplierRegister = React.lazy(() => import('./components/Supplier/SupplierRegister'));
// const EditSupplier = React.lazy(() => import('./components/Supplier/EditSupplier/EditSupplier'));
// const SupplierDetails = React.lazy(() => import('./components/Supplier/SupplierDetails/SupplierDetails'));
// const SupplierList = React.lazy(() => import('./components/Supplier/SupplierList/SupplierList'));

// function App() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <BrowserRouter>
//         <Routes>
//           <Route index element={<Main />} />
//           <Route path="/Dashboard" element={<Dashboard />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/EmployeeLogin" element={<EmployeeLogin />} />
//           <Route path="/AdminLogin" element={<AdminLogin />} />
//           <Route path="/Register" element={<Register />} />
//           <Route path="/Dashboard" element={<Dashboard />} />
//           <Route path="/EmployeeRegister" element={<EmployeeRegister />} />
//           <Route path="/EmployeeList" element={<EmployeeList />} />
//           <Route path="/RegisterPhoto" element={<RegisterPhoto />} />
//           <Route path="/RegisterList" element={<RegisterList />} />
//           <Route
//             path="/DisplayFermerDetails"
//             element={<DisplayFermerDetails />}
//           />
//           <Route path="/RegisterStore" element={<RegisterStore />} />
//           <Route path="/StoreDetails" element={<StoreDetails />} />
//           <Route path="/UpdateStore" element={<UpdateStore />} />
//           <Route path="/farmer/:id" element={<FinalPdfDetails />} />
//           <Route path="/store/:id" element={<FinalStoreDetails />} />
//           <Route path="/UpdateStore/:id" element={<UpdateStore />} />
//           <Route path="/RegisterDetails/:id" element={<RegisterDetails />} />
//           <Route path="/Buyer" element={<Buyer />} />
//           <Route path="/BuyerList" element={<BuyerList />} />
//           <Route path="/EditBuyer/:id" element={<EditBuyer />} />
//           <Route path="/BuyerDetails/:id" element={<BuyerDetails />} />
//           <Route path="/Transport" element={<Transport />} />
//           <Route path="/TransportList" element={<TransportList />} />
//           <Route path="/EditTransport/:id" element={<EditTransport />} />
//           <Route path="/TransportDetails/:id" element={<TransportDetails />} />
//           <Route path="/SupplierRegister" element={<SupplierRegister />} />
//           <Route path="/SupplierList" element={<SupplierList />} />
//           <Route path="/EditSupplier/:id" element={<EditSupplier />} />
//           <Route path="/SupplierDetails/:id" element={<SupplierDetails />} />
//         </Routes>
//       </BrowserRouter>
//     </Suspense>
//   );
// }

// export default App;
