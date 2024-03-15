import React from "react";
import MenuBar from "../MenuBar/MenuBar";
import Footer from "../Footer/Footer";
import Dashboard from "../Dashboad/Dashboard";

const Main = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <MenuBar />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default Main;
