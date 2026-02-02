"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function DashboardPage() {
  return (
    <>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-gray-900"
      >
        Dashboard Overview
      </motion.h1>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-6"
      >
        {/* Total Balance */}
        <motion.div 
          variants={item}
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-gradient-to-br from-indigo-600 to-indigo-800 p-6 rounded-xl shadow-lg cursor-pointer hover:shadow-2xl hover:shadow-indigo-500/50"
        >
          <p className="text-sm font-medium text-indigo-100 uppercase tracking-wide">
            Total Balance
          </p>
          <h2 className="text-3xl font-extrabold text-white mt-2">
            $42,500
          </h2>
        </motion.div>

        {/* Active Clients */}
        <motion.div 
          variants={item}
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white p-6 rounded-xl shadow-md border-l-4 border-emerald-500 cursor-pointer hover:shadow-xl"
        >
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
            Active Clients
          </p>
          <h2 className="text-3xl font-extrabold text-emerald-600 mt-2">
            128
          </h2>
        </motion.div>

        {/* Active Subscriptions */}
        <motion.div 
          variants={item}
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500 cursor-pointer hover:shadow-xl"
        >
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
            Active Subscriptions
          </p>
          <h2 className="text-3xl font-extrabold text-indigo-600 mt-2">
            94
          </h2>
        </motion.div>

        {/* Monthly Income */}
        <motion.div 
          variants={item}
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white p-6 rounded-xl shadow-md border-l-4 border-emerald-500 cursor-pointer hover:shadow-xl"
        >
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
            Monthly Income
          </p>
          <h2 className="text-3xl font-extrabold text-emerald-600 mt-2">
            $8,200
          </h2>
        </motion.div>

        {/* Monthly Expenses */}
        <motion.div 
          variants={item}
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white p-6 rounded-xl shadow-md border-l-4 border-rose-500 cursor-pointer hover:shadow-xl"
        >
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
            Monthly Expenses
          </p>
          <h2 className="text-3xl font-extrabold text-rose-600 mt-2">
            $3,900
          </h2>
        </motion.div>
      </motion.div>
    </>
  );
}