"use client";

import { useState, useEffect } from "react";

const subscriptions = [
  {
    id: 1,
    client: "Acme Corp",
    plan: "Pro",
    price: "$99/mo",
    status: "Active",
    nextBilling: "Feb 15, 2026",
  },
  {
    id: 2,
    client: "NovaTech",
    plan: "Basic",
    price: "$29/mo",
    status: "Cancelled",
    nextBilling: "N/A",
  },
  {
    id: 3,
    client: "FinEdge",
    plan: "Enterprise",
    price: "$299/mo",
    status: "Active",
    nextBilling: "Feb 10, 2026",
  },
  {
    id: 4,
    client: "Bright Solutions",
    plan: "Pro",
    price: "$99/mo",
    status: "Active",
    nextBilling: "Feb 20, 2026",
  },
  {
    id: 5,
    client: "Tech Innovators",
    plan: "Basic",
    price: "$29/mo",
    status: "Paused",
    nextBilling: "N/A",
  },
];

export default function SubscriptionsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | "Active" | "Cancelled" | "Paused">("All");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 5;

  // Filter subscriptions
  const filteredSubscriptions = subscriptions.filter((sub) => {
    const matchesSearch =
      sub.client.toLowerCase().includes(search.toLowerCase()) ||
      sub.plan.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter === "All" || sub.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Pagination
  const totalPages = Math.ceil(filteredSubscriptions.length / ITEMS_PER_PAGE);
  const paginatedSubscriptions = filteredSubscriptions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, statusFilter]);

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900">Subscriptions</h1>
      <p className="text-sm text-gray-600 mt-1">
        Manage recurring subscriptions and billing cycles.
      </p>

      {/* Search */}
      <input
        type="text"
        placeholder="Search subscriptions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mt-4 mb-6 w-full md:w-1/3 px-4 py-2 border-2 border-gray-300 bg-white rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />

      {/* Status Filter */}
      <div className="mb-6 flex gap-2">
        {["All", "Active", "Cancelled", "Paused"].map((status) => (
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
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Plan</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Price</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Next Billing</th>
              <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {paginatedSubscriptions.length > 0 ? (
              paginatedSubscriptions.map((sub) => (
                <tr key={sub.id}>
                  <td className="px-6 py-4 font-medium text-gray-900">{sub.client}</td>
                  <td className="px-6 py-4 text-gray-600">{sub.plan}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">{sub.price}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                        sub.status === "Active"
                          ? "bg-emerald-100 text-emerald-700"
                          : sub.status === "Cancelled"
                          ? "bg-rose-100 text-rose-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {sub.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{sub.nextBilling}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                      Manage
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                  <p className="text-sm font-medium">No subscriptions found</p>
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