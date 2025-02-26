import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Sidebar from "./pages/Sidebar";
import Dashboard from "./pages/Dashboard";
import IncomeTracker from "./pages/Income";
import Transactions from "./pages/Transactions";
import ExpenseTracker from "./pages/expense";
const App = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar is always visible */}
        {/* <Sidebar /> */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/income" element={<IncomeTracker />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/expense" element={<ExpenseTracker/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
