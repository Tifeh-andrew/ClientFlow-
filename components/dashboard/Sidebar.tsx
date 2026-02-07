"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-indigo-600 text-white px-3 py-2 rounded-lg shadow-lg"
      >
        ☰
      </button>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-64 bg-gradient-to-b from-gray-900 via-indigo-950 to-gray-900 border-r border-gray-800 min-h-screen flex-col">
        <SidebarContent pathname={pathname} />
      </aside>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Slide panel */}
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed z-50 top-0 left-0 w-64 h-screen bg-gradient-to-b from-gray-900 via-indigo-950 to-gray-900 border-r border-gray-800"
            >
              <SidebarContent pathname={pathname} onNavigate={() => setOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function SidebarContent({
  pathname,
  onNavigate,
}: {
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <>
      {/* Logo */}
      <div className="p-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          ClientFlow
        </h2>
        <p className="text-xs text-gray-400 mt-1">Premium CRM</p>
      </div>

      {/* Navigation */}
      <nav className="space-y-1 px-3 mt-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onNavigate}
              className={`block rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                isActive
                  ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-500/40"
                  : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="mt-auto px-6 pb-6">
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-lg p-4">
          <p className="text-xs font-semibold text-indigo-300">Pro Plan</p>
          <p className="text-xs text-gray-400 mt-1">
            Upgrade for more features
          </p>
        </div>
      </div>
    </>
  );
}
