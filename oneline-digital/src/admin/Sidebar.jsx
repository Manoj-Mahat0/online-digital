// src/admin/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaFileInvoice, FaStar } from "react-icons/fa";

export default function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/admin", icon: <FaTachometerAlt /> },
    { name: "GST Page", path: "/admin/gst", icon: <FaFileInvoice /> },
    { name: "FSSAI Page", path: "/admin/fssai", icon: <FaStar /> },
  ];

  return (
    <div className="w-64 bg-[#1f2937] text-white min-h-screen flex flex-col">
      <div className="text-2xl font-bold p-6 border-b border-gray-700">Admin Panel</div>
      <nav className="flex-1 p-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 mb-2 rounded hover:bg-gray-700 transition ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            {item.icon} <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
