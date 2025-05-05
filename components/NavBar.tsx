'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name with solid color */}
        <span className="text-2xl sm:text-3xl font-bold tracking-tight">
          Tushar Kumar
        </span>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center font-medium text-gray-800">
          <NavLink href="/" label="Home" />
          <NavLink href="/#aboutme" label="About Me" />
          <NavLink href="/#projects" label="Projects" />
          <NavLink href="/#skills" label="Skills" />
          <NavLink href="/contact" label="Contact" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-white/95 backdrop-blur shadow-inner rounded-b-xl">
          <NavLink href="/" label="Home" onClick={() => setIsOpen(false)} />
          <NavLink href="/#aboutme" label="About Me" onClick={() => setIsOpen(false)} />
          <NavLink href="/#projects" label="Projects" onClick={() => setIsOpen(false)} />
          <NavLink href="/#skills" label="Skills" onClick={() => setIsOpen(false)} />
          <NavLink href="/contact" label="Contact" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative group text-base transition-all duration-200"
    >
      <span className="text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
        {label}
      </span>
      <span className="block h-[2px] w-0 group-hover:w-full bg-indigo-500 transition-all duration-300"></span>
    </Link>
  );
}
