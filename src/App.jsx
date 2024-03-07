import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import EmployeLogin from "./components/Login/EmployeLogin/EmployeLogin";
import AdminLogin from "./components/Login/AdminLogin/AdminLogin";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboad/Dashboard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="EmployeLogin" element={<EmployeLogin />} />
          <Route path="AdminLogin" element={<AdminLogin />} />
          <Route path="Register" element={<Register/>} />
          <Route path="Dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>

      {/* <EmployeLogin/> */}
      {/* <AdminLogin/> */}
    </>
  );
}

export default App;
