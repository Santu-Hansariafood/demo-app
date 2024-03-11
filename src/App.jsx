import { useState } from "react";
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
import DisplayFermerDetails from "./components/Register/DisplayFermerDetails/DisplayFermerDetails"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="EmployeeLogin" element={<EmployeeLogin />} />
          <Route path="AdminLogin" element={<AdminLogin />} />
          <Route path="Register" element={<Register />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="EmployeeRegister" element={<EmployeeRegister />} />
          <Route path="EmployeeList" element={<EmployeeList />} />
          <Route path="RegisterPhoto" element={<RegisterPhoto />} />
          <Route path="RegisterList" element={<RegisterList />} />
          <Route path="DisplayFermerDetails" element={<DisplayFermerDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
