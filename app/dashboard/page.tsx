export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-600">
          <p className="text-gray-600 text-sm">Total Pengguna</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">24</p>
          <p className="text-gray-500 text-xs mt-2">↑ 2.5% dari bulan lalu</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-600">
          <p className="text-gray-600 text-sm">Pengguna Aktif</p>
          <p className="text-3xl font-bold text-green-600 mt-2">18</p>
          <p className="text-gray-500 text-xs mt-2">75% dari total pengguna</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-orange-600">
          <p className="text-gray-600 text-sm">Produk Aktif</p>
          <p className="text-3xl font-bold text-orange-600 mt-2">12</p>
          <p className="text-gray-500 text-xs mt-2">5 sedang dalam review</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-600">
          <p className="text-gray-600 text-sm">Total Transaksi</p>
          <p className="text-3xl font-bold text-purple-600 mt-2">156</p>
          <p className="text-gray-500 text-xs mt-2">Rp 2.5 Miliar</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Aktivitas Terbaru</h2>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-start gap-3 pb-3 border-b">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                  {i}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">
                    User baru mendaftar
                  </p>
                  <p className="text-sm text-gray-500">{i} jam yang lalu</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Role Distribution</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm font-medium text-gray-700">Admin</p>
                <p className="text-sm font-medium text-gray-900">2</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: "8%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm font-medium text-gray-700">Manager</p>
                <p className="text-sm font-medium text-gray-900">5</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: "21%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <p className="text-sm font-medium text-gray-700">User</p>
                <p className="text-sm font-medium text-gray-900">17</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-orange-600 h-2 rounded-full"
                  style={{ width: "71%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
