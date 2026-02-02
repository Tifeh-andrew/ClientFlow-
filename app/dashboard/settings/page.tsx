"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [monthlyReports, setMonthlyReports] = useState(true);
  const [paymentAlerts, setPaymentAlerts] = useState(false);

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      <p className="text-sm text-gray-600 mt-1">
        Manage your account preferences and configuration.
      </p>

      <div className="mt-6 space-y-6">
        {/* Profile Settings */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                defaultValue="Admin User"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                defaultValue="admin@clientflow.com"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
              <input
                type="text"
                defaultValue="ClientFlow Inc."
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700">
              Save Changes
            </button>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Email Notifications</p>
                <p className="text-sm text-gray-600">Receive email updates about your account</p>
              </div>
              <button
                onClick={() => setEmailNotifications(!emailNotifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                  emailNotifications ? "bg-indigo-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    emailNotifications ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Monthly Reports</p>
                <p className="text-sm text-gray-600">Get monthly analytics reports via email</p>
              </div>
              <button
                onClick={() => setMonthlyReports(!monthlyReports)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                  monthlyReports ? "bg-indigo-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    monthlyReports ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Payment Alerts</p>
                <p className="text-sm text-gray-600">Get notified about failed payments</p>
              </div>
              <button
                onClick={() => setPaymentAlerts(!paymentAlerts)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                  paymentAlerts ? "bg-indigo-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    paymentAlerts ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Security</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
              <input
                type="password"
                placeholder="Enter current password"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
              <input
                type="password"
                placeholder="Confirm new password"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700">
              Update Password
            </button>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-white rounded-xl shadow p-6 border-2 border-rose-200">
          <h2 className="text-lg font-semibold text-rose-600 mb-4">Danger Zone</h2>
          
          <div className="space-y-4">
            <div>
              <p className="font-medium text-gray-900">Delete Account</p>
              <p className="text-sm text-gray-600 mb-3">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <button className="px-6 py-2 bg-rose-600 text-white rounded-lg font-medium hover:bg-rose-700">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}