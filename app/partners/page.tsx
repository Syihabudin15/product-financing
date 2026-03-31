"use client";

import { useState } from "react";

interface Partner {
  id: number;
  name: string;
  email: string;
  phone: string;
  category: string;
  status: "active" | "inactive";
  joinDate: string;
  city: string;
}

export default function PartnersPage() {
  const [partners, setPartners] = useState<Partner[]>([
    {
      id: 1,
      name: "PT Mitra Jaya Berkah",
      email: "contact@mjtjb.com",
      phone: "+62-812-3456-7890",
      category: "Distributor",
      status: "active",
      joinDate: "2024-01-10",
      city: "Jakarta",
    },
    {
      id: 2,
      name: "CV Solusi Finance",
      email: "info@solusifinance.com",
      phone: "+62-821-9876-5432",
      category: "Lender",
      status: "active",
      joinDate: "2024-02-15",
      city: "Surabaya",
    },
    {
      id: 3,
      name: "UD Bersama Maju",
      email: "contact@bersamamaju.id",
      phone: "+62-811-5555-6666",
      category: "Agent",
      status: "inactive",
      joinDate: "2024-03-01",
      city: "Bandung",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "Agent",
    city: "",
  });

  const handleAdd = () => {
    setEditingId(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      category: "Agent",
      city: "",
    });
    setShowForm(true);
  };

  const handleEdit = (partner: Partner) => {
    setEditingId(partner.id);
    setFormData({
      name: partner.name,
      email: partner.email,
      phone: partner.phone,
      category: partner.category,
      city: partner.city,
    });
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setPartners(
        partners.map((p) => (p.id === editingId ? { ...p, ...formData } : p)),
      );
    } else {
      const newPartner: Partner = {
        id: Math.max(...partners.map((p) => p.id), 0) + 1,
        ...formData,
        status: "active",
        joinDate: new Date().toISOString().split("T")[0],
      };
      setPartners([...partners, newPartner]);
    }
    setShowForm(false);
  };

  const handleDelete = (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus mitra ini?")) {
      setPartners(partners.filter((p) => p.id !== id));
    }
  };

  const handleToggleStatus = (id: number) => {
    setPartners(
      partners.map((p) =>
        p.id === id
          ? { ...p, status: p.status === "active" ? "inactive" : "active" }
          : p,
      ),
    );
  };

  const activeCount = partners.filter((p) => p.status === "active").length;
  const categoryCounts = {
    Distributor: partners.filter((p) => p.category === "Distributor").length,
    Lender: partners.filter((p) => p.category === "Lender").length,
    Agent: partners.filter((p) => p.category === "Agent").length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Manajemen Mitra</h1>
          <p className="text-gray-600 mt-1">Kelola partner dan mitra bisnis</p>
        </div>
        <button
          onClick={handleAdd}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition font-medium shadow-md"
        >
          + Tambah Mitra
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-600">
          <p className="text-gray-600 text-sm">Total Mitra</p>
          <p className="text-3xl font-bold text-gray-900">{partners.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-600">
          <p className="text-gray-600 text-sm">Mitra Aktif</p>
          <p className="text-3xl font-bold text-green-600">{activeCount}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-orange-600">
          <p className="text-gray-600 text-sm">Distributor</p>
          <p className="text-3xl font-bold text-orange-600">
            {categoryCounts.Distributor}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-600">
          <p className="text-gray-600 text-sm">Lender</p>
          <p className="text-3xl font-bold text-purple-600">
            {categoryCounts.Lender}
          </p>
        </div>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow-md border border-green-200">
          <h2 className="text-xl font-semibold mb-4">
            {editingId ? "Edit Mitra" : "Tambah Mitra Baru"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Mitra
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="PT/CV/UD Nama Mitra"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="email@example.com"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+62-..."
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Kota
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  placeholder="Nama Kota"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kategori Mitra
              </label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="Agent">Agent</option>
                <option value="Distributor">Distributor</option>
                <option value="Lender">Lender</option>
              </select>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition font-medium"
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

      {/* Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Nama Mitra
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Telepon
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Kategori
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Kota
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {partners.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    Tidak ada data mitra
                  </td>
                </tr>
              ) : (
                partners.map((partner) => (
                  <tr key={partner.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-gray-900 font-medium">
                      {partner.name}
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      {partner.email}
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      {partner.phone}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          partner.category === "Distributor"
                            ? "bg-blue-100 text-blue-800"
                            : partner.category === "Lender"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {partner.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      {partner.city}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleToggleStatus(partner.id)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                          partner.status === "active"
                            ? "bg-green-100 text-green-800 hover:bg-green-200"
                            : "bg-red-100 text-red-800 hover:bg-red-200"
                        }`}
                      >
                        {partner.status === "active" ? "Aktif" : "Tidak Aktif"}
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(partner)}
                          className="text-blue-600 hover:text-blue-800 font-medium transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(partner.id)}
                          className="text-red-600 hover:text-red-800 font-medium transition"
                        >
                          Hapus
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
