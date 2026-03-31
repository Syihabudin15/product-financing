"use client";

import { useState } from "react";

interface Role {
  id: string;
  name: string;
  status: "Aktif" | "Tidak Aktif";
  updated: string;
}

const SAMPLE_ROLES: Role[] = [
  {
    id: "RL001",
    name: "Developer",
    status: "Aktif",
    updated: "30-03-2026 14:26:34",
  },
  {
    id: "RL03",
    name: "Admin",
    status: "Aktif",
    updated: "30-03-2026 09:10:23",
  },
  {
    id: "RL02",
    name: "Slik",
    status: "Aktif",
    updated: "04-03-2026 16:19:57",
  },
];

export default function RolesPage() {
  const [roles, setRoles] = useState<Role[]>(SAMPLE_ROLES);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);

  const filteredRoles = roles.filter(
    (role) =>
      role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      role.id.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleDelete = (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus role ini?")) {
      setRoles(roles.filter((r) => r.id !== id));
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Manajemen Role</h1>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium flex items-center gap-2 w-fit"
        >
          🔵 Add Role
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Cari role..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-900 w-8">
                  ➕
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">
                  ID
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">
                  Nama Role
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">
                  Status
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">
                  Updated
                </th>
                <th className="px-4 py-3 text-center font-semibold text-gray-900">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredRoles.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-8 text-center text-gray-500"
                  >
                    Tidak ada data role
                  </td>
                </tr>
              ) : (
                filteredRoles.map((role) => (
                  <tr key={role.id} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3 text-gray-600">
                      <button className="text-lg cursor-pointer">➕</button>
                    </td>
                    <td className="px-4 py-3 text-gray-900 font-semibold">
                      {role.id}
                    </td>
                    <td className="px-4 py-3 text-blue-600 font-medium">
                      {role.name}
                    </td>
                    <td className="px-4 py-3">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        {role.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-xs">
                      {role.updated}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex justify-center gap-2">
                        <button className="text-blue-600 hover:text-blue-800 transition text-lg">
                          ✏️
                        </button>
                        <button
                          onClick={() => handleDelete(role.id)}
                          className="text-red-600 hover:text-red-800 transition text-lg"
                        >
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
