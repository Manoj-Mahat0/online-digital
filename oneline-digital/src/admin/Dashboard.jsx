// src/admin/Dashboard.jsx
import React from "react";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">Total GST Users: 120</div>
        <div className="p-6 bg-white rounded-lg shadow">Total FSSAI Users: 80</div>
        <div className="p-6 bg-white rounded-lg shadow">Revenue: $5,400</div>
      </div>
    </div>
  );
}
