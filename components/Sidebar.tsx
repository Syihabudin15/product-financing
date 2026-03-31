"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [expandedMenu, setExpandedMenu] = useState<string | null>("master");

  const toggleMenu = (menu: string) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  const isActive = (href: string) => pathname === href;
  const isSubActive = (href: string) => pathname.startsWith(href);

  return (
    <aside className="hidden md:block w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-6 space-y-4">
        {/* Main Menu Items */}
        <Link
          href="/dashboard"
          className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
            isActive("/dashboard")
              ? "bg-blue-100 text-blue-600 font-semibold"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <span className="text-xl">📋</span>
          <span>Daftar Nominatif</span>
        </Link>

        <Link
          href="/invoices"
          className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
            isActive("/invoices")
              ? "bg-blue-100 text-blue-600 font-semibold"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <span className="text-xl">🧾</span>
          <span>Tagihan</span>
        </Link>

        <Link
          href="/data-debitur"
          className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
            isActive("/data-debitur")
              ? "bg-blue-100 text-blue-600 font-semibold"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <span className="text-xl">👤</span>
          <span>Data Debitur</span>
        </Link>

        <Link
          href="/pelunas-debitur"
          className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
            isActive("/pelunas-debitur")
              ? "bg-blue-100 text-blue-600 font-semibold"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <span className="text-xl">✅</span>
          <span>Pelunsasan Debitur</span>
        </Link>

        <Link
          href="/laporan-keuangan"
          className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
            isActive("/laporan-keuangan")
              ? "bg-blue-100 text-blue-600 font-semibold"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <span className="text-xl">📊</span>
          <span>Laporan Keuangan</span>
        </Link>

        <Link
          href="/settings"
          className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
            isActive("/settings")
              ? "bg-blue-100 text-blue-600 font-semibold"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <span className="text-xl">⚙️</span>
          <span>Profile Setting</span>
        </Link>

        {/* Master Data Menu - Expandable */}
        <div className="pt-4 border-t border-gray-200">
          <button
            onClick={() => toggleMenu("master")}
            className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition ${
              expandedMenu === "master"
                ? "bg-blue-100 text-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <div className="flex items-center space-x-3">
              <span className="text-xl">📁</span>
              <span className="font-semibold">Master Data</span>
            </div>
            <span
              className={`transition transform ${
                expandedMenu === "master" ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          {/* Submenu Items */}
          {expandedMenu === "master" && (
            <div className="mt-2 space-y-1 pl-4 border-l-2 border-blue-300 ml-4">
              <Link
                href="/roles"
                className={`flex items-center space-x-3 px-4 py-2 rounded transition text-sm ${
                  isActive("/roles")
                    ? "bg-blue-100 text-blue-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span>🔐</span>
                <span>Manajemen Role</span>
              </Link>

              <Link
                href="/users"
                className={`flex items-center space-x-3 px-4 py-2 rounded transition text-sm ${
                  isActive("/users")
                    ? "bg-blue-100 text-blue-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span>👥</span>
                <span>Manajemen User</span>
              </Link>

              <Link
                href="/units"
                className={`flex items-center space-x-3 px-4 py-2 rounded transition text-sm ${
                  isActive("/units")
                    ? "bg-blue-100 text-blue-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span>🏢</span>
                <span>Manajemen Unit</span>
              </Link>

              <Link
                href="/partners"
                className={`flex items-center space-x-3 px-4 py-2 rounded transition text-sm ${
                  isActive("/partners")
                    ? "bg-blue-100 text-blue-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span>🤝</span>
                <span>Manajemen Mitra</span>
              </Link>

              <Link
                href="/jenis-pembiayaan"
                className={`flex items-center space-x-3 px-4 py-2 rounded transition text-sm ${
                  isActive("/jenis-pembiayaan")
                    ? "bg-blue-100 text-blue-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span>📦</span>
                <span>Jenis Pembiayaan</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
