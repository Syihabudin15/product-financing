"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: "📊" },
    { name: "Manajemen User", href: "/users", icon: "👥" },
    { name: "Manajemen Mitra", href: "/partners", icon: "🤝" },
    { name: "Kategori Produk", href: "/product-category", icon: "📦" },
    { name: "Role & Permission", href: "/roles", icon: "🔐" },
    { name: "Settings", href: "/settings", icon: "⚙️" },
  ];

  return (
    <aside className="hidden md:block w-64 bg-white border-r border-gray-200 p-4 min-h-screen">
      <div className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
              pathname === item.href
                ? "bg-blue-100 text-blue-600 font-semibold"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
