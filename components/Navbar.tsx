"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-linear-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              💼 Product Financing
            </Link>
          </div>

          <div className="hidden md:flex space-x-4 items-center">
            <Link
              href="/dashboard"
              className="hover:bg-blue-700 px-3 py-2 rounded transition"
            >
              Dashboard
            </Link>
            <Link
              href="/users"
              className="hover:bg-blue-700 px-3 py-2 rounded transition"
            >
              Manajemen User
            </Link>
            <Link
              href="/partners"
              className="hover:bg-blue-700 px-3 py-2 rounded transition"
            >
              Manajemen Mitra
            </Link>
            <Link
              href="/product-category"
              className="hover:bg-blue-700 px-3 py-2 rounded transition"
            >
              Kategori Produk
            </Link>
            <Link
              href="/roles"
              className="hover:bg-blue-700 px-3 py-2 rounded transition"
            >
              Role & Permissions
            </Link>
            <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition font-medium">
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-4 py-2 space-y-2">
          <Link
            href="/dashboard"
            className="block hover:bg-blue-600 px-3 py-2 rounded transition"
          >
            Dashboard
          </Link>
          <Link
            href="/users"
            className="block hover:bg-blue-600 px-3 py-2 rounded transition"
          >
            Manajemen User
          </Link>
          <Link
            href="/partners"
            className="block hover:bg-blue-600 px-3 py-2 rounded transition"
          >
            Manajemen Mitra
          </Link>
          <Link
            href="/product-category"
            className="block hover:bg-blue-600 px-3 py-2 rounded transition"
          >
            Kategori Produk
          </Link>
          <Link
            href="/roles"
            className="block hover:bg-blue-600 px-3 py-2 rounded transition"
          >
            Role & Permissions
          </Link>
        </div>
      )}
    </nav>
  );
}
