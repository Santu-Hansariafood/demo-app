
import dashboardImage from "../../assets/hansa-logo.svg";

import React from 'react'

const Dashboard = () => {
  return (
    <div className="flex-1 bg-gray-200">
        <div className="p-4">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold hover:text-yellow-500">
              Welcome to your Dashboard!
            </h2>
          </div>
          <img src={dashboardImage} alt="Dashboard" className="mt-4 w-full h-screen" />
        </div>
      </div>
  )
}

export default Dashboard
