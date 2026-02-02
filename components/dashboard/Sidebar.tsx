"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Clients", href: "/dashboard/clients" },
  { name: "Subscriptions", href: "/dashboard/subscriptions" },
  { name: "Payments", href: "/dashboard/payments" },
  { name: "Analytics", href: "/dashboard/analytics" },
  { name: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gradient-to-b from-gray-900 via-indigo-950 to-gray-900 border-r border-gray-800 min-h-screen flex flex-col">
      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6"
      >
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          ClientFlow
        </h2>
        <p className="text-xs text-gray-400 mt-1">Premium CRM</p>
      </motion.div>

      {/* Navigation */}
      <nav className="space-y-1 px-3 mt-6">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className={`block rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-500/50"
                    : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto px-6 pb-6">
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-lg p-4">
          <p className="text-xs font-semibold text-indigo-300">Pro Plan</p>
          <p className="text-xs text-gray-400 mt-1">Upgrade for more features</p>
        </div>
      </div>
    </aside>
  );
}