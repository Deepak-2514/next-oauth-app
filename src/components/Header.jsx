import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold text-white">
          <span className="text-blue-900">Auth</span>
          <span className="text-pink-200">App</span>
        </Link>

        {/* Nav Links */}
        <nav className="space-x-6">
          <Link href="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-200">
            About
          </Link>
          <Link href="/signin" className="text-white hover:text-gray-200">
            Sign in
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
