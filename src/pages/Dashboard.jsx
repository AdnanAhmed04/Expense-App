import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Sample Data for 12 months
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const incomeData = [5000, 7000, 6500, 8000, 6200, 7500, 9000, 8500, 8800, 7200, 7600, 8100];
  const expenseData = [3000, 4500, 4000, 5000, 3800, 4200, 6000, 5200, 4900, 4300, 4700, 5200];

  // Total calculations
  const totalIncome = incomeData.reduce((a, b) => a + b, 0);
  const totalExpenses = expenseData.reduce((a, b) => a + b, 0);
  const balance = totalIncome - totalExpenses;

  // Line chart data
  const chartData = {
    labels: months,
    datasets: [
      {
        label: "Income",
        data: incomeData,
        borderColor: "green",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        pointBackgroundColor: "green",
        pointBorderColor: "green",
        tension: 0.4, // Smooth curve
      },
      {
        label: "Expenses",
        data: expenseData,
        borderColor: "red",
        backgroundColor: "rgba(244, 67, 54, 0.2)",
        pointBackgroundColor: "red",
        pointBorderColor: "red",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false, // Allows height customization
    responsive: true,
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>

        {/* Responsive Line Chart */}
        <div className="mt-2 rounded-lg bg-white p-4= md:p-4 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-700">Income & Expenses Over 12 Months</h2>
          <div className="h-[300px] md:h-[400px] ">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>

        {/* Summary Boxes - Grid Layout for Responsive Design */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold text-gray-700">Total Income</h3>
            <p className="mt-2 text-2xl font-bold text-green-500">${totalIncome}</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold text-gray-700">Total Expense</h3>
            <p className="mt-2 text-2xl font-bold text-red-500">${totalExpenses}</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold text-gray-700">Total Balance</h3>
            <p className="mt-2 text-2xl font-bold text-blue-500">${balance}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
