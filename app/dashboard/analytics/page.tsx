"use client";

import { motion } from "framer-motion";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const revenueData = [
  { month: "Jan", revenue: 4200, subscriptions: 28 },
  { month: "Feb", revenue: 5100, subscriptions: 32 },
  { month: "Mar", revenue: 6800, subscriptions: 41 },
  { month: "Apr", revenue: 7200, subscriptions: 45 },
  { month: "May", revenue: 8900, subscriptions: 52 },
  { month: "Jun", revenue: 9400, subscriptions: 58 },
];

const planDistribution = [
  { plan: "Basic", count: 45 },
  { plan: "Pro", count: 68 },
  { plan: "Enterprise", count: 23 },
];

const paymentMethods = [
  { method: "Credit Card", percentage: 65 },
  { method: "PayPal", percentage: 20 },
  { method: "Bank Transfer", percentage: 15 },
];

export default function AnalyticsPage() {
  return (
    <>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-gray-900"
      >
        Analytics
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-sm text-gray-600 mt-1"
      >
        Visualize your business performance and trends.
      </motion.p>

      {/* Key Metrics */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <motion.div 
          whileHover={{ scale: 1.02, y: -4 }}
          className="bg-white p-6 rounded-xl shadow"
        >
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Total Revenue</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2">$41,600</h2>
          <p className="text-xs text-emerald-600 mt-1">↑ 24% from last period</p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02, y: -4 }}
          className="bg-white p-6 rounded-xl shadow"
        >
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Active Subscriptions</p>
          <h2 className="text-3xl font-extrabold text-indigo-600 mt-2">136</h2>
          <p className="text-xs text-emerald-600 mt-1">↑ 12% from last period</p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02, y: -4 }}
          className="bg-white p-6 rounded-xl shadow"
        >
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Avg. Revenue/Client</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2">$306</h2>
          <p className="text-xs text-gray-500 mt-1">Stable from last period</p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02, y: -4 }}
          className="bg-white p-6 rounded-xl shadow"
        >
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Churn Rate</p>
          <h2 className="text-3xl font-extrabold text-rose-600 mt-2">3.2%</h2>
          <p className="text-xs text-rose-600 mt-1">↓ 1.1% from last period</p>
        </motion.div>
      </motion.div>

      {/* Revenue Trend Chart */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white p-6 rounded-xl shadow mt-8"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Revenue & Subscription Growth</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={3} name="Revenue ($)" />
              <Line yAxisId="right" type="monotone" dataKey="subscriptions" stroke="#8b5cf6" strokeWidth={3} name="Subscriptions" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Plan Distribution & Payment Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Plan Distribution */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Plan Distribution</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={planDistribution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="plan" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="url(#colorGradient)" name="Clients" />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h2>
          <div className="space-y-4 mt-6">
            {paymentMethods.map((method) => (
              <div key={method.method}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{method.method}</span>
                  <span className="text-sm font-semibold text-gray-900">{method.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${method.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-xl shadow mt-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <p className="text-sm font-medium text-gray-900">New subscription from Acme Corp</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
            <span className="text-sm font-semibold text-emerald-600">+$99.00</span>
          </div>
          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <p className="text-sm font-medium text-gray-900">Payment received from FinEdge</p>
              <p className="text-xs text-gray-500">5 hours ago</p>
            </div>
            <span className="text-sm font-semibold text-emerald-600">+$299.00</span>
          </div>
          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <p className="text-sm font-medium text-gray-900">Subscription cancelled by NovaTech</p>
              <p className="text-xs text-gray-500">1 day ago</p>
            </div>
            <span className="text-sm font-semibold text-rose-600">-$29.00</span>
          </div>
        </div>
      </div>
    </>
  );
}