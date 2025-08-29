import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register"; // ✅ renamed Signup → Register
import Sidebar from "./pages/Sidebar";
import Dashboard from "./pages/Dashboard";
import IncomeTracker from "./pages/Income";
import Transactions from "./pages/Transactions";
import ExpenseTracker from "./pages/Expense"; // ✅ Capitalized for consistency

// ✅ Wrapper to conditionally show Sidebar
const Layout = ({ children }) => {
  const location = useLocation();
  const hideSidebarRoutes = ["/login", "/register"]; // no sidebar here

  return (
    <div className="flex">
      {!hideSidebarRoutes.includes(location.pathname) && <Sidebar />}
      <main className="flex-1">{children}</main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/income" element={<IncomeTracker />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/expense" element={<ExpenseTracker />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> {/* ✅ updated */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
