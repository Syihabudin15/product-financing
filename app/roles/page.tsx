"use client";

import { useState } from "react";

interface Permission {
  id: number;
  name: string;
  description: string;
}

interface Role {
  id: number;
  name: string;
  description: string;
  permissions: number[];
  userCount: number;
  createdDate: string;
}

const AVAILABLE_PERMISSIONS: Permission[] = [
  { id: 1, name: "View Dashboard", description: "Lihat dashboard" },
  { id: 2, name: "Manage Users", description: "Mengelola user" },
  { id: 3, name: "View Users", description: "Melihat daftar user" },
  { id: 4, name: "Manage Partners", description: "Mengelola mitra" },
  { id: 5, name: "View Partners", description: "Melihat daftar mitra" },
  { id: 6, name: "Manage Categories", description: "Mengelola kategori produk" },
  { id: 7, name: "View Categories", description: "Melihat kategori produk" },
  { id: 8, name: "Manage Products", description: "Mengelola produk" },
  { id: 9, name: "View Products", description: "Melihat produk" },
  { id: 10, name: "Manage Roles", description: "Mengelola role" },
  { id: 11, name: "View Reports", description: "Melihat laporan" },
  { id: 12, name: "Manage Settings", description: "Mengelola pengaturan sistem" },
];

export default function RolesPage() {
  const [roles, setRoles] = useState<Role[]>([
    {
      id: 1,
      name: "Admin",
      description: "Administrator dengan akses penuh ke sistem",
      permissions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      userCount: 2,
      createdDate: "2024-01-10",
    },
    {
      id: 2,
      name: "Manager",
      description: "Manager yang mengelola operasional",
      permissions: [1, 3, 5, 7, 9, 11],
      userCount: 5,
      createdDate: "2024-02-01",
    },
    {
      id: 3,
      name: "User",
      description: "User biasa dengan akses terbatas",
      permissions: [1, 3, 5, 7, 9],
      userCount: 12,
      createdDate: "2024-02-15",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [showPermissions, setShowPermissions] = useState<number | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    permissions: [] as number[],
  });

  const handleAdd = () => {
    setEditingId(null);
    setFormData({
      name: "",
      description: "",
      permissions: [],
    });
    setShowForm(true);
  };

  const handleEdit = (role: Role) => {
    setEditingId(role.id);
    setFormData({
      name: role.name,
      description: role.description,
      permissions: [...role.permissions],
    });
    setShowForm(true);
  };

  const handleTogglePermission = (permissionId: number) => {
    setFormData((prev) => ({
      ...prev,
      permissions: prev.permissions.includes(permissionId)
        ? prev.permissions.filter((p) => p !== permissionId)
        : [...prev.permissions, permissionId],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setRoles(
        roles.map((r) =>
          r.id === editingId ? { ...r, ...formData } : r
        )
      );
    } else {
      const newRole: Role = {
        id: Math.max(...roles.map((r) => r.id), 0) + 1,
        ...formData,
        userCount: 0,
        createdDate: new Date().toISOString().split("T")[0],
      };
      setRoles([...roles, newRole]);
    }
    setShowForm(false);
  };

  const handleDelete = (id: number) => {
    if (id <= 3) {
      alert("Tidak dapat menghapus role default (Admin, Manager, User)");
      return;
    }
    if (confirm("Apakah Anda yakin ingin menghapus role ini?")) {
      setRoles(roles.filter((r) => r.id !== id));
    }
  };

  const handleEditPermissions = (role: Role) => {
    setShowPermissions(showPermissions === role.id ? null : role.id);
  };

  const handleSavePermissions = (roleId: number) => {
    setRoles(
      roles.map((r) =>
        r.id === roleId ? { ...r, permissions: formData.permissions } : r
      )
    );
    setShowPermissions(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Role & Permission</h1>
          <p className="text-gray-600 mt-1">
            Kelola role dan hak akses pengguna
          </p>
        </div>
        <button
          onClick={handleAdd}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition font-medium shadow-md"
        >
          + Tambah Role
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-indigo-600">
          <p className="text-gray-600 text-sm">Total Role</p>
          <p className="text-3xl font-bold text-gray-900">{roles.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-600">
          <p className="text-gray-600 text-sm">Total Permisi</p>
          <p className="text-3xl font-bold text-blue-600">
            {AVAILABLE_PERMISSIONS.length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-600">
          <p className="text-gray-600 text-sm">Total User</p>
          <p className="text-3xl font-bold text-green-600">
            {roles.reduce((sum, r) => sum + r.userCount, 0)}
          </p>
        </div>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow-md border border-indigo-200">
          <h2 className="text-xl font-semibold mb-4">
            {editingId ? "Edit Role" : "Tambah Role Baru"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nama Role
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Contoh: Admin, Manager, User"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Deskripsi Role
              </label>
              <textarea
                rows={2}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Masukkan deskripsi role"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Pilih Permission
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-48 overflow-y-auto border border-gray-200 rounded-lg p-4 bg-gray-50">
                {AVAILABLE_PERMISSIONS.map((permission) => (
                  <label
                    key={permission.id}
                    className="flex items-center gap-3 cursor-pointer hover:bg-white p-2 rounded transition"
                  >
                    <input
                      type="checkbox"
                      checked={formData.permissions.includes(permission.id)}
                      onChange={() => handleTogglePermission(permission.id)}
                      className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                    />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">
                        {permission.name}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {permission.description}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Total dipilih: {formData.permissions.length} dari{" "}
                {AVAILABLE_PERMISSIONS.length}
              </p>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition font-medium"
              >
                {editingId ? "Simpan Perubahan" : "Simpan"}
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition font-medium"
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Roles List */}
      <div className="space-y-4">
        {roles.length === 0 ? (
          <div className="bg-white rounded-lg p-8 text-center text-gray-500">
            Tidak ada data role
          </div>
        ) : (
          roles.map((role) => (
            <div
              key={role.id}
              className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden"
            >
              {/* Role Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {role.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {role.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleEdit(role)}
                      className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition font-medium text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleEditPermissions(role)}
                      className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg hover:bg-indigo-200 transition font-medium text-sm"
                    >
                      {showPermissions === role.id
                        ? "Tutup Permission"
                        : "Kelola Permission"}
                    </button>
                    <button
                      onClick={() => handleDelete(role.id)}
                      disabled={role.id <= 3}
                      className="bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200 transition font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Hapus
                    </button>
                  </div>
                </div>

                {/* Role Stats */}
                <div className="flex gap-6 mt-4 text-sm">
                  <div>
                    <span className="text-gray-600">User: </span>
                    <span className="font-semibold text-gray-900">
                      {role.userCount}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Permission: </span>
                    <span className="font-semibold text-gray-900">
                      {role.permissions.length}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Dibuat: </span>
                    <span className="text-gray-900">
                      {new Date(role.createdDate).toLocaleDateString("id-ID")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Permissions Section */}
              {showPermissions === role.id && (
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-gray-900">
                      Kelola Permission untuk Role "{role.name}"
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-64 overflow-y-auto mb-4">
                    {AVAILABLE_PERMISSIONS.map((permission) => (
                      <label
                        key={permission.id}
                        className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200 cursor-pointer hover:border-indigo-300 transition"
                      >
                        <input
                          type="checkbox"
                          checked={formData.permissions.includes(
                            permission.id
                          )}
                          onChange={() => {
                            handleTogglePermission(permission.id);
                          }}
                          className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500 mt-1"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 text-sm">
                            {permission.name}
                          </p>
                          <p className="text-gray-500 text-xs">
                            {permission.description}
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-4 border-t border-gray-200">
                    <button
                      onClick={() => handleSavePermissions(role.id)}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition font-medium"
                    >
                      Simpan Permission
                    </button>
                    <button
                      onClick={() => setShowPermissions(null)}
                      className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition font-medium"
                    >
                      Batal
                    </button>
                  </div>
                </div>
              )}

              {/* Permission Badges */}
              {!showPermissions && (
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <p className="text-sm font-medium text-gray-700 mb-3">
                    Permission yang Diberikan:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {role.permissions.length > 0 ? (
                      role.permissions.map((permId) => {
                        const perm = AVAILABLE_PERMISSIONS.find(
                          (p) => p.id === permId
                        );
                        return (
                          <span
                            key={permId}
                            className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {perm?.name}
                          </span>
                        );
                      })
                    ) : (
                      <span className="text-gray-500 text-sm italic">
                        Tidak ada permission
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
