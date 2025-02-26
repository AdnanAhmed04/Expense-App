import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar Toggle Button (for mobile) */}
      <button
        className="md:hidden p-4 text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={24} />
      </button>

      {/* Sidebar */}
      <div className={`fixed md:relative top-0 left-0 w-64 bg-gray-100 min-h-screen p-6 shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300 flex flex-col`}>
        
        {/* User Profile */}
        <div className="flex flex-col items-center">
          <img
            src="/public/profile.png"
            alt="User"
            className="mb-4 h-20 w-20 rounded-full"
          />
          <h2 className="text-lg font-semibold">John Doe</h2>
        </div>

        {/* Navigation Links */}
        <div className="mt-6 flex-grow">
          <ul className="space-y-4">
            <li className="text-lg font-medium text-gray-700 hover:text-blue-600">
              <Link to="/">Dashboard</Link>
            </li>
            <li className="text-lg font-medium text-gray-700 hover:text-blue-600">
              <Link to="/income">Income</Link>
            </li>
            <li className="text-lg font-medium text-gray-700 hover:text-blue-600">
              <Link to="/expense">Expense</Link>
            </li>
            <li className="text-lg font-medium text-gray-700 hover:text-blue-600">
              <Link to="/transactions">Veiw Transactions</Link>
            </li>
          </ul>
        </div>

        {/* Buttons at Bottom */}
        <div className="mt-auto flex flex-col gap-2">
        <Link to="/login">

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">Login</button></Link>
          <Link to="/signup">

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">Sign Up</button></Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
