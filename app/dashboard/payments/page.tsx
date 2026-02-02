"use client";

import { useState, useEffect } from "react";

const payments = [
  {
    id: 1,
    client: "Acme Corp",
    amount: "$99.00",
    method: "Credit Card",
    status: "Completed",
    date: "Jan 15, 2026",
  },
  {
    id: 2,
    client: "FinEdge",
    amount: "$299.00",
    method: "Bank Transfer",
    status: "Completed",
    date: "Jan 10, 2026",
  },
  {
    id: 3,
    client: "Bright Solutions",
    amount: "$99.00",
    method: "Credit Card",
    status: "Pending",
    date: "Jan 20, 2026",
  },
  {
    id: 4,
    client: "NovaTech",
    amount: "$29.00",
    method: "PayPal",
    status: "Failed",
    date: "Jan 12, 2026",
  },
  {
    id: 5,
    client: "Tech Innovators",
    amount: "$29.00",
    method: "Credit Card",
    status: "Completed",
    date: "Jan 8, 2026",
  },
  {
    id: 6,
    client: "Acme Corp",
    amount: "$99.00",
    method: "Credit Card",
    status: "Refunded",
    date: "Dec 15, 2025",
  },
];

export default function PaymentsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | "Completed" | "Pending" | "Failed" | "Refunded">("All");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 5;

  // Filter payments
  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.client.toLowerCase().includes(search.toLowerCase()) ||
      payment.method.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter === "All" || payment.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPayments.length / ITEMS_PER_PAGE);
  const paginatedPayments = filteredPayments.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, statusFilter]);

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900">Payments</h1>
      <p className="text-sm text-gray-600 mt-1">
        Track all payment transactions and billing history.
      </p>

      {/* Search */}
      <input
        type="text"
        placeholder="Search payments..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mt-4 mb-6 w-full md:w-1/3 px-4 py-2 border-2 border-gray-300 bg-white rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />

      {/* Status Filter */}
      <div className="mb-6 flex gap-2 flex-wrap">
        {["All", "Completed", "Pending", "Failed", "Refunded"].map((status) => (
          <button
            key={status}
            onClick={() => setStatusFilter(status as any)}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
              statusFilter === status
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="mt-6 bg-white rounded-xl shadow overflow-hidden">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Client</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Method</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Date</th>
              <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {paginatedPayments.length > 0 ? (
              paginatedPayments.map((payment) => (
                <tr key={payment.id}>
                  <td className="px-6 py-4 font-medium text-gray-900">{payment.client}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">{payment.amount}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{payment.method}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                        payment.status === "Completed"
                          ? "bg-emerald-100 text-emerald-700"
                          : payment.status === "Pending"
                          ? "bg-blue-100 text-blue-700"
                          : payment.status === "Failed"
                          ? "bg-rose-100 text-rose-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{payment.date}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                  <p className="text-sm font-medium">No payments found</p>
                  <p className="text-xs mt-1">Try adjusting your search or filters</p>
                  <button
                    onClick={() => {
                      setSearch("");
                      setStatusFilter("All");
                    }}
                    className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
                  >
                    Reset filters
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </p>

          <div className="flex gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-4 py-2 text-sm rounded-lg border disabled:opacity-50 hover:bg-gray-50"
            >
              Previous
            </button>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-4 py-2 text-sm rounded-lg border disabled:opacity-50 hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}