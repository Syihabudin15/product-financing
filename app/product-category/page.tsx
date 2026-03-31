"use client";

import { useState } from "react";

interface ProductCategory {
  id: number;
  name: string;
  description: string;
  icon: string;
  status: "active" | "inactive";
  createdDate: string;
  productCount: number;
}

export default function ProductCategoryPage() {
  const [categories, setCategories] = useState<ProductCategory[]>([
    {
      id: 1,
      name: "Elektronik",
      description: "Peralatan elektronik dan gadget",
      icon: "📱",
      status: "active",
      createdDate: "2024-01-15",
      productCount: 24,
    },
    {
      id: 2,
      name: "Furniture",
      description: "Mebel dan perabotan rumah tangga",
      icon: "🛋️",
      status: "active",
      createdDate: "2024-02-10",
      productCount: 15,
    },
    {
      id: 3,
      name: "Kendaraan",
      description: "Mobil, motor, dan aksesori kendaraan",
      icon: "🚗",
      status: "active",
      createdDate: "2024-02-20",
      productCount: 8,
    },
    {
      id: 4,
      name: "Fashion",
      description: "Pakaian, sepatu, dan aksesoris fashion",
      icon: "👔",
      status: "inactive",
      createdDate: "2024-03-05",
      productCount: 32,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    icon: "📦",
  });

  const handleAdd = () => {
    setEditingId(null);
    setFormData({
      name: "",
      description: "",
      icon: "📦",
    });
    setShowForm(true);
  };

  const handleEdit = (category: ProductCategory) => {
    setEditingId(category.id);
    setFormData({
      name: category.name,
      description: category.description,
      icon: category.icon,
    });
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setCategories(
        categories.map((c) => (c.id === editingId ? { ...c, ...formData } : c)),
      );
    } else {
      const newCategory: ProductCategory = {
        id: Math.max(...categories.map((c) => c.id), 0) + 1,
        ...formData,
        status: "active",
        createdDate: new Date().toISOString().split("T")[0],
        productCount: 0,
      };
      setCategories([...categories, newCategory]);
    }
    setShowForm(false);
  };

  const handleDelete = (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus kategori ini?")) {
      setCategories(categories.filter((c) => c.id !== id));
    }
  };

  const handleToggleStatus = (id: number) => {
    setCategories(
      categories.map((c) =>
        c.id === id
          ? { ...c, status: c.status === "active" ? "inactive" : "active" }
          : c,
      ),
    );
  };

  const activeCount = categories.filter((c) => c.status === "active").length;
  const totalProducts = categories.reduce((sum, c) => sum + c.productCount, 0);

  const iconOptions = [
    "📦",
    "📱",
    "💻",
    "🛋️",
    "🚗",
    "👔",
    "🏠",
    "🍕",
    "📚",
    "⚽",
    "🎮",
    "🎧",
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Kategori Produk</h1>
          <p className="text-gray-600 mt-1">
            Kelola kategori dan klasifikasi produk
          </p>
        </div>
        <button
          onClick={handleAdd}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition font-medium shadow-md"
        >
          + Tambah Kategori
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-600">
          <p className="text-gray-600 text-sm">Total Kategori</p>
          <p className="text-3xl font-bold text-gray-900">
            {categories.length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-600">
          <p className="text-gray-600 text-sm">Kategori Aktif</p>
          <p className="text-3xl font-bold text-green-600">{activeCount}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-600">
          <p className="text-gray-600 text-sm">Total Produk</p>
          <p className="text-3xl font-bold text-blue-600">{totalProducts}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-orange-600">
          <p className="text-gray-600 text-sm">Rata-rata Produk</p>
          <p className="text-3xl font-bold text-orange-600">
            {categories.length > 0
              ? Math.round(totalProducts / categories.length)
              : 0}
          </p>
        </div>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow-md border border-purple-200">
          <h2 className="text-xl font-semibold mb-4">
            {editingId ? "Edit Kategori" : "Tambah Kategori Baru"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nama Kategori
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Masukkan nama kategori"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Deskripsi
              </label>
              <textarea
                rows={3}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Masukkan deskripsi kategori"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Icon Kategori
              </label>
              <div className="grid grid-cols-6 gap-2 mb-3">
                {iconOptions.map((icon) => (
                  <button
                    key={icon}
                    type="button"
                    onClick={() => setFormData({ ...formData, icon })}
                    className={`text-2xl p-2 rounded-lg border-2 transition ${
                      formData.icon === icon
                        ? "border-purple-600 bg-purple-50"
                        : "border-gray-300 hover:border-purple-400"
                    }`}
                  >
                    {icon}
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                Pilih icon: {formData.icon}
              </p>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition font-medium"
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

      {/* Cards View */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.length === 0 ? (
          <div className="col-span-full text-center py-12 text-gray-500">
            Tidak ada data kategori
          </div>
        ) : (
          categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{category.icon}</div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    category.status === "active"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {category.status === "active" ? "Aktif" : "Tidak Aktif"}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {category.name}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {category.description}
              </p>

              <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Jumlah Produk:</span>
                  <span className="font-semibold text-gray-900">
                    {category.productCount}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Dibuat:</span>
                  <span className="text-gray-900">
                    {new Date(category.createdDate).toLocaleDateString("id-ID")}
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(category)}
                  className="flex-1 text-blue-600 hover:text-blue-800 font-medium transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleToggleStatus(category.id)}
                  className="flex-1 px-3 py-1 rounded text-sm font-medium transition"
                  style={{
                    backgroundColor:
                      category.status === "active" ? "#dbeafe" : "#fef2f2",
                    color: category.status === "active" ? "#1e40af" : "#991b1b",
                  }}
                >
                  {category.status === "active" ? "Nonaktifkan" : "Aktifkan"}
                </button>
                <button
                  onClick={() => handleDelete(category.id)}
                  className="flex-1 text-red-600 hover:text-red-800 font-medium transition"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
