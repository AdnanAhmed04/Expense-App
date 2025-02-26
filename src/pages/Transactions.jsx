import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { FaSackDollar } from "react-icons/fa6";

const Transactions = () => {
    const [transactions, setTransactions] = useState([
        { id: 1, title: "Freelancing", amount: 5000, date: "16/12/2023", reference: "Bitcoin money", icon: <FaSackDollar className="text-orange-600"/> },
        { id: 2, title: "Tuition", amount: 5000, date: "1/04/2023", reference: "My January Shopify earnings.", icon: <FaSackDollar className="text-orange-600"/> },
        { id: 3, title: "Car Selling", amount: 120000, date: "5/03/2023", reference: "My January YouTube earnings.", icon: <FaSackDollar className="text-orange-600"/> },
        { id: 4, title: "Salary", amount: 70000, date: "2/01/2023", reference: "My January developer salary.", icon: <FaSackDollar className="text-orange-600"/> },
    ]);

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <Sidebar />
            <div className="flex-1 p-4 md:p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Transactions</h1>

                {/* Transactions List */}
                <div className="mt-6 space-y-4">
                    {transactions.map((transaction) => (
                        <div key={transaction.id} className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border-b">
                            <div className="flex items-center gap-4">
                                <span className="text-2xl">{transaction.icon}</span>
                                <div>
                                    <h3 className="text-lg font-semibold">{transaction.title}</h3>
                                    <p className="text-gray-500">
                                        ${transaction.amount} • {transaction.date} • 💬 {transaction.reference}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Transactions;
