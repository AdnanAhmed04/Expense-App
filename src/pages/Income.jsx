import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { FaSackDollar } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";

const IncomeTracker = () => {
    const [incomes, setIncomes] = useState([
        { id: 1, title: "Bitcoin", amount: 2500, date: "06/02/2023", reference: "Bitcoin money", icon: <FaSackDollar className="text-orange-600"/> },
        { id: 2, title: "Shopify", amount: 8000, date: "21/02/2023", reference: "My January Shopify earnings.", icon: <FaSackDollar className="text-orange-600"/> },
        { id: 3, title: "Youtube Adsense", amount: 1200, date: "18/01/2023", reference: "My January YouTube earnings.", icon: <FaSackDollar className="text-orange-600"/> },
        { id: 4, title: "Developer Salary", amount: 6000, date: "26/01/2023", reference: "My January developer salary.", icon: <FaSackDollar className="text-orange-600"/> },
    ]);

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [reference, setReference] = useState("");

    const addIncome = () => {
        if (title && amount && date) {
            const newIncome = {
                id: incomes.length + 1,
                title,
                amount: parseFloat(amount),
                date,
                reference,
                icon: "💵",
            };
            setIncomes([...incomes, newIncome]);
            setTitle("");
            setAmount("");
            setDate("");
            setReference("");
        }
    };

    const removeIncome = (id) => {
        setIncomes(incomes.filter((income) => income.id !== id));
    };

    const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <Sidebar />
            <div className="flex-1 p-4 md:p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Incomes</h1>

                {/* Total Income */}
                <div className="bg-gray-200 p-4 rounded-lg text-xl font-semibold">
                    Total Income: <span className="text-green-500">${totalIncome}</span>
                </div>

                {/* Form */}
                <div className="mt-6 flex flex-col md:flex-row gap-4">
                    <input
                        type="text"
                        placeholder="Salary Title"
                        className="border p-2 w-full md:w-1/4 rounded"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Salary Amount"
                        className="border p-2 w-full md:w-1/4 rounded"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <input
                        type="date"
                        className="border p-2 w-full md:w-1/5 rounded"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Reference"
                        className="border p-2 w-full md:w-1/4 rounded"
                        value={reference}
                        onChange={(e) => setReference(e.target.value)}
                    />
                    <button
                        onClick={addIncome}
                        className="bg-blue-800 w-full md:w-32 text-white px-4 py-2 rounded hover:cursor-pointer"
                    >
                        Add Income
                    </button>
                </div>

                {/* Income List */}
                <div className="mt-6 space-y-4">
                    {incomes.map((income) => (
                        <div key={income.id} className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border-b">
                            <div className="flex items-center gap-4">
                                <span className="text-2xl">{income.icon}</span>
                                <div>
                                    <h3 className="text-lg font-semibold">{income.title}</h3>
                                    <p className="text-gray-500">
                                        ${income.amount} • {income.date} • 💬 {income.reference}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => removeIncome(income.id)}
                                className="bg-gray-800 hover:bg-gray-600 hover:cursor-pointer text-white p-2 rounded-full mt-2 md:mt-0"
                            >
                                <FaRegTrashAlt />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IncomeTracker;
