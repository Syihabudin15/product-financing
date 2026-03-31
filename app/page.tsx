export default function Home() {
  return (
    <div className="space-y-6">
      <div className="bg-linear-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-2">Selamat Datang!</h1>
        <p className="text-blue-100 text-lg">
          Sistem Manajemen Product Financing
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            📊 Dashboard
          </h2>
          <p className="text-gray-600 mb-4">
            Lihat ringkasan statistik dan aktivitas sistem secara real-time.
          </p>
          <a
            href="/dashboard"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Buka Dashboard
          </a>
        </div>

        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            👥 Manajemen User
          </h2>
          <p className="text-gray-600 mb-4">
            Kelola pengguna, role, dan permission sistem manajemen.
          </p>
          <a
            href="/users"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Manajemen User
          </a>
        </div>

        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            🤝 Manajemen Mitra
          </h2>
          <p className="text-gray-600 mb-4">
            Kelola partner, distributor, lender, dan agen bisnis.
          </p>
          <a
            href="/partners"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Manajemen Mitra
          </a>
        </div>

        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            � Kategori Produk
          </h2>
          <p className="text-gray-600 mb-4">
            Kelola kategori, klasifikasi, dan jenis produk.
          </p>
          <a
            href="/product-category"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Kategori Produk
          </a>
        </div>

        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            �🔐 Role & Permission
          </h2>
          <p className="text-gray-600 mb-4">
            Atur role, permission, dan akses untuk setiap pengguna.
          </p>
          <a
            href="/roles"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Kelola Role
          </a>
        </div>

        <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">⚙️ Settings</h2>
          <p className="text-gray-600 mb-4">
            Konfigurasi sistem, tema, dan preferensi aplikasi.
          </p>
          <a
            href="/settings"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Buka Settings
          </a>
        </div>
      </div>
    </div>
  );
}
